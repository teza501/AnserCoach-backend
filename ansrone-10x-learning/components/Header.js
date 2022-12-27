import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";

const Header = () => {
    const router = useRouter();

    const [currentUrl, setCurrentUrl] = useState("");

    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        if (router.isReady) {
            setCurrentUrl(router.pathname);
            setShowSignup(router.query.action === "signup");
            setShowLogin(router.query.action === "login");
        }
    }, [router]);

    const handleLogin = () => {
        router.replace(
            {
                pathname: router.pathname,
                query: { action: "login" },
            },
            undefined,
            { scroll: false }
        );
    };

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <img
                        className={styles.logo}
                        src="/logos/logo.webp"
                        alt="AnrCoach Logo"
                    />

                    <div className={styles.links}>
                        <ul>
                            <li
                                className={
                                    currentUrl === "/"
                                        ? styles.selected
                                        : undefined
                                }
                            >
                                <Link href="/">Home</Link>
                            </li>
                            <li
                                className={
                                    currentUrl === "/blogs"
                                        ? styles.selected
                                        : undefined
                                }
                            >
                                <Link href="/blogs">Blogs</Link>
                            </li>
                            <li
                                className={
                                    currentUrl === "/courses"
                                        ? styles.selected
                                        : undefined
                                }
                            >
                                <Link href="/courses">Courses</Link>
                            </li>
                            <li
                                className={
                                    currentUrl === "/results"
                                        ? styles.selected
                                        : undefined
                                }
                            >
                                <Link href="/results">Our Results</Link>
                            </li>
                            <li
                                className={
                                    currentUrl === "/contact"
                                        ? styles.selected
                                        : undefined
                                }
                            >
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>

                        <Link href="/">
                            <div className={styles.shopIcon}>
                                <img src="/icons/bag.webp" alt="Cart" />
                            </div>
                        </Link>

                        <button
                            type="button"
                            className={styles.login}
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>

            {showSignup && <Signup />}
            {showLogin && <Login />}
        </>
    );
};

export default Header;
