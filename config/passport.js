const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const Usuario = require("../models/userModel");

passport.use(
  new GoogleStrategy(
    {
      clientID: "YOUR_GOOGLE_CLIENT_ID",
      clientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await Usuario.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }

      const newUser = new Usuario({
        googleId: profile.id,
        nombre: profile.name.givenName,
        apellido: profile.name.familyName,
        correo: profile.emails[0].value,
      });

      await newUser.save();
      done(null, newUser);
    }
  )
);

passport.use(
  new LinkedInStrategy(
    {
      clientID: "YOUR_LINKEDIN_CLIENT_ID",
      clientSecret: "YOUR_LINKEDIN_CLIENT_SECRET",
      callbackURL: "/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"],
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await Usuario.findOne({ linkedinId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }

      const newUser = new Usuario({
        linkedinId: profile.id,
        nombre: profile.name.givenName,
        apellido: profile.name.familyName,
        correo: profile.emails[0].value,
      });

      await newUser.save();
      done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await Usuario.findById(id);
  done(null, user);
});
