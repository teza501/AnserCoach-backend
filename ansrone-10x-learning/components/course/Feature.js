import styles from "../../styles/course/Feature.module.css";

const Feature = ({ tagline = "", features = [] }) => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.header}>
                    <svg viewBox="0 0 239 18" fill="none">
                        <path d="M223.606 10.5L238.606 17.6603V0.339746L223.606 7.5V10.5ZM0 10.5L225.106 10.5V7.5L0 7.5L0 10.5Z" />
                    </svg>

                    <h2>How is our class different?</h2>

                    <svg viewBox="0 0 239 18" fill="none">
                        <path d="M15 7.5L0 0.339746L0 17.6603L15 10.5V7.5ZM13.5 10.5L238.606 10.5V7.5L13.5 7.5V10.5Z" />
                    </svg>
                </div>

                <h3>{tagline}</h3>

                <div className={styles.container}>
                    <div className={styles.features}>
                        {features.map((feature, i) => (
                            <div className={styles.feature} key={i}>
                                <p className={styles.count}>{i + 1}</p>

                                <div className={styles.info}>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;
