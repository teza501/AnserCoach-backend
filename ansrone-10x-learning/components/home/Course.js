import styles from "../../styles/home/Course.module.css";
import CourseCard from "./CourseCard";

const Course = () => {
    const courses = [
        {
            color: "#FF634C",
            backgroundColor: "#FFF0E9",
            classRange: "6th - 9th",
            title: "Mathematics",
            description:
                "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
            link: "/?action=signup",
            icon1: "/icons/maths_1.webp",
            icon2: "/icons/maths_2.webp",
        },
        {
            color: "#FF8C00",
            backgroundColor: "#FFF0CB",
            classRange: "6th - 9th",
            title: "Computer",
            description:
                "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
            link: "/?action=signup",
            icon1: "/icons/computer_1.webp",
            icon2: "/icons/computer_2.webp",
        },
        {
            color: "#00A3FF",
            backgroundColor: "#EBF2FF",
            classRange: "6th - 9th",
            title: "Science",
            description:
                "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
            link: "/?action=signup",
            icon1: "/icons/science_1.webp",
            icon2: "/icons/science_2.webp",
        },
        {
            color: "#FF3276",
            backgroundColor: "#FCE4EC",
            classRange: "6th - 9th",
            title: "Maths + Science",
            description:
                "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
            link: "/?action=signup",
            icon1: "/icons/ms_1.webp",
            icon2: "/icons/ms_2.webp",
        },
    ];

    return (
        <>
            <div className={styles.main}>
                <h2>
                    Personalized <span>One is to 1</span> courses
                </h2>
                <p>
                    AnsrCoach is an Platfrom that will teach you in more
                    interactive way
                </p>

                <div className={styles.container}>
                    <img src="/animations/monkey.gif" alt="Graphic" />

                    <div className={styles.cards}>
                        {courses.map((course, i) => (
                            <CourseCard
                                key={i}
                                color={course.color}
                                backgroundColor={course.backgroundColor}
                                classRange={course.classRange}
                                title={course.title}
                                description={course.description}
                                link={course.link}
                                icon1={course.icon1}
                                icon2={course.icon2}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Course;
