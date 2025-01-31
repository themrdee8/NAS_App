export const PreHospitalCare = {
  ambulanceStation: "",
  shiftCode: "",
  region: "",
  dispatchDate: "",
  time: "",
  timeAmbulanceAssigned: "",
  timeAmbulanceArrivedScene: "",
  timeAmbulanceLeftScene: "",
  timeArrivedFacility: "",
  vitalSignsTime: "",
  dateAndTime: "",
  patientHandoffDate: "",
  patientHandoffTime: "",
  emtDateTime: "",
  kmReading: "",
  callNumber: "",
  callerName: "",
  dispatcher: "",
  comments: "",
  patientName: "",
  age: "",
  address: "",
  telephone: "",
  idPassportNumber: "",
  contactPersonName: "",
  contactPersonTelephone: "",
  chiefComplaint: "",
  descriptionOfProblem: "",
  recentMedicalHistory: "",
  vitalSigns: "",
  bp: "",
  pulseRate: "",
  respRate: "",
  spO2: "",
  temp: "",
  additionalInterventions: "",
  fieldDiagnosisObservations: "",
  receivingFacility: "",
  receivingDepartment: "",
  receivingDoctorOrNurse: "",
  signature: "",
  receivingPersonnelName: "",
  receivingPersonnelSignature: "",
  emt1ServiceNumber: "",
  emt1Signature: "",
  emt2ServiceNumber: "",
  emt2Signature: "",
  emtGaveOralReportToName: "",
  serviceUnitContact: [
    "residence",
    "other",
    "hospitalClinic",
    "officePublic",
    "publicPlace",
  ],
  gender: ["male", "female"],
  ambulanceType: ["private", "basicLifeSupport", "advancedLifeSupport"],
  callType: ["emergency", "urgent", "routine"],
  reasonForTransfer: ["obstetrics", "dialysis", "physiotherapy", "other"],
  arrivedAtScene: [
    "ambulanceArrival",
    "arrivalAtFacility",
    "departedScene",
    "arrivedAtBase",
    "backInService",
  ],
  relationship: ["spouse", "other", "fatherMother"],
  patientRefusedTreatment: ["yes", "no"],
  bodyPartInvolved: [
    "thorax",
    "other",
    "headNeck",
    "lowerAbdomen",
    "upperAbdomen",
    "lowerExtremities",
    "upperExtremities",
    "reproductiveTract",
  ],
  sourceOfInformation: [
    "patient",
    "nurse",
    "doctor",
    "bystander",
    "other",
    "relativeFriend",
  ],
  typeOfTrauma: [
    "trauma",
    "roadTrafficCollision",
    "industrialAccident",
    "mentalDisorder",
    "other",
  ],
  triage: ["red", "yellow", "green", "black"],
  breathing: ["adequate", "inadequate"],
  circulation: ["pulseAbsent", "pulsePresent"],
  consciousness: ["conscious", "unconscious"],
  patientCondition: ["improved", "unchanged", "deteriorated", "diedEnRoute"],
  docOnlyPatientCondition: ["red", "yellow", "green", "black"],
};

