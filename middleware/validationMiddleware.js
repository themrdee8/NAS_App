const { body, validationResult } = require("express-validator");

const validateTriageData = [
  body("patientName").notEmpty().withMessage("Patient name is required"),
  body("age").isInt({ min: 0 }).withMessage("Age must be a valid number"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateTriageData;
