import styles from "../../styles/home/Class.module.css";
import ClassCard from "./ClassCard";

const Class = () => {
    const classes = [
        {
            sClass: "6th",
            image: "/images/home_class_6.webp",
            description:
                "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
            link: "/",
            shape1: "/images/books.webp",
            shape2: "/images/hacker.webp",
        },
        {
            sClass: "7th",
            image: "/images/home_class_7.webp",
            description:
                "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
            link: "/",
            shape1: "/images/books.webp",
            shape2: "/images/hacker.webp",
        },
        {
            sClass: "8th",
            image: "/images/home_class_8.webp",
            description:
                "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
            link: "/",
            shape1: "/images/books.webp",
            shape2: "/images/hacker.webp",
        },
        {
            sClass: "9th",
            image: "/images/home_class_9.webp",
            description:
                "Lorem ipsum dolor sit amet consectetur. Adipiscing adipiscing ut quisque.",
            link: "/",
            shape1: "/images/books.webp",
            shape2: "/images/hacker.webp",
        },
    ];

    return (
        <>
            <div className={styles.main}>
                <h2>
                    <span>Cohurt</span> Based Courses
                </h2>
                <p>
                    AnsrCoach is an Platfrom that will teach you in more
                    interactive way
                </p>

                <div className={styles.container}>
                    <div className={styles.cards}>
                        {classes.map((c, i) => (
                            <ClassCard
                                key={i}
                                sClass={c.sClass}
                                image={c.image}
                                description={c.description}
                                link={c.link}
                                shape1={c.shape1}
                                shape2={c.shape2}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Class;