export const PreBillingCode = {
  ambulanceStationNumber: "",
  patientFirstName: "",
  patientLastName: "",
  dispatchDate: "",
  timeLeftBase: "",
  ambulanceStationNumber: "",
  patientFirstName: "",
  patientLastName: "",
  ageDateOfBirth: "",
  insuranceOther: "",
  insuranceCompany: "",
  emtCompletingThisForm: "",
  emtName: "",
  emtSignature: "",
  emtDateTime: "",
  generalMedicalOther: "",
  patientMechanismOfInjuryOther: "",
  otherProblemNotListed: "",
  sex: ["male", "female"],
  insurance: ["nhis", "other"],
  airway: ["choking", "airwayBlocked", "airwayProblem", "none"],
  cardiovascular: [
    "arrhythmia",
    "fainting",
    "shock",
    "cardiacArrest",
    "heartRateTooFast",
    "heartRateTooSlow",
    "highBloodPressure",
    "lowBloodPressure",
    "lowPulse",
    "lowBloodSugar",
    "none",
  ],
  earMouthNoseThroat: [
    "earPain",
    "foreignBodyInEar",
    "objectStuckInEar",
    "objectStuckInNose",
    "objectStuckInThroat",
    "soreThroat",
    "toothPain",
    "none",
  ],
  environmental: [
    "poisoning",
    "alcoholIntoxication",
    "allergicReaction",
    "biteSnake",
    "biteDog",
    "biteOther",
    "coldHypothermia",
    "heatHyperthermia",
    "smokeInhalation",
    "none",
  ],
  eyes: ["blindnessSudden", "blurryVision", "eyeDischarge", "eyePain", "none"],
  gastrointestinal: [
    "constipation",
    "diarrhoea",
    "vomiting",
    "abdominalPain",
    "bleedingFromRectumStool",
    "vomitingBloody",
    "none",
  ],
  generalMedical: [
    "dehydration",
    "fever",
    "other",
    "fatigueGeneralWeakness",
    "generalPainSymptom",
    "highBloodSugar",
    "lowBloodSugar",
    "noSpecificReaction",
    "seizureReaction",
    "otherAllergicReaction",
    "sepsisInfectionComplication",
    "none",
  ],
  gynaecological: [
    "pelvicPainCramping",
    "vaginalBleeding",
    "vaginalDischarge",
    "none",
  ],
  maternalObstetric: [
    "cardiacArrest",
    "labourUnder32Weeks",
    "labourOver32Weeks",
    "newbornDeliveryByMom",
    "neonatalDelivery",
    "prolongedLabour",
    "preLabourRuptureOfMembrane",
    "vaginalDischarge",
    "vaginalBleeding",
    "none",
  ],
  musculoskeletalInjury: ["backPain", "cantWalk", "none"],
  neurological: [
    "headache",
    "alteredLevelOfConsciousness",
    "cvaStroke",
    "seizureLessThan15Minutes",
    "seizureOverThan15Minutes",
    "seizureWithAIrwayCompromise",
    "weaknessRightSide",
    "weaknessLeftSide",
    "none",
  ],
  psychiatric: [
    "agitation",
    "anxiety",
    "depression",
    "behaviouralDisorder",
    "psychiatricEmergency",
    "none",
  ],
  respiratory: [
    "asthmaSymptoms",
    "coughWithoutBlood",
    "coughWithBlood",
    "difficultBreathingMild",
    "difficultBreathingModerate",
    "difficultBreathingSevere",
    "respiratoryDistress",
    "respiratoryArrest",
    "shortnessOfBreath",
    "none",
  ],
  urologic: ["cannotUrinate", "foleyCatheterProblem", "none"],
  skin: [
    "dislocation",
    "bruiseContusion",
    "cutLaceration",
    "deformityFractureLimb",
    "facialInjury",
    "headInjury",
    "jointPain",
    "lowerExtremityPain",
    "neckPain",
    "painInMultipleBodyAreas",
    "pelvicPainNotObsGyn",
    "swellingHematoma",
    "painfulLesionsOnSkin",
    "skinInfection",
    "none",
  ],
  patientMechanismOfInjury: [
    "electrocution",
    "other",
    "alcoholIntoxication",
    "physicalAssault",
    "sexualAssault",
    "burnChemical",
    "burnFire",
    "burnScald",
    "burnTrauma",
    "crushInjury",
    "domesticAbuse",
    "explosionFireBlast",
    "fallFrom2ftOrLess",
    "fallFrom2ftTo8ft",
    "fallFrom8Plusft",
    "hazardousMaterials",
    "motorAccident",
    "none",
  ],
  roadTrafficAccidentPatientWasA: [
    "driverOfVehicle",
    "passengerInVehicle",
    "padestrianHitByMotorbike",
    "padestrianHitByVehicle",
    "none",
  ],
  healthy: ["noMedicalIssuesIdentified", "otherProblemNotListed", "none"],
  equipmentAirway: ["fixedSuction", "npa", "opa", "portableSuction", "none"],
  equipmentCardiovascular: [
    "tourniquet",
    "aed",
    "ivTubing",
    "ivCannulaAndDressing",
    "normalSalineBag1",
    "normalSalineBag2",
    "normalSalineBag3",
    "none",
  ],
  equipmentEarMouth: ["suction", "none"],
  equipmentGeneralMedical: ["oralGlucose", "none"],
  equipmentMusculoskeletal: [
    "gauze",
    "bandage1inch",
    "bandage2inch",
    "bandage3inch",
    "bandage4inch",
    "cervicalCollar",
    "cottonRoll",
    "plasterTape",
    "none",
  ],
  equipmentPsychiatric: ["restraints", "none"],
  equipmentRespiratory: [
    "oxygen",
    "bvm",
    "faceMaskAdult",
    "faceMaskPediatric",
    "nasalCannula",
    "nonRebreatherMask",
    "none",
  ],
  equipmentMusculoskeletalOther: [
    "sling",
    "spineBoard",
    "splintLong",
    "splintShort",
    "triangularBandage",
    "none",
  ],
  otherEquipmentUsed: [
    "blanket",
    "gloves",
    "bedSheet",
    "faceMask",
    "faceShield",
    "none",
  ],
};
