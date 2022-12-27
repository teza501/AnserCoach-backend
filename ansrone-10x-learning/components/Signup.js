import styles from "../styles/Signup.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import {
    registerCreate as registerCreateApi,
    registerAddDetail as registerAddDetailApi,
    registerResendOtp as registerResendOtpApi,
    signup as signupApi,
    registerAddDetail,
} from "../services/api";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../redux/reducer/auth";

const Signup = () => {
    const router = useRouter();

    // INFO: step determines which container to show
    const [step, setStep] = useState(0);
    const [registerationID, setRegisterationID] = useState("");

    // INFO: variables related to container 1
    const [selectedCourse, setSelectedCourse] = useState(0);

    // INFO: variables related to container 2
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [sClass, setSClass] = useState("");

    // INFO: variables related to container 3
    const [otp1, setOtp1] = useState("");
    const [otp2, setOtp2] = useState("");
    const [otp3, setOtp3] = useState("");
    const [otp4, setOtp4] = useState("");
    const [otp5, setOtp5] = useState("");
    const [otp6, setOtp6] = useState("");

    const handleClose = async () => {
        // INFO: as the popup is being handled by URL (check header component for more info), to close, just remove the action query from url

        if (step == 1 && name && phone.length == 10 && sClass) {
            await registerAddDetail(registerationID, name, phone, sClass);
        }

        const query = router.query;
        delete query.action;

        router.replace(
            {
                pathname: router.pathname,
                query,
            },
            undefined,
            { scroll: false }
        );
    };

    return (
        <>
            <div className={styles.modal}>
                <div className={styles.main}>
                    <svg viewBox="0 0 42 42" fill="none" onClick={handleClose}>
                        <path d="M40.3307 35.322C41.7394 36.7307 41.7394 38.922 40.3307 40.3307C39.6263 41.035 38.7655 41.3481 37.8263 41.3481C36.8872 41.3481 36.0263 41.035 35.322 40.3307L21.0002 26.0089L6.6785 40.3307C5.97415 41.035 5.11328 41.3481 4.17415 41.3481C3.23502 41.3481 2.37415 41.035 1.6698 40.3307C0.261107 38.922 0.261107 36.7307 1.6698 35.322L15.9915 21.0002L1.6698 6.6785C0.261107 5.2698 0.261107 3.0785 1.6698 1.6698C3.0785 0.261107 5.2698 0.261107 6.6785 1.6698L21.0002 15.9915L35.322 1.6698C36.7307 0.261107 38.922 0.261107 40.3307 1.6698C41.7394 3.0785 41.7394 5.2698 40.3307 6.6785L26.0089 21.0002L40.3307 35.322Z" />
                    </svg>

                    {step === 0 ? (
                        <Container1
                            setSelectedCourse={setSelectedCourse}
                            setStep={setStep}
                            setRegisterationID={setRegisterationID}
                        />
                    ) : step === 1 ? (
                        <Container2
                            name={name}
                            setName={setName}
                            phone={phone}
                            setPhone={setPhone}
                            sClass={sClass}
                            setSClass={setSClass}
                            setStep={setStep}
                            selectedCourse={selectedCourse}
                            registerationID={registerationID}
                        />
                    ) : step === 2 ? (
                        <Container3
                            otp1={otp1}
                            setOtp1={setOtp1}
                            otp2={otp2}
                            setOtp2={setOtp2}
                            otp3={otp3}
                            setOtp3={setOtp3}
                            otp4={otp4}
                            setOtp4={setOtp4}
                            otp5={otp5}
                            setOtp5={setOtp5}
                            otp6={otp6}
                            setOtp6={setOtp6}
                            mobile={phone}
                            setStep={setStep}
                            registerationID={registerationID}
                        />
                    ) : step === 3 ? (
                        <Container4 />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    );
};

export default Signup;

const Container1 = ({ setSelectedCourse, setStep, setRegisterationID }) => {
    const handleCourseSelection = async (course) => {
        setSelectedCourse(course);

        const response = await registerCreateApi(
            course == 1 ? "personal" : "cohort"
        );

        if (response.success) {
            setRegisterationID(response._id);
            setStep(1);
        } else {
            console.log(response.error);
        }
    };

    return (
        <div className={styles.container1}>
            <h2>Choose any one option</h2>

            <img src="/animations/hare.gif" alt="Animation" />

            <div className={styles.options}>
                <div className={styles.option}>
                    <h4>Personalised Course</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Nunc ultrices
                        commodo orci pretiumLorem ipsum dolor sit amet. Nunc
                        commodo orci pretium
                    </p>
                    <button
                        type="button"
                        maxLength={1}
                        onClick={() => {
                            handleCourseSelection(1);
                        }}
                    >
                        Join Now
                    </button>
                </div>

                <div className={styles.option}>
                    <h4>Cohort Course</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Nunc ultrices
                        commodo orci pretiumLorem ipsum dolor sit amet. Nunc
                        commodo orci pretium
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            handleCourseSelection(2);
                        }}
                    >
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    );
};

