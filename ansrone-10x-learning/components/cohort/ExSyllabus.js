import styles from "../../styles/cohort/ExSyllabus.module.css";

const ExSyllabus = ({ subjects = [], topics = [] }) => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2>Our Exclusive Course Curriculum</h2>
                        <svg viewBox="0 0 569 18" fill="none">
                            <path d="M15 7.5L0 0.339746L0 17.6603L15 10.5V7.5ZM13.5 10.5L569 10.5V7.5L13.5 7.5V10.5Z" />
                        </svg>
                    </div>

                    <div className={styles.cards}>
                        {subjects.map((subject) =>
                            subject.exclusive ? (
                                <div
                                    className={styles.card}
                                    key={subject._id}
                                    style={{
                                        backgroundColor:
                                            subject.backgroundColor,
                                    }}
                                >
                                    <div className={styles.left}>
                                        <h3 style={{ color: subject.color }}>
                                            {subject.name}
                                        </h3>

                                        <ul>
                                            {topics.map((topic, i) =>
                                                topic.subjectId ==
                                                subject._id ? (
                                                    <li key={i}>
                                                        {topic.name}
                                                    </li>
                                                ) : (
                                                    <></>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div className={styles.right}>
                                        <img
                                            src={subject.image}
                                            alt="Graphic"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <>{subject.exclusive}</>
                            )
                        )}
                    </div>
                </div>

                <img
                    className={styles.animation}
                    src="/animations/astronaut_on_rocket.gif"
                    alt="rocket"
                />
            </div>
        </>
    );
};

export default ExSyllabus;
