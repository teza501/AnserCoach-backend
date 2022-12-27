import styles from "../../styles/course/Philosophy.module.css";

const Philosophy = () => {
    return (
        <>
            <div className={styles.main}>
                <h2>Our teaching philosophy</h2>
                <h3>
                    Guided by the current education research on achieving Math
                    mastery
                </h3>

                <div className={styles.container}>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <p>Every class in teacher</p>
                        </div>

                        <div className={styles.card}>
                            <p>
                                Every class in teacher led and designed to
                                ensure
                            </p>
                        </div>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <p>
                                Every class in teacher led and designed to
                                ensure mastery and math wizardry
                            </p>
                        </div>

                        <div className={styles.card}>
                            <p>
                                Every class in teacher led and designed to
                                ensure mastery and math wizardry
                            </p>
                        </div>
                    </div>
                </div>

                <button type="button" className={styles.book}>
                    Book a free demo class
                </button>
            </div>
        </>
    );
};

export default Philosophy;
