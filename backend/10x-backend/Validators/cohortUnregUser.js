const createValidator = (req, res, next) => {
    const { courseType } = req.body;

    if ( courseType !== "cohort") {
        return res.json({
            success: false,
            error: "Course type is cohort",
        });
    }

    next();
};

const addDetailsValidator = (req, res, next) => {
    const { name, mobile, sClass,board,parentName} = req.body;

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
    if (!parentName) {
        return res.json({
            success: false,
            error: "parentName is required",
        });
    }
    if (!board) {
        return res.json({
            success: false,
            error: "Select your board",
        });
    }
   

    next();
};

module.exports = {
    createValidator,
    addDetailsValidator,
};
