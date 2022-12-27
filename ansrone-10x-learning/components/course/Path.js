import styles from "../../styles/course/Path.module.css";
import { useRef, useEffect } from "react";

const Path = () => {
    const steps = [useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        document.addEventListener("scroll", scrollListener);

        return () => document.removeEventListener("scroll", scrollListener);
    }, [steps]);

    const scrollListener = () => {
        steps.forEach((step) => {
            if (step.current) {
                if (
                    window.innerHeight / 2 >
                    step.current.getBoundingClientRect().top
                ) {
                    step.current.classList.add(styles.visible);
                }
            }
        });
    };

    return (
        <>
            <div className={styles.main}>
                <h2>Our Unique adaptive learning path for you</h2>

                <div className={styles.container}>
                    <div ref={steps[0]} className={[styles.step].join(" ")}>
                        <div />
                        <div className={styles.count}>
                            <p>1</p>
                        </div>
                        <div className={[styles.info, styles.right].join(" ")}>
                            <h3>Diagnose</h3>
                            <p>
                                We diagnose and I dentify the student's current
                                needs
                            </p>
                        </div>
                    </div>

                    <div ref={steps[1]} className={styles.step}>
                        <div className={[styles.info, styles.left].join(" ")}>
                            <h3>Recommends</h3>
                            <p>
                                We recommend topics that are right for students
                            </p>
                        </div>
                        <div className={styles.count}>
                            <p>2</p>
                        </div>
                        <div />
                    </div>

                    <div ref={steps[2]} className={styles.step}>
                        <div />
                        <div className={styles.count}>
                            <p>3</p>
                        </div>
                        <div className={[styles.info, styles.right].join(" ")}>
                            <h3>Choose and work</h3>
                            <p>
                                Students choose and work through the topics at
                                their own pace
                            </p>
                        </div>
                    </div>

                    <div ref={steps[3]} className={styles.step}>
                        <div className={[styles.info, styles.left].join(" ")}>
                            <h3>Practice</h3>
                            <p>
                                We supplement the in-class learning with
                                targeted at home practice
                            </p>
                        </div>
                        <div className={styles.count}>
                            <p>4</p>
                        </div>
                        <div />
                    </div>
                </div>
                <button type="button" className={styles.book}>
                    Book a free demo class
                </button>
            </div>
        </>
    );
};

export default Path;
