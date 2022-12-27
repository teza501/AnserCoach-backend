import styles from "../../styles/cohort/Syllabus.module.css";
import { useState, useEffect } from "react";

const Syllabus = ({ subjects = [], topics = [] }) => {
    const [boards, setBoards] = useState([]);
    const [selectedBoard, setSelectedBoard] = useState("");

    useEffect(() => {
        if (subjects.length) {
            const temp = [];

            subjects.forEach((subject) => {
                if (subject.board && !temp.includes(subject.board))
                    temp.push(subject.board);
            });

            setBoards(temp);
            if (temp.length > 0) {
                setSelectedBoard(temp[0]);
            }
        }
    }, [subjects]);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <h2>Course Curriculum</h2>

                    <select
                        value={selectedBoard}
                        onChange={(e) => setSelectedBoard(e.target.value)}
                    >
                        {boards.map((b) => (
                            <option key={b} value={b}>
                                {b}
                            </option>
                        ))}
                    </select>

                    <div className={styles.cards}>
                        {subjects.map((subject) =>
                            subject?.board == selectedBoard ? (
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

                                        <button
                                            type="button"
                                            style={{ color: subject.color }}
                                        >
                                            view more
                                        </button>
                                    </div>
                                    <div className={styles.right}>
                                        <img
                                            src={subject.image}
                                            alt="Graphic"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Syllabus;
