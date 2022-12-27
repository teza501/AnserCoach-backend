const PersonalUnRegister = require("../Models/personalUnreg");
const PUser = require("../Models/personalRegUser");
const otpGenerator = require("../Utils/otpGenerator");

const create = async (req, res) => {
    const { courseType} = req.body;

    try {
        const user = await PersonalUnRegister.create({
            courseType,
        });

        return res.json({
            success: true,
            message: "User entry added successfully",
            _id: user._id,
        });
    } catch (error) {
        return res.json({ success: false, error });
    }
};

const addDetails = async (req, res) => {
    const { id, name, mobile, sClass,subject } = req.body;

    try {
        const sUser = await PUser.findOne({ mobile });
        if (!sUser) {
            const user = await PersonalUnRegister.findById(id);

            if (user) {
                const otp = otpGenerator.generate();

                await user.updateOne({ name, mobile, sClass, otp,subject });

                // TODO: Send otp to user

                return res.json({
                    success: true,
                    message: "OTP sent successfully",
                });
            } else {
                return res.json({
                    success: false,
                    error: "Cannot find entry",
                });
            }
        } else {
            return res.json({
                success: false,
                error: "Mobile number already exists",
            });
        }
    } catch (error) {
        return res.json({ success: false, error });
    }
};

const resendOtp = async (req, res) => {
    const { id } = req.body;

    try {
        const user = await PersonalUnRegister.findById(id);

        if (user) {
            const otp = otpGenerator.generate();

            await user.updateOne({ otp });

            // TODO: Send otp to user

            return res.json({
                success: true,
                message: "OTP sent successfully",
            });
        } else {
            return res.json({
                success: false,
                error: "Cannot find entry",
            });
        }
    } catch (error) {
        return res.json({ success: false, error });
    }
};

module.exports = {
    create,
    addDetails,
    resendOtp,
};
