import { useEffect, useState } from "react";
import { getCohortTopic as getCohortTopicApi } from "../../../services/api";
import styles1 from "../../../styles/dashboard/Recorded.module.css";
import styles2 from "../../../styles/dashboard/Exclusive.module.css";

const TopicCard = ({ topicId, index, selectedTopic, setSelectedTopic }) => {
    const [name, setName] = useState(topicId);

    useEffect(() => {
        const run = async () => {
            const response = await getCohortTopicApi(topicId);

            if (response.success) {
                setName(response.topic.name);
            } else {
                console.log(response.error);
            }
        };

        run();
    }, [topicId]);

    return (
        <li
            className={
                selectedTopic == topicId
                    ? [styles1.selected, styles2.selected].join(" ")
                    : undefined
            }
            onClick={() => setSelectedTopic(topicId)}
        >
            {index + 1}. {name}
        </li>
    );
};

export default TopicCard;
