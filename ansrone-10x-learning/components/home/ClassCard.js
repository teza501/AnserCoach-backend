import Link from "next/link";
import styles from "../../styles/home/ClassCard.module.css";

const ClassCard = ({ sClass, image, description, link, shape1, shape2 }) => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <h3>Class {sClass}</h3>

                    <div
                        className={styles.imageContainer}
                        style={{ backgroundImage: `url("${image}")` }}
                    >
                        <div className={styles.shapes}>
                            <img src={shape1} alt="Graphic" />
                            <img src={shape2} alt="Graphic" />
                        </div>
                    </div>

                    <p>{description}</p>

                    <Link href={link}>
                        <p>Explore</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ClassCard;
