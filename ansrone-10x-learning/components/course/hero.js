import styles from "../../styles/course/Hero.module.css";
import { getClassSuffix } from "../../utils/misc";
import { useState, useEffect } from "react";

const Hero = ({ basic = {}, demoClasses = [] }) => {
    const [selectedClass, setSelectedClass] = useState(0);

    const [offer, setOffer] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        demoClasses.forEach((c) => {
            if (c.sClass == selectedClass) {
                setPrice(c.price);
                setOffer(c.offer);
            }
        });
    }, [selectedClass]);

    useEffect(() => {
        if (demoClasses.length) setSelectedClass(demoClasses[0].sClass);
    }, [demoClasses]);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <h1>
                            Personalized <span>{basic?.name}</span> program for{" "}
                            {basic?.targetClass}
                        </h1>

                        <p className={styles.tagline}>{basic?.tagline}</p>

                        <p>Select Student Class For a Free Demo</p>

                        <div className={styles.buttonGroup}>
                            {demoClasses.map((c) => (
                                <button
                                    key={c.sClass}
                                    type="button"
                                    className={
                                        selectedClass == c.sClass
                                            ? styles.selected
                                            : undefined
                                    }
                                    onClick={() => setSelectedClass(c.sClass)}
                                >
                                    {c.sClass}
                                    {getClassSuffix(c.sClass)} Class
                                </button>
                            ))}
                        </div>

                        <button className={styles.book}>
                            Book a free demo class
                        </button>

                        <p className={styles.priceInfo}>
                            <span className={styles.cut}>₹{price}</span>{" "}
                            <span className={styles.price}>
                                ₹{parseInt(price - price * (offer / 100))}
                            </span>{" "}
                            for first class
                            <span className={styles.offer}> {offer}% off</span>
                        </p>

                        <p className={styles.already}>
                            Booked a demo already? <span>JOIN NOW</span>
                        </p>
                    </div>
                    <div className={styles.right}>
                        <img src="/animations/ufo.gif" alt="Animation" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
