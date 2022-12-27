import styles from "../../styles/dashboard/Hero.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = ({ attendance = [] }) => {
    const [months, setMonths] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [attended, setAttended] = useState(0);
    const [notAttended, setNotAttended] = useState(0);

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    useEffect(() => {
        if (attendance.length) {
            const temp = [];
            attendance.forEach((item) => {
                const m = item.date.getMonth();
                if (!temp.includes(m)) temp.push(m);
            });

            setMonths(temp);
            if (temp.length > 0) setSelectedMonth(temp[0]);
        }
    }, [attendance]);

    useEffect(() => {
        if (attendance.length) {
            let a = 0;
            let na = 0;

            attendance.forEach((item) => {
                if (item.attended) a++;
                else na++;
            });

            setAttended(a);
            setNotAttended(na);
        }
    }, [selectedMonth]);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.breadcrumb}>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>Dashboard</li>
                    </ul>
                </div>

                <div className={styles.container}>
                    <div className={styles.left}>
                        <Link href="/dashboard/notes">
                            <div className={styles.card}>
                                <img
                                    src="/images/notes.webp"
                                    alt="Study notes"
                                />
                                <p>Study Notes</p>
                            </div>
                        </Link>

                        <Link href="/dashboard/quiz">
                            <div className={styles.card}>
                                <img src="/images/quiz.webp" alt="Quiz" />
                                <p>Online Quiz</p>
                            </div>
                        </Link>

                        <Link href="/dashboard/test">
                            <div className={styles.card}>
                                <img src="/images/tests.webp" alt="Test" />
                                <p>Tests</p>
                            </div>
                        </Link>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.header}>
                            <p>Your Monthly Statistics</p>

                            <select
                                value={selectedMonth}
                                onChange={(e) =>
                                    setSelectedMonth(e.target.value)
                                }
                            >
                                {months.map((m) => (
                                    <option key={m} value={m}>
                                        {monthNames[m]}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.infoCard}>
                                <p>Present</p>
                                <div
                                    className={styles.days}
                                    style={{ backgroundColor: "#3ff73f" }}
                                >
                                    <h3>{attended}</h3>
                                    <p>days</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <p>Absent</p>
                                <div
                                    className={styles.days}
                                    style={{ backgroundColor: "#FF6347" }}
                                >
                                    <h3>{notAttended}</h3>
                                    <p>days</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <p>Holidays</p>
                                <div
                                    className={styles.days}
                                    style={{ backgroundColor: "#F6A01F" }}
                                >
                                    <h3>4</h3>
                                    <p>days</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <p>Remains</p>
                                <div
                                    className={styles.days}
                                    style={{ backgroundColor: "#0A82F3" }}
                                >
                                    <h3>10</h3>
                                    <p>days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
