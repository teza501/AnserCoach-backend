import styles from "../../styles/course/Price.module.css";
import { useState, useEffect } from "react";
import { getClassSuffix } from "../../utils/misc";

const Price = ({ liveClasses = [] }) => {
    const [pricing, setPricing] = useState([]);
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState(0);

    useEffect(() => {
        if (liveClasses.length) {
            const temp = [];

            liveClasses.forEach((c) => {
                if (!temp.includes(c.sClass)) temp.push(c.sClass);
            });

            setClasses(temp);

            if (temp.length) setSelectedClass(temp[0]);
        }
    }, [liveClasses]);

    useEffect(() => {
        const temp = [];

        liveClasses.forEach((c) => {
            if (c.sClass == selectedClass) temp.push(c);
        });

        setPricing(temp);
    }, [selectedClass]);

    return (
        <>
            <div className={styles.main}>
                <h2>
                    Our <span>Courses</span> and <span>Pricing</span>
                </h2>

                <div className={styles.buttonGroup}>
                    {classes.map((c) => (
                        <button
                            key={c}
                            type="button"
                            className={
                                selectedClass == c ? styles.selected : undefined
                            }
                            onClick={() => setSelectedClass(c)}
                        >
                            {c}
                            {getClassSuffix(c)} Class
                        </button>
                    ))}
                </div>

                <h3>Most Purchased Plan</h3>

                <div className={styles.container}>
                    {pricing.map((p, i) => (
                        <div className={styles.card} key={i}>
                            <div className={styles.header}>
                                <h4>{p.packageName}</h4>
                                <p>{p.courseDuration}</p>
                            </div>

                            <div className={styles.info}>
                                <p>LIVE CLASSES</p>
                                <h5>{p.totalClasses} live classes</h5>

                                <p>CLASSES FREQUENCY</p>
                                <h5>
                                    {p.classCount} classes per {p.timeSpan}
                                </h5>

                                <div className={styles.priceInfo}>
                                    <p>
                                        ₹
                                        {parseInt(
                                            p.price - p.price * (p.offer / 100)
                                        )}{" "}
                                        <span>₹{p.price}</span>
                                    </p>
                                </div>

                                <button type="button">BUY NOW</button>
                            </div>

                            <div className={styles.offer}>
                                <p>{p.offer} % OFF</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Price;
