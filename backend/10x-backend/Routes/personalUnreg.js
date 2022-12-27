const router = require("express").Router();

const {
    createValidator,
    addDetailsValidator,
} = require("../Validators/personalUnreg");
const { create, addDetails, resendOtp } = require("../Controllers/personalUnreg");

router.post("/create", createValidator, create);
router.post("/add", addDetailsValidator, addDetails);
router.post("/otp/resend", resendOtp);

module.exports = router;
