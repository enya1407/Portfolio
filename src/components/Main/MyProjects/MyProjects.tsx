import React from 'react';
import styles from "./MyProjects.module.css";

import svg1 from "../../../assets/images/svg1.svg";
import screenshot1 from "../../../assets/images/screenshot_1.png";
import svg2 from "../../../assets/images/svg2.svg";
import screenshot2 from "../../../assets/images/screenshot_2.png";
import svg3 from "../../../assets/images/svg3.svg";
import screenshot3 from "../../../assets/images/screenshot_3.png";
import svg4 from "../../../assets/images/svg4.svg";
import screenshot4 from "../../../assets/images/screenshot_4.png";
import svg5 from "../../../assets/images/svg5.svg";
import screenshot5 from "../../../assets/images/screenshot_5.png";
import svg6 from "../../../assets/images/svg6.svg";
import svg7 from "../../../assets/images/svg7.svg";
import screenshot7 from "../../../assets/images/screenshot_7.png";
import svg8 from "../../../assets/images/svg8.svg";
import screenshot8 from "../../../assets/images/screenshot_8.png";


const MyProjects = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.project}>
                <img src={svg1} alt="card1" width={200} className={styles.card__img}></img>
                <div className={styles.card__name}>
                    <p>Singolo </p>
                    <img src={screenshot1} alt="card1" width={350}></img>
                </div>
            </div>
            <div className={styles.project}>
                <img src={svg2} alt="card1" width={200} className={styles.card__img}></img>
                <div className={styles.card__name}>
                    <p>virtual keyboard </p>
                    <img src={screenshot2} alt="card1" width={350}></img>
                </div>
            </div>
            <div className={styles.project}>
                <img src={svg3} alt="card1" width={200} className={styles.card__img}></img>
                <div className={styles.card__name}>
                    <p>english for kids </p>
                    <img src={screenshot3} alt="card1" width={350}></img>
                </div>
            </div>
            <div className={styles.project}>
                <img src={svg4} alt="card1" width={200} className={styles.card__img}></img>
                <div className={styles.card__name}>
                    <p>movie search</p>
                    <img src={screenshot4} alt="card1" width={350}></img>
                </div>
            </div>
            <div className={styles.project}>
                <img src={svg5} alt="card1" width={200} className={styles.card__img}></img>
                <div className={styles.card__name}>
                    <p>fancy weather</p>
                    <img src={screenshot5} alt="card1" width={350}></img>
                </div>
            </div>
            <div className={styles.project}>
                <img src={svg6} alt="card1" width={200} className={styles.card__img}></img>
                <div className={styles.card__name}>
                    <p>rslang </p>
                    <img src={screenshot5} alt="card1" width={350}></img>
                </div>
            </div>
            <div className={styles.project}>
                <img src={svg7} alt="card1" width={200} className={styles.card__img}></img>
                <div className={styles.card__name}>
                    <p>songbird</p>
                    <img src={screenshot7} alt="card1" width={350}></img>
                </div>
            </div>
            <div className={styles.project}>
                <img src={svg8} alt="card1" width={200} className={styles.card__img}></img>
                <div className={styles.card__name}>
                    <p>datagrid </p>
                    <img src={screenshot8} alt="card1" width={350}></img>
                </div>

            </div>
        </div>
    );
}

export default MyProjects;