const Container2 = ({
    name,
    setName,
    phone,
    setPhone,
    sClass,
    setSClass,
    setStep,
    selectedCourse,
    registerationID,
}) => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await registerAddDetailApi(
            registerationID,
            name,
            phone,
            sClass
        );

        if (response.success) {
            setStep(2);
        } else {
            console.log(response.error);
        }
    };

    return (
        <div className={styles.container2}>
            <div className={styles.header}>
                <img src="/images/signup.webp" alt="Animation" />

                <h4>
                    <span>
                        {selectedCourse == 1 ? "Personalised" : "Cohort"}
                    </span>{" "}
                    Courses
                </h4>
            </div>

            <p>Fill out the below details to Begin</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your Full Name here"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="tel"
                    pattern="[0-9]{1}[0-9]{9}"
                    placeholder="Enter your Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <select
                    value={sClass}
                    onChange={(e) => setSClass(e.target.value)}
                >
                    <option value="" disabled>
                        Select your Class
                    </option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                </select>

                <button type="submit">Next</button>
            </form>
        </div>
    );
};

const Container3 = ({
    otp1,
    setOtp1,
    otp2,
    setOtp2,
    otp3,
    setOtp3,
    otp4,
    setOtp4,
    otp5,
    setOtp5,
    otp6,
    setOtp6,
    mobile,
    setStep,
    registerationID,
}) => {
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;

        const response = await signupApi(registerationID, otp);

        if (response.success) {
            // INFO: when the user account is successfully verified and created, all the user information is set in redux
            dispatch(loginAction(response.user));
            setStep(3);
        } else {
            console.log(response.error);
        }
    };

    const handleResend = async (e) => {
        const response = await registerResendOtpApi(registerationID);

        if (response.error) {
            console.log(response.error);
        }
    };

    return (
        <div className={styles.container3}>
            <h4>
                Please Enter the<span> OTP </span>to verify your account
            </h4>

            <p>A One Time Password has been sent to {mobile}</p>

            <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <input
                        type="number"
                        maxLength={1}
                        value={otp1}
                        onChange={(e) => setOtp1(e.target.value)}
                    />

                    <input
                        type="number"
                        maxLength={1}
                        value={otp2}
                        onChange={(e) => setOtp2(e.target.value)}
                    />

                    <input
                        type="number"
                        maxLength={1}
                        value={otp3}
                        onChange={(e) => setOtp3(e.target.value)}
                    />

                    <input
                        type="number"
                        maxLength={1}
                        value={otp4}
                        onChange={(e) => setOtp4(e.target.value)}
                    />

                    <input
                        type="number"
                        maxLength={1}
                        value={otp5}
                        onChange={(e) => setOtp5(e.target.value)}
                    />

                    <input
                        type="number"
                        maxLength={1}
                        value={otp6}
                        onChange={(e) => setOtp6(e.target.value)}
                    />
                </div>

                <button type="submit">Verify</button>
            </form>

            <p>
                Don't Recieve the OTP?{" "}
                <span onClick={handleResend}>Resend OTP</span>
            </p>
        </div>
    );
};

const Container4 = () => {
    return (
        <div className={styles.container4}>
            <h4>
                <span>Congralulation </span>you are <span>joined </span>for
                personalized course free trial
            </h4>
        </div>
    );
};





// import styles from "../styles/Signup.module.css";
// import { useState } from "react";
// import { useRouter } from "next/router";
// import {
//     registerCreate as registerCreateApi,
//     registerAddDetail as registerAddDetailApi,
//     registerResendOtp as registerResendOtpApi,
//     signup as signupApi,
//     //registerAddDetail,
//     UnregisteredCohortCreate,
//     UnregisteredCohortAddDetails,
//     UnregisteredPersonalAddDetails,
//     UnregisteredPersonalCreate as UnregisteredPersonalCreateApi
// } from "../services/api";
// import { useDispatch } from "react-redux";
// import { login as loginAction } from "../redux/reducer/auth";

