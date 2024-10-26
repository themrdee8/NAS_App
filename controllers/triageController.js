const Triage = require("../models/Triage");

const addTriageData = async (req, res, next) => {
  try {
    const triageData = new Triage(req.body);
    const saveData = await triageData.save();
    res.status(201).json(saveData);
  } catch (error) {
    next(error);
  }
};

const getAllTriageData = async (res, next) => {
  try {
    const triageData = await Triage.find();
    res.json(triageData);
  } catch (error) {
    next(error);
  }
};

module.exports = { addTriageData, getAllTriageData };
