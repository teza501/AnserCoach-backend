import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Hero from "../../components/course/Hero";
import styles from "../../styles/course/Course.module.css";
import Header from "../../components/Header";
import HeroBottom from "../../components/course/HeroBottom";
import Path from "../../components/course/Path";
import Feature from "../../components/course/Feature";
import Syllabus from "../../components/course/Syllabus";
import Philosophy from "../../components/course/Philosophy";
import Price from "../../components/course/Price";
import Testinomial from "../../components/home/Testinomial";
import Footer from "../../components/Footer";
import {
    getCourse as getCourseApi,
    getCourseDemoClass as getCourseDemoClassApi,
    getCourseLiveClass as getCourseLiveClassApi,
    getCourseFeatures as getCourseFeaturesApi,
    getCourseSyllabus as getCourseSyllabusApi,
} from "../../services/api";

const Course = () => {
    const router = useRouter();
    const { id } = router.query;
   

    const [course, setCourse] = useState();

    useEffect(() => {
        const run = async () => {
            const courseResponse = await getCourseApi(id);
            const demoClassResponse = await getCourseDemoClassApi(id);
            const liveClassResponse = await getCourseLiveClassApi(id);
            const featureResponse = await getCourseFeaturesApi(id);
            const syllabusResponse = await getCourseSyllabusApi(id);
            const testinomialResponse = [
                {
                    image: "/images/home_testinomial.webp",
                    testinomial:
                        "I became a full stack developer in just 2 months, LIVE classes played an important role in helping me learn things effectively from Day 1. Thank You AnsrCoach",
                    name: "Rhythm Sabharwal",
                    highlight: "98% in class 8th",
                },
            ];
            if (
                courseResponse.success &&
                demoClassResponse.success &&
                liveClassResponse.success &&
                featureResponse.success &&
                syllabusResponse.success
            ) {
                setCourse({
                    basic: courseResponse.course,
                    demoClasses: demoClassResponse.demoClasses,
                    liveClasses: liveClassResponse.liveClasses,
                    features: featureResponse.features,
                    syllabus: syllabusResponse.syllabus,
                    testinomials: testinomialResponse,
                });
            } else {
                console.log(courseResponse.error);
                console.log(demoClassResponse.error);
                console.log(liveClassResponse.error);
                console.log(featureResponse.error);
                console.log(syllabusResponse.error);
            }
        };

        // const syllabusResponse = [
        //     {
        //         class: 6,
        //         board: "CBSE",
        //         title: "Number upto 99",
        //     },
        //     {
        //         class: 6,
        //         board: "CBSE",
        //         title: "Subtraction",
        //     },
        //     {
        //         class: 6,
        //         board: "CBSE",
        //         title: "Multiplication",
        //     },
        //     {
        //         class: 6,
        //         board: "CBSE",
        //         title: "Lines and Planes",
        //     },
        //     {
        //         class: 6,
        //         board: "CBSE",
        //         title: "Measurements",
        //     },
        //     {
        //         class: 6,
        //         board: "CBSE",
        //         title: "Data Handling",
        //     },
        //     {
        //         class: 6,
        //         board: "CBSE",
        //         title: "Addition",
        //     },
        //     {
        //         class: 6,
        //         board: "CBSE",
        //         title: "Number upto 120",
        //     },
        //     {
        //         class: 6,
        //         board: "CBSE",
        //         title: "Patterns",
        //     },
        //     {
        //         class: 6,
        //         board: "CBSE",
        //         title: "Solid Shapes",
        //     },
        //     {
        //         class: 6,
        //         board: "CBSE",
        //         title: "Monet and Time",
        //     },
        //     {
        //         class: 6,
        //         board: "CBSE",
        //         title: "Logic and Reasoning",
        //     },
        //     {
        //         class: 7,
        //         board: "CBSE",
        //         title: "Solid Shapes",
        //     },
        //     {
        //         class: 7,
        //         board: "CBSE",
        //         title: "Monet and Time",
        //     },
        //     {
        //         class: 7,
        //         board: "CBSE",
        //         title: "Logic and Reasoning",
        //     },
        //     {
        //         class: 8,
        //         board: "CBSE",
        //         title: "Monet and Time",
        //     },
        //     {
        //         class: 8,
        //         board: "CBSE",
        //         title: "Logic and Reasoning",
        //     },
        //     {
        //         class: 9,
        //         board: "CBSE",
        //         title: "Logic and Reasoning",
        //     },
        //     {
        //         class: 6,
        //         board: "ICSE",
        //         title: "Patterns",
        //     },
        //     {
        //         class: 6,
        //         board: "ICSE",
        //         title: "Solid Shapes",
        //     },
        //     {
        //         class: 6,
        //         board: "ICSE",
        //         title: "Monet and Time",
        //     },
        //     {
        //         class: 6,
        //         board: "ICSE",
        //         title: "Logic and Reasoning",
        //     },
        //     {
        //         class: 7,
        //         board: "ICSE",
        //         title: "Solid Shapes",
        //     },
        //     {
        //         class: 7,
        //         board: "ICSE",
        //         title: "Monet and Time",
        //     },
        // ];

        if (id) {
            run();
        }
    }, [id]);

    return (
        <>
            <div className={styles.header}>
                <Header />
                <Hero basic={course?.basic} demoClasses={course?.demoClasses} />
            </div>
            <HeroBottom />
            <Path />
            <Feature
                tagline={course?.basic?.tagline2}
                features={course?.features}
            />
            <Philosophy />
            <Syllabus syllabus={course?.syllabus} />
            <Price liveClasses={course?.liveClasses} />
            <Testinomial testinomials={course?.testinomials} />
            <Footer />
        </>
    );
};

export default Course;
