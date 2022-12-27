import styles from "../styles/Login.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { loginInit as loginInitApi, login as loginApi } from "../services/api";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../redux/reducer/auth";
import Link from "next/link";


const Login = () => {
    const router = useRouter();

    const [step, setStep] = useState(0);

    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");

    const handleClose = () => {
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
                            phone={phone}
                            setPhone={setPhone}
                            setStep={setStep}
                        />
                    ) : step === 1 ? (
                        <Container2
                            phone={phone}
                            otp={otp}
                            setOtp={setOtp}
                            setStep={setStep}
                            handleClose={handleClose}
                        />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    );
};

export default Login;

const Container1 = ({ phone, setPhone, setStep }) => {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginInitApi(phone);
        if (response.success) {
            setStep(1);
        } else {
            console.log(response.error);
        }
    };

    const handleGoogleLogin = async () => {};

    const handleJoin = () => {
        router.replace(
            {
                pathname: router.pathname,
                query: { action: "signup" },
            },
            undefined,
            { scroll: false }
        );
    };
  
    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <p>
                or <span onClick={handleJoin}>create your account</span>
            </p>

            <form onSubmit={handleSubmit}>
                <input
                    type="tel"
                    pattern="[1-9]{1}[0-9]{9}"
                    placeholder="Enter your Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <button type="submit" disabled={phone.length != 10}>
                    Login
                </button>
            </form>

 
            <p>
                <br />
                Having trouble please contact{" "}
                <Link href="mailto:helpansrcoach@learn.com">
                    helpansrcoach@learn.com
                </Link>{" "}
                for further support
            </p>
        </div>
    );
};

const Container2 = ({ phone, otp, setOtp, setStep, handleClose }) => {
    const dispatch = useDispatch();

    const [countDown, setCountDown] = useState(60);

    useEffect(() => {
        handleCountDown();
    }, []);

    const handleCountDown = (c = 60) => {
        let temp = c;
        setInterval(() => {
            if (temp >= 0) {
                setCountDown(temp);
                temp--;
            }
        }, 1000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await loginApi(phone, otp);

        if (response.success) {
            dispatch(loginAction(response.user));
            handleClose();
        } else {
            console.log(response.error);
        }
    };

    const handleEdit = () => {
        setStep(0);
    };

    const handleResend = async () => {
        const response = await loginInitApi(phone);
        if (response.success) {
            handleCountDown();
        } else {
            console.log(response.error);
        }
    };

    return (
        <div className={styles.container}>
            <h2>Enter OTP</h2>
            <p>We've sent an OTP to your Registered Mobile Number</p>

            <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <input
                        type="tel"
                        pattern="[1-9]{1}[0-9]{9}"
                        placeholder="Enter your Mobile Number"
                        value={phone}
                        disabled={true}
                    />
                    <button type="button" onClick={handleEdit}>
                        Edit
                    </button>
                </div>

                <input
                    type="number"
                    placeholder="One time password"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />

                <div className={styles.group}>
                    <button type="submit">Verify OTP</button>
                    {countDown != 0 ? (
                        <p>Resend OTP {countDown} seconds</p>
                    ) : (
                        <button type="button" onClick={handleResend}>
                            Resend OTP
                        </button>
                    )}
                </div>
            </form>

            <p>
                Having trouble please contact{" "}
                <Link href="mailto:helpansrcoach@learn.com">
                    helpansrcoach@learn.com
                </Link>{" "}
                for further support
            </p>
        </div>
    );
};