// const Signup = () => {
//     const router = useRouter();

//     const [step, setStep] = useState(0);
//     const [registerationID, setRegisterationID] = useState("");

//     // Container 1
//     const [selectedCourse, setSelectedCourse] = useState(0);

//     // Container 2
//     const [name, setName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [sClass, setSClass] = useState("");
//     const [subject, setSubject] = useState("");
//     const [parentName, setParentName] = useState("");
//     const [board, setboard] = useState("");

//     // Container 3
//     const [otp1, setOtp1] = useState("");
//     const [otp2, setOtp2] = useState("");
//     const [otp3, setOtp3] = useState("");
//     const [otp4, setOtp4] = useState("");
//     const [otp5, setOtp5] = useState("");
//     const [otp6, setOtp6] = useState("");

//     const handleClose = async () => {
//         if (step == 1 && name && phone.length == 10 && sClass && subject) {
//             await UnregisteredPersonalAddDetails(registerationID, name, phone, sClass ,subject);
//         }

//         const query = router.query;
//         delete query.action;

//         router.replace(
//             {
//                 pathname: router.pathname,
//                 query,
//             },
//             undefined,
//             { scroll: false }
//         );
//     };

//     return (
//         <>
//             <div className={styles.modal}>
//                 <div className={styles.main}>
//                     <svg viewBox="0 0 42 42" fill="none" onClick={handleClose}>
//                         <path d="M40.3307 35.322C41.7394 36.7307 41.7394 38.922 40.3307 40.3307C39.6263 41.035 38.7655 41.3481 37.8263 41.3481C36.8872 41.3481 36.0263 41.035 35.322 40.3307L21.0002 26.0089L6.6785 40.3307C5.97415 41.035 5.11328 41.3481 4.17415 41.3481C3.23502 41.3481 2.37415 41.035 1.6698 40.3307C0.261107 38.922 0.261107 36.7307 1.6698 35.322L15.9915 21.0002L1.6698 6.6785C0.261107 5.2698 0.261107 3.0785 1.6698 1.6698C3.0785 0.261107 5.2698 0.261107 6.6785 1.6698L21.0002 15.9915L35.322 1.6698C36.7307 0.261107 38.922 0.261107 40.3307 1.6698C41.7394 3.0785 41.7394 5.2698 40.3307 6.6785L26.0089 21.0002L40.3307 35.322Z" />
//                     </svg>

//                     {step === 0 ? (
//                         <Container1
//                             setSelectedCourse={setSelectedCourse}
//                             setStep={setStep}
//                             setRegisterationID={setRegisterationID}
//                         />
//                     ) : step === 1 ? (
//                         <Container2
//                             name={name}
//                             setName={setName}
//                             phone={phone}
//                             setPhone={setPhone}
//                             sClass={sClass}
//                             setSClass={setSClass}
//                             setStep={setStep}
//                             parentName={parentName}
//                             board={board}
//                             subject={subject}
//                             setParentName={setParentName}
//                             setboard={setboard}
//                             setSubject={setSubject}
//                             selectedCourse={selectedCourse}
//                             registerationID={registerationID}
//                         />
//                     ) : step === 2 ? (
//                         <Container3
//                             otp1={otp1}
//                             setOtp1={setOtp1}
//                             otp2={otp2}
//                             setOtp2={setOtp2}
//                             otp3={otp3}
//                             setOtp3={setOtp3}
//                             otp4={otp4}
//                             setOtp4={setOtp4}
//                             otp5={otp5}
//                             setOtp5={setOtp5}
//                             otp6={otp6}
//                             setOtp6={setOtp6}
//                             mobile={phone}
//                             setStep={setStep}
//                             registerationID={registerationID}
//                         />
//                     ) : step === 3 ? (
//                         <Container4 
                      
//                         />
//                     ) : (
//                         <></>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Signup;

// const Container1 = ({ setSelectedCourse, setStep, setRegisterationID }) => {
//     const handleCourseSelection = async (course) => {
//         setSelectedCourse(course);

//         // const response = await UnregisteredPersonalCreateApi(
//         //     course == 1 ? "personal" : "cohort"
//         // );
//         const response1 = await UnregisteredPersonalCreateApi(
//             course == 1 ? "personal" : "cohort"
//         );
//         const response2 = await UnregisteredCohortCreate(
//             course == 1 ? "personal" : "cohort"
//         );

