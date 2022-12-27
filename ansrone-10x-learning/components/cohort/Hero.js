import Link from "next/link";
import styles from "../../styles/cohort/Hero.module.css";
import { getClassSuffix } from "../../utils/misc";

const Hero = ({ basic = {} }) => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.breadcrumb}>
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    COHORT CLASS {basic?.sClass}
                                    {getClassSuffix(basic?.sClass)}
                                </li>
                            </ul>
                        </div>

                        <h1>
                            Class {basic?.sClass}
                            {getClassSuffix(basic?.sClass)} <span>Cohort</span>{" "}
                            Course
                        </h1>

                        <p>
                            AnsrCoach is an Platfrom that will teach you in more
                            interactive way
                        </p>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <img
                                    src="/images/online_learning.webp"
                                    alt="Online Learning"
                                />

                                <h3>{basic?.duration}</h3>
                                <p>Full syllabus course</p>
                            </div>

                            <div className={styles.feature}>
                                <img src="/images/webinar.webp" alt="Webinar" />

                                <h3>Live + Recorded</h3>
                                <p>Classes</p>
                            </div>

                            <div className={styles.feature}>
                                <img
                                    src="/images/light_bulb.webp"
                                    alt="Light bulb"
                                />

                                <h3>Unlimited Doubt</h3>
                                <p>Solvings</p>
                            </div>

                            <div className={styles.feature}>
                                <img src="/images/tax_free.webp" alt="Free" />

                                <h3>Exclusive Free</h3>
                                <p>Coding classes</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img
                            src="/images/astronaut_laptop.webp"
                            alt="Graphic"
                        />
                    </div>
                </div>
                <img
                    className={styles.animation}
                    src="/animations/solar_system.gif"
                    alt="Animation"
                />
            </div>
        </>
    );
};

export default Hero;
