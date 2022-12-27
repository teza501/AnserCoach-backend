const addValidator = (req, res, next) => {
    const { name, topic, subject } = req.body;

    if (!name) {
        return res.json({
            success: false,
            error: "name is required",
        });
    }

    if (!topic) {
        return res.json({
            success: false,
            error: "topic is reqiured",
        });
    }

    if (!subject) {
        return res.json({
            success: false,
            error: "subject is required",
        });
    }

    next();
};

module.exports = {
    addValidator,
};
