import styles from "../../../styles/dashboard/Recorded.module.css";
import { useEffect, useState } from "react";
import SubjectCard from "./SubjectCard";
import TopicCard from "./TopicCard";

const Recorded = ({ lectures = [] }) => {
    const [subjectIds, setSubjectIds] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState([]);

    const [topicIds, setTopicIds] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState([]);

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        if (lectures.length) {
            const temp = [];

            lectures.forEach((lecture) => {
                if (!temp.includes(lecture.subjectId))
                    temp.push(lecture.subjectId);
            });

            setSubjectIds(temp);

            if (temp.length) setSelectedSubject(temp[0]);
        }
    }, [lectures]);

    useEffect(() => {
        const temp = [];

        lectures.forEach((lecture) => {
            if (
                lecture.subjectId == selectedSubject &&
                !temp.includes(lecture.topicId)
            )
                temp.push(lecture.topicId);
        });

        setTopicIds(temp);

        if (temp.length) setSelectedTopic(temp[0]);
    }, [selectedSubject]);

    useEffect(() => {
        const temp = [];

        lectures.forEach((lecture) => {
            if (lecture.topicId == selectedTopic) temp.push(lecture);
        });

        setVideos(temp);
    }, [selectedTopic]);

    return (
        <>
            <div className={styles.main}>
                <h2>Recorded Lectures</h2>
                <div className={styles.container}>
                    <ul className={styles.subjects}>
                        {subjectIds.map((subjectId) => (
                            <SubjectCard
                                key={subjectId}
                                subjectId={subjectId}
                                selectedSubject={selectedSubject}
                                setSelectedSubject={setSelectedSubject}
                            />
                        ))}
                    </ul>

                    <ul className={styles.topics}>
                        {topicIds.map((topicId, i) => (
                            <TopicCard
                                key={topicId}
                                index={i}
                                topicId={topicId}
                                selectedTopic={selectedTopic}
                                setSelectedTopic={setSelectedTopic}
                            />
                        ))}
                    </ul>

                    <div className={styles.videos}>
                        {videos.map((video, i) => (
                            <div className={styles.videoCard} key={i}>
                                <iframe
                                    src={video.url}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>

                                <div className={styles.info}>
                                    <p>{video.name}</p>

                                    <svg viewBox="0 0 69 76" fill="none">
                                        <path d="M3.45312 54.9116V65.2076C3.45313 67.028 4.1763 68.7739 5.46356 70.0611C6.75082 71.3484 8.49672 72.0715 10.3172 72.0715H58.3656C60.1861 72.0715 61.932 71.3484 63.2192 70.0611C64.5065 68.7739 65.2297 67.028 65.2297 65.2076V54.9116M20.6133 37.7516L34.3414 51.4796L48.0695 37.7516M34.3414 3.43164V51.4796" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recorded;
