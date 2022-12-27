import styles from "../../styles/course/HeroBottom.module.css";

const HeroBottom = () => {
    const cards = [
        {
            title: "Adaptive Learning",
            image: "/images/book.webp",
            desc: "Lorem ipsum dolor sit amet consectetur. Nunc ultrices commodo orci pretium",
        },
        {
            title: "Interactive classes",
            image: "/images/interaction.webp",
            desc: "Lorem ipsum dolor sit amet consectetur. Nunc ultrices commodo orci pretium",
        },
        {
            title: "Research backed",
            image: "/images/market_research.webp",
            desc: "Lorem ipsum dolor sit amet consectetur. Nunc ultrices commodo orci pretium",
        },
        {
            title: "Expert Teachers",
            image: "/images/classroom.webp",
            desc: "Lorem ipsum dolor sit amet consectetur. Nunc ultrices commodo orci pretium",
        },
    ];

    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>
                    <h2>
                        Adaptive learning path + best teachers = Maths Mastery
                    </h2>
                    <h3>The guaranteed formula to Math wizard</h3>

                    <div className={styles.cards}>
                        {cards.map((card, i) => (
                            <div className={styles.card} key={i}>
                                <h4>{card.title}</h4>
                                <img src={card.image} alt="Graphic" />
                                <p>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroBottom;
