import styles from "../../styles/home/Testinomial.module.css";
import TestinomialCard from "./TestinomialCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testinomial = ({ testinomials = [] }) => {
    const responsive = {
        any: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
        },
    };

    const ButtonGroup = ({ next, previous }) => {
        return (
            <div className={styles.carouselButtons}>
                <button onClick={() => previous()}>
                    <svg viewBox="0 0 50 50">
                        <g>
                            <polygon points="37.561,47.293 15.267,25 37.561,2.707 36.146,1.293 12.439,25 36.146,48.707  " />
                        </g>
                    </svg>
                </button>
                <button onClick={() => next()}>
                    <svg viewBox="0 0 50 50">
                        <g>
                            <polygon points="13.854,48.707 37.561,25 13.854,1.293 12.439,2.707 34.732,25 12.439,47.293  " />
                        </g>
                    </svg>
                </button>
            </div>
        );
    };

    return (
        <>
            <div className={styles.main}>
                <h2>Testinomials</h2>

                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.cards}>
                            <Carousel
                                responsive={responsive}
                                ssr={true}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                deviceType="any"
                                customButtonGroup={<ButtonGroup />}
                                arrows={false}
                                renderButtonGroupOutside={true}
                            >
                                {testinomials.map((t, i) => (
                                    <TestinomialCard key={i} testinomial={t} />
                                ))}
                            </Carousel>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img
                            src="/images/home_testinomial_rocket.webp"
                            alt="Rocket"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testinomial;
