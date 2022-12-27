const router = require("express").Router();

const {
    createValidator,
    addDetailsValidator,
} = require("../Validators/cohortUnregUser");
const { create, addDetails, resendOtp } = require("../Controllers/cohortUnregUser");

router.post("/create", createValidator, create);
router.post("/add", addDetailsValidator, addDetails);
router.post("/otp/resend", resendOtp);

module.exports = router;