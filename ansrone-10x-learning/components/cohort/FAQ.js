import styles from "../../styles/cohort/FAQ.module.css";
import FAQCard from "./FAQCard";

const FAQ = ({ faqs = [] }) => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.header}>
                    <h2>
                        Frequently Asked Questions <span>(FAQs)</span>
                    </h2>
                    <svg viewBox="0 0 569 18" fill="none">
                        <path d="M15 7.5L0 0.339746L0 17.6603L15 10.5V7.5ZM13.5 10.5L569 10.5V7.5L13.5 7.5V10.5Z" />
                    </svg>
                </div>

                <div className={styles.container}>
                    <div className={styles.left}>
                        <p>
                            Having any questions in your mind? We almost cleared
                            every doubts here feel free to read.
                        </p>

                        <img
                            src="/animations/astronaut_using_laptop.gif"
                            alt="Graphic"
                        />
                    </div>

                    <div className={styles.right}>
                        {faqs.map((faq, i) => (
                            <FAQCard
                                key={i}
                                q={faq.question}
                                a={faq.answer}
                                show={i == 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;
