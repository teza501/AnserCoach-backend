import Footer from "../components/Footer";
import Header from "../components/Header";
import Class from "../components/home/Class";
import Course from "../components/home/Course";
//import Demo from "../components/home/Demo";
import Hero from "../components/home/Hero";
import HeroBottom from "../components/home/HeroBottom";
import Testinomial from "../components/home/Testinomial";
import styles from "../styles/home/Home.module.css";

const Home = () => {
    const testinomials = [
        {
            image: "/images/home_testinomial.webp",
            testinomial:
                "I became a full stack developer in just 2 months, LIVE classes played an important role in helping me learn things effectively from Day 1. Thank You AnsrCoach",
            name: "Rhythm Sabharwal",
            highlight: "98% in class 8th",
        },
    ];

    return (
        <>
            <div className={styles.header}>
                <Header />
                <Hero />
                <HeroBottom />
            </div>
            <Class />
            {/* <Demo /> */}
            <Course />
            <Testinomial testinomials={testinomials} />
            <Footer />
        </>
    );
};

export default Home;
