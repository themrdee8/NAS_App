const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

router.post(
  "/submit-personnel-form",
  [
    check("receivingPersonnelName", "Receiving Personnel Name is required")
      .not()
      .isEmpty(),
    check("patientHandoffDate", "Patient Handoff Date is required")
      .not()
      .isEmpty(),
    check("signature", "Signature is required").not().isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const formData = req.body;
    console.log("Personnel Form Data: ", formData);

    return res
      .status(200)
      .json({ message: "Personnel form submitted successfully" });
  }
);

router.post(
  "/submit-patient-info",
  [
    check("patientName", "Patient Name is required").not().isEmpty(),
    check("age", "Age is required").not().isEmpty(),
    check("contactPerson", "Contact Person is required").not().isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const formData = req.body;
    console.log("Patient Info Form Data: ", formData);

    return res
      .status(200)
      .json({ message: "Patient information submitted successfully" });
  }
);
