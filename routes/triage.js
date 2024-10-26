const express = require("express");
const {
  addTriageData,
  getAllTriageData,
} = require("../controllers/triageController");
const { validateTriageData } = require("../middleware/validationMiddleware");

const router = express.Router();

router.post("/add", validateTriageData, addTriageData);
router.get("/", getAllTriageData);

module.exports = router;
