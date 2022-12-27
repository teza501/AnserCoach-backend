import styles from "../styles/Footer.module.css";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
    const [email, setEmail] = useState("");

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.top}>
                        <div />

                        <div className={styles.subscribe}>
                            <h3>Subscribe to Our Newsletter</h3>
                            <form>
                                <div className={styles.formGroup}>
                                    <input
                                        type="email"
                                        placeholder="Enter your mail"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <button type="submit">
                                        <img
                                            src="/icons/telegram_send.webp"
                                            alt="Send"
                                        />
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className={styles.contact}>
                            <div className={styles.tile}>
                                <img src="/icons/mail.webp" alt="Email" />
                                <p>letuslearn@ansrcoach.com</p>
                            </div>

                            <div className={styles.tile}>
                                <img src="/icons/phone.webp" alt="Phone" />
                                <p>+91-6283698964</p>
                            </div>

                            <div className={styles.tile}>
                                <img
                                    src="/icons/location.webp"
                                    alt="Location"
                                />
                                <p>
                                    8966+3M7, Abbas Nagar, Gandhi Nagar,
                                    <br /> Bhopal, Madhya Pradesh 462033
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.bottom}>
                        <p>Copyright © 2022 Ansrcoach</p>

                        <div className={styles.social}>
                            <p>Connect with us</p>
                            <Link href="/">
                                <img
                                    src="/icons/facebook.webp"
                                    alt="Facebook"
                                />
                            </Link>
                            <Link href="/">
                                <img
                                    src="/icons/linkedin.webp"
                                    alt="Linkedin"
                                />
                            </Link>
                            <Link href="/">
                                <img src="/icons/youtube.webp" alt="Youtube" />
                            </Link>
                            <Link href="/">
                                <img
                                    src="/icons/instagram.webp"
                                    alt="Instagram"
                                />
                            </Link>
                            <Link href="/">
                                <img
                                    src="/icons/telegram.webp"
                                    alt="Telegram"
                                />
                            </Link>
                        </div>

                        <p>
                            <span>
                                <Link href="/">Privacy Policy</Link>
                            </span>
                            {" | "}
                            <span>
                                <Link href="/">Terms & conditions</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
