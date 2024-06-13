const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salarySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, required: true, enum: ["Backend", "Fullstack"] },
  seniority: {
    type: String,
    required: true,
    enum: ["Trainee", "Junior", "Semi-Senior", "Senior", "Tech Leader"],
  },
  salary: { type: Number, required: true },
  currency: { type: String, required: true, enum: ["ARS", "USD"] },
  hasRaise: { type: Boolean, required: true },
  raiseFrequency: { type: String },
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Salary", salarySchema);
