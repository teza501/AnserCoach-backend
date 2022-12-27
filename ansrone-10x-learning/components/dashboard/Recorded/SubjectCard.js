import { useEffect, useState } from "react";
import { getCohortSubject as getCohortSubjectApi } from "../../../services/api";
import styles from "../../../styles/dashboard/Recorded.module.css";

const SubjectCard = ({ subjectId, selectedSubject, setSelectedSubject }) => {
    const [name, setName] = useState(subjectId);

    useEffect(() => {
        const run = async () => {
            const response = await getCohortSubjectApi(subjectId);

            if (response.success) {
                setName(response.subject.name);
            } else {
                console.log(response.error);
            }
        };

        run();
    }, [subjectId]);

    return (
        <li
            className={
                selectedSubject === subjectId ? styles.selected : undefined
            }
            onClick={() => setSelectedSubject(subjectId)}
        >
            {name}
        </li>
    );
};

export default SubjectCard;