//         // if (response.success) {
//         //     setRegisterationID(response._id);
//         //     setStep(1);
//         // } else {
//         //     console.log(response.error);
//         // }

//         if (response1.success) {
//             setRegisterationID(response1._id);
//             setStep(1);
//         } else {
//             console.log(response1.error);
//         }
//         if (response2.success) {
//             setRegisterationID(response2._id);
//             setStep(1);
//         } else {
//             console.log(response2.error);
//         }
//     };

//     return (
//         <div className={styles.container1}>
//             <h2>Choose any one option</h2>

//             <img src="/animations/hare.gif" alt="Animation" />

//             <div className={styles.options}>
//                 <div className={styles.option}>
//                     <h4>Personalised Course</h4>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur. Nunc ultrices
//                         commodo orci pretiumLorem ipsum dolor sit amet. Nunc
//                         commodo orci pretium
//                     </p>
//                     <button
//                         type="button"
//                         maxLength={1}
//                         onClick={() => {
//                             handleCourseSelection(1);
//                         }}
//                     >
//                         Join Now
//                     </button>
//                 </div>

//                 <div className={styles.option}>
//                     <h4>Cohort Course</h4>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur. Nunc ultrices
//                         commodo orci pretiumLorem ipsum dolor sit amet. Nunc
//                         commodo orci pretium
//                     </p>
//                     <button
//                         type="button"
//                         onClick={() => {
//                             handleCourseSelection(2);
//                         }}
//                     >
//                         Join Now
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Container2 = ({
//     name,
//     setName,
//     phone,
//     setPhone,
//     sClass,
//     setSClass,
//     subject,
//     setSubject,
//     setboard,
//     setParentName,
//     setStep,
//     selectedCourse,
//     registerationID,
// }) => {
//     const handleSubmitPer = async (e) => {
//         e.preventDefault();

//         const response = await UnregisteredPersonalAddDetails(
//             registerationID,
//             name,
//             phone,
//             sClass,
//             subject
//         );

//         if (response.success) {
//             setStep(2);
//         } else {
//             console.log(response.error);
//         }

       
//     };

//     const handleSubmitCohert =async (e)=>{
//         e.preventDefault();

//         const response = await UnregisteredCohortAddDetails(
//             registerationID,
//             name,
//             phone,
//             sClass,
//             board,
//             parentName,
//         );

//         if (response.success) {
//             setStep(2);
//         } else {
//             console.log(response.error);
//         }
//     }

//     return (
//         <div className={styles.container2}>
//             <div className={styles.header}>
//                 <img src="/images/signup.webp" alt="Animation" />

//                 <h4>
//                     <span>
//                         {selectedCourse == 1 ? "Personalised" : "Cohort"}
//                     </span>{" "}
//                     Courses
//                 </h4>
//             </div>

//             <p>Fill out the below details to Begin</p>

//             {
//                 selectedCourse==1 ? (
//                     <form onSubmit={handleSubmitPer}>
//                 <input
//                     type="text"
//                     placeholder="Enter your Full Name here"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />

//                 <input
//                     type="tel"
//                     pattern="[0-9]{1}[0-9]{9}"
//                     placeholder="Enter your Mobile Number"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                 />

//                 <select
//                     value={sClass}
//                     onChange={(e) => setSClass(e.target.value)}
//                 >
//                     <option value="" disabled>
//                         Select your Class
//                     </option>
//                     <option value={6}>6</option>
//                     <option value={7}>7</option>
//                     <option value={8}>8</option>
//                     <option value={9}>9</option>
//                 </select>

//                 <select
//                     value={subject}
//                     onChange={(e) => setSubject(e.target.value)}
//                 >
//                     <option value="" disabled>
//                        Choose Subject
//                     </option>
//                     <option value="Physics">Physics</option>
//                     <option value="Chemistry">Chemistry</option>
//                     <option value="Mathematics">Mathematics</option>
//                     <option value="Coding">Coding</option>
//                 </select>

//                 <button type="submit">Next</button>
//             </form>
//                 ):(
//                     <form onSubmit={handleSubmitCohert}>
//                     <input
//                         type="text"
//                         placeholder="Enter your Full Name here"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Enter your Parent name"
//                         value={name}
//                         onChange={(e) => setParentName(e.target.value)}
//                     />
//                      <input
//                     type="tel"
//                     pattern="[0-9]{1}[0-9]{9}"
//                     placeholder="Enter your phone Number"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                 />
//                  <select
//                     value={sClass}
//                     onChange={(e) => setSClass(e.target.value)}
//                 >
//                     <option value="" disabled>
//                         Select your Class
//                     </option>
//                     <option value={6}>6</option>
//                     <option value={7}>7</option>
//                     <option value={8}>8</option>
//                     <option value={9}>9</option>
//                 </select>

//                 <select
//                     value={board}
//                     onChange={(e) => setboard(e.target.value)}
//                 >
//                     <option value="" disabled>
//                      Select board
//                     </option>
//                     <option value="CBSE">CBSE</option>
//                     <option value="ICSE">ICSE</option>
                    
//                 </select>

//                 <button type="submit">Next</button>
//                     </form>
//                 )
//             }
//             {/* <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Enter your Full Name here"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />

//                 <input
//                     type="tel"
//                     pattern="[0-9]{1}[0-9]{9}"
//                     placeholder="Enter your Mobile Number"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                 />

//                 <select
//                     value={sClass}
//                     onChange={(e) => setSClass(e.target.value)}
//                 >
//                     <option value="" disabled>
//                         Select your Class
//                     </option>
//                     <option value={6}>6</option>
//                     <option value={7}>7</option>
//                     <option value={8}>8</option>
//                     <option value={9}>9</option>
//                 </select>

//                 <select
//                     value={subject}
//                     onChange={(e) => setSubject(e.target.value)}
//                 >
//                     <option value="" disabled>
//                        Choose Subject
//                     </option>
//                     <option value="Physics">Physics</option>
//                     <option value="Chemistry">Chemistry</option>
//                     <option value="Mathematics">Mathematics</option>
//                     <option value="Coding">Coding</option>
//                 </select>

//                 <button type="submit">Next</button>
//             </form> */}
//         </div>
//     );
// };

// const Container3 = ({
//     otp1,
//     setOtp1,
//     otp2,
//     setOtp2,
//     otp3,
//     setOtp3,
//     otp4,
//     setOtp4,
//     otp5,
//     setOtp5,
//     otp6,
//     setOtp6,
//     mobile,
//     setStep,
//     registerationID,
// }) => {
//     const dispatch = useDispatch();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;

//         const response = await signupApi(registerationID, otp);
//         console.log("signupApi: ",response)
//         if (response.success) {
//             dispatch(loginAction(response.user));
//             setStep(3);
//             console.log("signupApi: ",response)
//         } else {
//             console.log(response.error);
//         }
//     };

//     const handleResend = async (e) => {
//         const response = await registerResendOtpApi(registerationID);
// console.log("registerResendOtpApi: ",response)
//         if (response.error) {
//             console.log(response.error);
//         }
//     };

//     return (
//         <div className={styles.container3}>
//             <h4>
//                 Please Enter the<span> OTP </span>to verify your account
//             </h4>

//             <p>A One Time Password has been sent to {mobile}</p>

//             <form onSubmit={handleSubmit}>
//                 <div className={styles.inputGroup}>
//                     <input
//                         type="number"
//                         maxLength={1}
//                         value={otp1}
//                         onChange={(e) => setOtp1(e.target.value)}
//                     />

//                     <input
//                         type="number"
//                         maxLength={1}
//                         value={otp2}
//                         onChange={(e) => setOtp2(e.target.value)}
//                     />

//                     <input
//                         type="number"
//                         maxLength={1}
//                         value={otp3}
//                         onChange={(e) => setOtp3(e.target.value)}
//                     />

//                     <input
//                         type="number"
//                         maxLength={1}
//                         value={otp4}
//                         onChange={(e) => setOtp4(e.target.value)}
//                     />

//                     <input
//                         type="number"
//                         maxLength={1}
//                         value={otp5}
//                         onChange={(e) => setOtp5(e.target.value)}
//                     />

//                     <input
//                         type="number"
//                         maxLength={1}
//                         value={otp6}
//                         onChange={(e) => setOtp6(e.target.value)}
//                     />
//                 </div>

//                 <button type="submit">Verify</button>
//             </form>

//             <p>
//                 Don't Recieve the OTP?{" "}
//                 <span onClick={handleResend}>Resend OTP</span>
//             </p>
//         </div>
//     );
// };

// const Container4 = () => {
 
//     return (
        
//         <div className={styles.container4}>
//             <h4>
//                 <span>Congralulation </span>you are <span>Registered </span>for
//                 successfully. we will call you shortly.
//             </h4>
//         </div>
//     );
// };
