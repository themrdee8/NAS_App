const mongoose = require("mongoose");

const triageSchema = new mongoose.Schema(
  {
    patientName: String,
    age: Number,
    gender: String,
    vitalSigns: {
      bp: Number,
      pulseRate: Number,
      respRate: Number,
      spO2: Number,
      temp: Number,
    },
    primaryAssessment: {
      circulation: String,
      breathing: String,
      consciousness: String,
    },
    triageCategory: String,
    patientRefusedTreatment: Boolean,
    handoff: {
      facilityName: String,
      doctorName: String,
      condition: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Triage", triageSchema);
