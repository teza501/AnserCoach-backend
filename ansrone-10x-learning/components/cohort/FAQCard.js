import styles from "../../styles/cohort/FAQCard.module.css";
import { useState } from "react";

const FAQCard = ({ q = "", a = "", show = false }) => {
    const [expanded, setExpanded] = useState(show);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h3>{q}</h3>
                        <div
                            className={styles.expand_button}
                            onClick={() => {
                                setExpanded(!expanded);
                            }}
                        >
                            {expanded ? (
                                <svg viewBox="0 0 26 7" fill="none">
                                    <rect width="26" height="7" rx="3.5" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 26 26" fill="none">
                                    <rect
                                        y="9"
                                        width="26"
                                        height="7"
                                        rx="3.5"
                                    />
                                    <rect
                                        x="9"
                                        y="26"
                                        width="26"
                                        height="7"
                                        rx="3.5"
                                        transform="rotate(-90 9 26)"
                                    />
                                </svg>
                            )}
                        </div>
                    </div>

                    <p className={expanded ? styles.show : styles.hide}>{a}</p>
                </div>
            </div>
        </>
    );
};

export default FAQCard;
