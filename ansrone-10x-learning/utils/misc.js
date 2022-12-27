export const getClassSuffix = (_class) => {
    if (_class == 1) return "st";
    else if (_class == 2) return "nd";
    else if (_class == 3) return "rd";
    else return "th";
};
