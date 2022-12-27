import styles from "../../styles/home/CourseCard.module.css";
import Link from "next/link";

const CourseCard = ({
    color,
    backgroundColor,
    classRange,
    title,
    description,
    link,
    icon1,
    icon2,
}) => {
    return (
        <>
            <div className={styles.main} style={{ backgroundColor }}>
                <img className={styles.icon1} src={icon1} alt="Icon" />
                <img className={styles.icon2} src={icon2} alt="Icon" />
                <div className={styles.container}>
                    <p>
                        <span style={{ color }}>Class {classRange}</span>
                    </p>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <Link href={link}>
                        <p
                            className={styles.button}
                            style={{ backgroundColor: color }}
                        >
                            Explore
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CourseCard;
