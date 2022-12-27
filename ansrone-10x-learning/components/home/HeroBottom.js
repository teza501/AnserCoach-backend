import styles from "../../styles/home/HeroBottom.module.css";

const HeroBottom = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h2>Hot 🔥 deals for you</h2>
                        <p>
                            In addition to practical educational experinece
                            technology
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>01</h3>
                        <h4>Personalized courses</h4>
                    </div>

                    <div className={styles.card}>
                        <h3>02</h3>
                        <h4>Cohurt based couses</h4>
                    </div>

                    <div className={styles.card}>
                        <h3>03</h3>
                        <h4>Free Demo session</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroBottom;
