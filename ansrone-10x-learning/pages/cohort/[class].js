import Hero from "../../components/cohort/Hero";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/cohort/Cohort.module.css";
import Header from "../../components/Header";
import Price from "../../components/cohort/Price";
import Syllabus from "../../components/cohort/Syllabus";
import ExSyllabus from "../../components/cohort/ExSyllabus";
import Testinomial from "../../components/home/Testinomial";
import FAQ from "../../components/cohort/FAQ";
import Footer from "../../components/Footer";
import {
    getCohort as getCohortApi,
    getCohortSubjectsByCourse as getCohortSubjectsApi,
    getCohortTopicsByCourse as getCohortTopicsByCourseApi,
    getCohortFAQs as getCohortFAQsApi,
} from "../../services/api";

const Cohort = () => {
    const router = useRouter();
    const { class: sClass } = router.query;

    const [cohort, setCohort] = useState();

    useEffect(() => {
        const run = async () => {
            const courseResponse = await getCohortApi(sClass);

            if (courseResponse.success) {
                const id = courseResponse.course._id;

                const subjectsResponse = await getCohortSubjectsApi(id);
                const topicsResponse = await getCohortTopicsByCourseApi(id);
                const faqsResponse = await getCohortFAQsApi(id);
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
                    subjectsResponse.success &&
                    topicsResponse.success &&
                    faqsResponse.success
                ) {
                    setCohort({
                        basic: courseResponse.course,
                        subjects: subjectsResponse.subjects,
                        topics: topicsResponse.topics,
                        faqs: faqsResponse.faqs,
                        testinomials: testinomialResponse,
                    });
                } else {
                    console.log(subjectsResponse.error);
                    console.log(topicsResponse.error);
                    console.log(faqsResponse.error);
                }
            } else {
                console.log(courseResponse.error);
            }
        };

        // const basicResponse = {
        //     sClass,
        //     duration: "9 months",
        //     price: 19200,
        //     offer: 12,
        // };

        // const subjectsResponse = [
        //     {
        //         _id: 1,
        //         board: "CBSE",
        //         name: "Mathematics",
        //         exclusive: false,
        //         backgroundColor: "#F6F1FF",
        //         color: "#570EFA",
        //         image: "/animations/owl_teaching.gif",
        //     },
        //     {
        //         _id: 2,
        //         board: "CBSE",
        //         name: "Science",
        //         exclusive: false,
        //         backgroundColor: "#E9EFF7",
        //         color: "#227FFB",
        //         image: "/animations/science.gif",
        //     },
        //     {
        //         _id: 3,
        //         board: "CBSE",
        //         name: "Social Science",
        //         exclusive: false,
        //         backgroundColor: "#FCE4EC",
        //         color: "#FF3276",
        //         image: "/animations/globe.gif",
        //     },
        //     {
        //         _id: 4,
        //         board: "CBSE",
        //         name: "English",
        //         exclusive: false,
        //         backgroundColor: "#FFEBE1",
        //         color: "#FF634C",
        //         image: "/animations/english.gif",
        //     },
        //     {
        //         _id: 5,
        //         board: "CBSE",
        //         name: "Hindi",
        //         exclusive: false,
        //         backgroundColor: "#E7FBE8",
        //         color: "#237E74",
        //         image: "/animations/translate.gif",
        //     },
        //     {
        //         _id: 6,
        //         board: "ICSE",
        //         name: "Maths",
        //         exclusive: false,
        //         backgroundColor: "#F6F1FF",
        //         color: "#570EFA",
        //         image: "/animations/owl_teaching.gif",
        //     },
        //     {
        //         _id: 7,
        //         name: "Computer Science",
        //         exclusive: true,
        //         backgroundColor: "#FFF0CB",
        //         color: "#FF8C00",
        //         image: "/images/hacker.webp",
        //     },
        // ];

        // const topicsResponse = [
        //     {
        //         subjectId: 1,
        //         name: "Number upto 99",
        //     },
        //     {
        //         subjectId: 1,
        //         name: "Subtraction",
        //     },
        //     {
        //         subjectId: 1,
        //         name: "Multiplication",
        //     },
        //     {
        //         subjectId: 1,
        //         name: "Measurements",
        //     },
        //     {
        //         subjectId: 1,
        //         name: "Lines and Planes",
        //     },
        //     {
        //         subjectId: 1,
        //         name: "Data Handling",
        //     },
        //     {
        //         subjectId: 2,
        //         name: "Number upto 99",
        //     },
        //     {
        //         subjectId: 2,
        //         name: "Subtraction",
        //     },
        //     {
        //         subjectId: 2,
        //         name: "Multiplication",
        //     },
        //     {
        //         subjectId: 2,
        //         name: "Measurements",
        //     },
        //     {
        //         subjectId: 2,
        //         name: "Lines and Planes",
        //     },
        //     {
        //         subjectId: 2,
        //         name: "Data Handling",
        //     },
        //     {
        //         subjectId: 3,
        //         name: "Subtraction",
        //     },
        //     {
        //         subjectId: 3,
        //         name: "Multiplication",
        //     },
        //     {
        //         subjectId: 3,
        //         name: "Measurements",
        //     },
        //     {
        //         subjectId: 3,
        //         name: "Lines and Planes",
        //     },
        //     {
        //         subjectId: 3,
        //         name: "Data Handling",
        //     },
        //     {
        //         subjectId: 4,
        //         name: "Multiplication",
        //     },
        //     {
        //         subjectId: 4,
        //         name: "Measurements",
        //     },
        //     {
        //         subjectId: 4,
        //         name: "Lines and Planes",
        //     },
        //     {
        //         subjectId: 4,
        //         name: "Data Handling",
        //     },
        //     {
        //         subjectId: 5,
        //         name: "Measurements",
        //     },
        //     {
        //         subjectId: 5,
        //         name: "Lines and Planes",
        //     },
        //     {
        //         subjectId: 5,
        //         name: "Data Handling",
        //     },
        //     {
        //         subjectId: 6,
        //         name: "Lines and Planes",
        //     },
        //     {
        //         subjectId: 6,
        //         name: "Data Handling",
        //     },
        //     {
        //         subjectId: 7,
        //         name: "Number upto 99",
        //     },
        //     {
        //         subjectId: 7,
        //         name: "Subtraction",
        //     },
        //     {
        //         subjectId: 7,
        //         name: "Multiplication",
        //     },
        //     {
        //         subjectId: 7,
        //         name: "Measurements",
        //     },
        //     {
        //         subjectId: 7,
        //         name: "Lines and Planes",
        //     },
        //     {
        //         subjectId: 7,
        //         name: "Data Handling",
        //     },
        //     {
        //         subjectId: 7,
        //         name: "Number upto 99",
        //     },
        //     {
        //         subjectId: 7,
        //         name: "Subtraction",
        //     },
        //     {
        //         subjectId: 7,
        //         name: "Multiplication",
        //     },
        //     {
        //         subjectId: 7,
        //         name: "Measurements",
        //     },
        // ];

        // const testinomialResponse = [
        //     {
        //         image: "/images/home_testinomial.webp",
        //         testinomial:
        //             "I became a full stack developer in just 2 months, LIVE classes played an important role in helping me learn things effectively from Day 1. Thank You AnsrCoach",
        //         name: "Rhythm Sabharwal",
        //         highlight: "98% in class 8th",
        //     },
        // ];

        // const faqsResponse = [
        //     {
        //         question: "What is AnsrCoach?",
        //         answer: "AnsrCoach is a platform to help students like you to learn, intern and grow through our IQR based LIVE courses and communities.",
        //     },
        //     {
        //         question: "Is this a certified micro course?",
        //         answer: "AnsrCoach is a platform to help students like you to learn, intern and grow through our IQR based LIVE courses and communities.",
        //     },
        //     {
        //         question: "Is this micro course, LIVE?",
        //         answer: "AnsrCoach is a platform to help students like you to learn, intern and grow through our IQR based LIVE courses and communities.",
        //     },
        // ];

        if (sClass) {
            run();
        }
    }, [sClass]);

    return (
        <>
            <div className={styles.header}>
                <Header />
                <Hero basic={cohort?.basic} />
            </div>
            <Price basic={cohort?.basic} />
            <Syllabus subjects={cohort?.subjects} topics={cohort?.topics} />
            <ExSyllabus subjects={cohort?.subjects} topics={cohort?.topics} />
            <Testinomial testinomials={cohort?.testinomials} />
            <FAQ faqs={cohort?.faqs} />
            <Footer />
        </>
    );
};

export default Cohort;
