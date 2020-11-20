import React from 'react';
import styles from "./AboutMe.module.css";

const AboutMe = () => {
    const skillsArray = ["HTML", "CSS", "Java Script", "React", "Redux", "Type Script", "Git"]
    const aboutMeDataArray =
        ["Full name: Evgeniya Ivanova", "Date of birth: 14.07.1994", "Location: Dzyarzhynsk, Minsk Voblast",
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
                    completed training at RS School from The Rolling Scopes on JavaScript / Front-end courses,
                    "Developing with React". The creation of sites fascinated me so much that now I cannot live a day,
                    no programming.
                    I have a passion for creating beautiful, interactive, and highly crafted solutions based on modern
                    technologies. if you need a fast-trained employee full of enthusiasm, then you are at the right
                    place.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;