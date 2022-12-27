
// INFO: all the api routes are in this file
// INFO: postApi and getApi are two special function which are called by other functions in the file

const apiBaseUrl = "http://localhost:7000/";

const postApi = async (url, bodyParams = {}) => {
    try {
        const res = await fetch(apiBaseUrl + url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            mode: "cors",
            credentials: "include",
            withCredentials: true,
            body: JSON.stringify(bodyParams),
        });

        const data = await res.json();

        return data;
    } catch (error) {
        return {
            success: false,
            error,
        };
    }
};

const getApi = async (url) => {
    try {
        const res = await fetch(apiBaseUrl + url, {
            method: "GET",
            headers: {
                accept: "application/json",
            },
            mode: "cors",
        });

        const data = await res.json();

        return data;
    } catch (error) {
        return {
            success: false,
            error,
        };
    }
};

export const registerCreate = (courseType) => {
    return postApi("register/create", { courseType });
};

export const registerAddDetail = (id, name, mobile, sClass) => {
    return postApi("register/add", { id, name, mobile, sClass });
};

export const registerResendOtp = (id) => {
    return postApi("register/otp/resend", { id });
};

export const signup = (registerationId, otp) => {
    return postApi("user/signup/local", { registerationId, otp });
};

export const loginInit = (mobile) => {
    return postApi("user/login/local/init", { mobile });
};

export const login = (mobile, otp) => {
    return postApi("user/login/local", { mobile, otp });
};

export const getCourse = (courseId) => {
    return getApi(`course/${courseId}`);
};

export const getCourseDemoClass = (courseId) => {
    return getApi(`course/price/demo/course/${courseId}`);
};

export const getCourseLiveClass = (courseId) => {
    return getApi(`course/price/live/course/${courseId}`);
};

export const getCourseFeatures = (courseId) => {
    return getApi(`course/feature/course/${courseId}`);
};

export const getCourseSyllabus = (courseId) => {
    return getApi(`course/syllabus/course/${courseId}`);
};

export const getCohort = (sClass) => {
    return getApi(`cohort/${sClass}`);
};

export const getCohortSubjectsByCourse = (courseId) => {
    return getApi(`cohort/subject/course/${courseId}`);
};

export const getCohortSubject = (subjectId) => {
    return getApi(`cohort/subject/${subjectId}`);
};

export const getCohortTopicsByCourse = (courseId) => {
    return getApi(`cohort/topic/course/${courseId}`);
};

export const getCohortTopic = (topicId) => {
    return getApi(`cohort/topic/${topicId}`);
};

export const getCohortFAQs = (courseId) => {
    return getApi(`cohort/faq/course/${courseId}`);
};

export const getLastWatchedVids = () => {
    return postApi("last-watched");
};

export const getVids = (exclusive = false) => {
    return exclusive
        ? postApi(`video/course/exclusive`)
        : postApi(`video/course/non-exclusive`);
};


















// const apiBaseUrl = "http://localhost:7000/";

// const postApi = async (url, bodyParams = {}) => {
//     try {
//         const res = await fetch(apiBaseUrl + url, {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json",
//                 accept: "application/json",
//             },
//             mode: "cors",
//             credentials: "include",
//             withCredentials: true,
//             body: JSON.stringify(bodyParams),
//         });

//         const data = await res.json();

//         return data;
//     } catch (error) {
//         return {
//             success: false,
//             error,
//         };
//     }
// };

// const getApi = async (url) => {
//     try {
//         const res = await fetch(apiBaseUrl + url, {
//             method: "GET",
//             headers: {
//                 accept: "application/json",
//             },
//             mode: "cors",
//         });

//         const data = await res.json();

//         return data;
//     } catch (error) {
//         return {
//             success: false,
//             error,
//         };
//     }
// };

// export const registerCreate = (courseType) => {
//     return postApi("register/create", { courseType });
// };

// export const registerAddDetail = (id, name, mobile, sClass,subject) => {
//     return postApi("register/add", { id, name, mobile, sClass,subject });
// };

// //Unregistered Personal create
// export const UnregisteredPersonalCreate = (courseType) => {
//     return postApi("course/personal/unregistered/create", { courseType });
// };


// //for Unregistered Personal add
// export const UnregisteredPersonalAddDetails = (id, name, mobile, sClass,subject) => {
//     return postApi("course/personal/unregistered/add", { id, name, mobile, sClass,subject });
// };

// //unregistered cohort add
// export const UnregisteredCohortAddDetails = (id, name, mobile, sClass,board,parentName) => {
//     return postApi("cohort/unregistered/add", { id, name, mobile, sClass,board,parentName });
// };

// //Unregistered cohort create
// export const UnregisteredCohortCreate = (courseType) => {
//     return postApi("cohort/unregistered/create", { courseType });
// };


// export const registerResendOtp = (id) => {
//     return postApi("course/personal/unregistered/otp/resend", { id });
// };

// export const signup = (registerationId, otp) => {
//     return postApi("user/signup/local", { registerationId, otp });
// };

// export const loginInit = (mobile) => {
//     return postApi("user/login/local/init", { mobile });
// };

// export const login = (mobile, otp) => {
//     return postApi("user/login/local", { mobile, otp });
// };

// export const getCourse = (courseId) => {
//     return getApi(`course/${courseId}`);
// };

// export const getCourseDemoClass = (courseId) => {
//     return getApi(`course/price/demo/course/${courseId}`);
// };

// export const getCourseLiveClass = (courseId) => {
//     return getApi(`course/price/live/course/${courseId}`);
// };

// export const getCourseFeatures = (courseId) => {
//     return getApi(`course/feature/course/${courseId}`);
// };

// export const getCourseSyllabus = (courseId) => {
//     return getApi(`course/syllabus/course/${courseId}`);
// };

// export const getCohort = (sClass) => {
//     return getApi(`cohort/${sClass}`);
// };

// export const getCohortSubjectsByCourse = (courseId) => {
//     return getApi(`cohort/subject/course/${courseId}`);
// };

// export const getCohortSubject = (subjectId) => {
//     return getApi(`cohort/subject/${subjectId}`);
// };

// export const getCohortTopicsByCourse = (courseId) => {
//     return getApi(`cohort/topic/course/${courseId}`);
// };

// export const getCohortTopic = (topicId) => {
//     return getApi(`cohort/topic/${topicId}`);
// };

// export const getCohortFAQs = (courseId) => {
//     return getApi(`cohort/faq/course/${courseId}`);
// };
