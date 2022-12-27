import styles from "../../styles/cohort/Price.module.css";
import { getClassSuffix } from "../../utils/misc";

const Price = ({ basic = {} }) => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <h2>
                            Class {basic?.sClass}
                            {getClassSuffix(basic?.sClass)} Cohort Course
                        </h2>

                        <p>
                            AnsrCoach is an Platfrom that will teach you in more
                            interactive way
                        </p>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.buttonGroup}>
                            <button type="button" className={styles.primary}>
                                Buy Course
                            </button>
                            <button type="button" className={styles.secondary}>
                                Book a free demo
                            </button>
                        </div>

                        <p>
                            ₹
                            {parseInt(
                                basic?.price -
                                    basic?.price * (basic?.offer / 100)
                            )}{" "}
                            <span>₹{basic?.price}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Price;
