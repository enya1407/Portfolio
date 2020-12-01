import React from 'react';
import styles from "./AboutMe.module.css";

const AboutMe = () => {
    const skillsArray = ["HTML", "CSS", "Java Script", "React", "React hooks", "Redux", "Type Script", "Git", "Webpack"]
    const aboutMeDataArray =
        ["Full name: Evgeniya Ivanova", "Date of birth: 14.07.1994", "Location: Minsk",
            "Education: Mogilev State A.Kuleshov University, journalism (unfinished)"]
    const aboutMeData = aboutMeDataArray.map((el, i) => (
            <li key={i} className={styles.item}>{el}</li>
        )
    )
    const skills = skillsArray.map((el, i) => (
            <li key={i} className={styles.item}>{el}</li>
        )
    )
    return (
        <div className={styles.wrapper}>
            <div className={styles.block_with_information}>
                <h2 className={styles.heading}>Basic information</h2>
                <ul>
                    {aboutMeData}
                </ul>
            </div>
            <div className={styles.block_with_information}>
                <h2 className={styles.heading}>Knowledge and skills</h2>
                <ul>
                    {skills}
                </ul>
            </div>
            <div className={styles.block_with_information__wide}>
                <h2 className={styles.heading}>Shortly about myself</h2>
                <p className={styles.item}>Hello! I am a beginner react developer.
                    I first learned programming by myself
                    HTML Academy, learn.javascript, developer.mozilla, tasks "codewars",
                    <a target="_blank" href={"https://app.rs.school/certificate/k3x1m021"}> successfully </a> completed
                    training at RS
                    School from The Rolling Scopes on
                    <a target="_blank"
                       href={"https://rs.school/js/"}> "JavaScript/Front-end" </a>courses,
                    <a target="_blank"
                       href={"https://rs.school/react/"}> "Developing with React" </a>.
                    The creation of sites fascinated me so much that now I cannot live a day,
                    no programming.
                    I have a passion for creating beautiful, interactive, and highly crafted solutions based on modern
                    technologies. if you need a fast learner employee full of enthusiasm, then you are at the right
                    place. Just contact me
                </p>
            </div>
        </div>
    );
}

export default AboutMe;