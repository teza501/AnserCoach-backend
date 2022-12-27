import styles from "../../styles/course/Syllabus.module.css";
import { useState, useEffect } from "react";
import { getClassSuffix } from "../../utils/misc";

const Syllabus = ({ syllabus = [] }) => {
    const [boards, setBoards] = useState([]);
    const [selectedBoard, setSelectedBoard] = useState("");
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState("");
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        if (syllabus.length) {
            const temp = [];

            syllabus.forEach((topic) => {
                if (!temp.includes(topic.board)) temp.push(topic.board);
            });

            setBoards(temp);
            if (temp.length > 0) {
                setSelectedBoard(temp[0]);
            }
        }
    }, [syllabus]);

    useEffect(() => {
        const temp = [];

        syllabus.forEach((topic) => {
            if (!temp.includes(topic.sClass) && topic.board == selectedBoard)
                temp.push(topic.sClass);
        });

        setClasses(temp);
        if (temp.length > 0) {
            setSelectedClass(temp[0]);
        }
    }, [selectedBoard]);

    useEffect(() => {
        const temp = [];

        syllabus.forEach((topic) => {
            if (topic.sClass == selectedClass && topic.board == selectedBoard)
                temp.push(topic.title);
        });

        setTopics(temp);
    }, [selectedBoard, selectedClass]);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div>
                            <h2>Our curriculum</h2>

                            <p>In line with CBSE, ICSE and State Boards</p>

                            <select
                                value={selectedBoard}
                                onChange={(e) =>
                                    setSelectedBoard(e.target.value)
                                }
                            >
                                {boards.map((b) => (
                                    <option key={b} value={b}>
                                        {b}
                                    </option>
                                ))}
                            </select>

                            <img src="/images/syllabus.webp" alt="Graphic" />
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.buttonGroup}>
                            {classes.map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    className={
                                        selectedClass == c
                                            ? styles.selected
                                            : undefined
                                    }
                                    onClick={() => setSelectedClass(c)}
                                >
                                    {c}
                                    {getClassSuffix(c)} Class
                                </button>
                            ))}
                        </div>

                        <div className={styles.topics}>
                            <ul>
                                {topics.map((t, i) => (
                                    <li key={i}>{t}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Syllabus;
