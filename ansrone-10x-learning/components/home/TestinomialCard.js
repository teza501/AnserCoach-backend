import styles from "../../styles/home/TestinomialCard.module.css";

const TestinomialCard = ({ testinomial }) => {
    return (
        <>
            <div className={styles.card}>
                <img src={testinomial.image} alt="Person" />

                <div className={styles.info}>
                    <img src="/icons/quote.webp" alt="Quote" />
                    <p>
                        {testinomial.testinomial}
                        <br />
                        <br />
                        <span>{testinomial.name}</span>
                        <br />
                        {testinomial.highlight}
                    </p>
                </div>
            </div>
        </>
    );
};

export default TestinomialCard;
