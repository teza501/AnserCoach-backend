const createValidator = (req, res, next) => {
    const { courseType } = req.body;

    if (courseType !== "cohort" && courseType !== "personal") {
        return res.json({
            success: false,
            error: "Course type is required, either personal or cohort",
        });
    }

    next();
};

const addDetailsValidator = (req, res, next) => {
    const { name, mobile, sClass,subject} = req.body;

    if (!name) {
        return res.json({
            success: false,
            error: "Name is required",
        });
    }

    if (!mobile) {
        return res.json({
            success: false,
            error: "Mobile is required",
        });
    }

    if (!sClass) {
        return res.json({
            success: false,
            error: "Student Class is required",
        });
    }
    // if (!subject) {
    //     return res.json({
    //         success: false,
    //         error: "subject is required",
    //     });
    // }
   

    next();
};

module.exports = {
    createValidator,
    addDetailsValidator,
};
