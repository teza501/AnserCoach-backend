import Hero from "../../components/dashboard/Hero";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import LastWatched from "../../components/dashboard/LastWatched";
import Recorded from "../../components/dashboard/Recorded/Recorded";
import Exclusive from "../../components/dashboard/Recorded/Exclusive";

const Dashboard = () => {
    const [attendance, setAttendance] = useState([]);
    const [lastWatched, setLastWatched] = useState([]);
    const [nonExclusiveVids, setNonExclusiveVids] = useState([]);
    const [exclusiveVids, setExclusiveVids] = useState([]);

    useEffect(() => {
        setAttendance([
            {
                date: new Date(),
                vidoeId: null,
                attended: true,
            },
            {
                date: new Date(),
                vidoeId: null,
                attended: true,
            },
            {
                date: new Date(),
                vidoeId: null,
                attended: true,
            },
            {
                date: new Date(),
                vidoeId: null,
                attended: true,
            },
            {
                date: new Date(),
                vidoeId: null,
                attended: false,
            },
        ]);

        setLastWatched([
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                name: "Number System | Lect 1 | Class 6th Maths",
            },
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                name: "Number System | Lect 2 | Class 6th Maths",
            },
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                name: "Number System | Lect 3 | Class 6th Maths",
            },
        ]);

        setNonExclusiveVids([
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                subjectId: "63a077a50026c5b1a34986af",
                topicId: "63a0790d0026c5b1a34986b8",
                name: "Number System | Lect 1 | Class 6th Maths",
            },
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                subjectId: "63a077a50026c5b1a34986af",
                topicId: "63a0790d0026c5b1a34986b8",
                name: "Number System | Lect 2 | Class 6th Maths",
            },
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                subjectId: "63a077a50026c5b1a34986af",
                topicId: "63a0790d0026c5b1a34986b8",
                name: "Number System | Lect 3 | Class 6th Maths",
            },
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                subjectId: "63a077a50026c5b1a34986af",
                topicId: "63a0790d0026c5b1a34986b9",
                name: "Subtraction | Lect 1 | Class 6th Maths",
            },
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                subjectId: "63a077a50026c5b1a34986af",
                topicId: "63a0790d0026c5b1a34986b9",
                name: "Subtraction | Lect 2 | Class 6th Maths",
            },
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                subjectId: "63a077a50026c5b1a34986b0",
                topicId: "63a0790d0026c5b1a34986c2",
                name: "Lines and planes | Lect 1 | Class 6th Science",
            },
        ]);

        setExclusiveVids([
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                subjectId: "63a077a50026c5b1a34986b5",
                topicId: "63a0790d0026c5b1a34986d2",
                name: "Number System | Lect 1 | Class 6th",
            },
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                subjectId: "63a077a50026c5b1a34986b5",
                topicId: "63a0790d0026c5b1a34986d2",
                name: "Number System | Lect 2 | Class 6th",
            },
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                subjectId: "63a077a50026c5b1a34986b5",
                topicId: "63a0790d0026c5b1a34986d2",
                name: "Number System | Lect 3 | Class 6th",
            },
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                subjectId: "63a077a50026c5b1a34986b5",
                topicId: "63a0790d0026c5b1a34986d3",
                name: "Subtraction | Lect 1 | Class 6th",
            },
            {
                url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                subjectId: "63a077a50026c5b1a34986b5",
                topicId: "63a0790d0026c5b1a34986d4",
                name: "Multiplication | Lect 1 | Class 6th",
            },
        ]);
    }, []);

    return (
        <>
            <Header />
            <Hero attendance={attendance} />
            <LastWatched lastWatched={lastWatched} />
            <Recorded lectures={nonExclusiveVids} />
            <Exclusive lectures={exclusiveVids} />
        </>
    );
};

export default Dashboard;
