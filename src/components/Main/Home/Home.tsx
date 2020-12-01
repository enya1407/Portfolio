import React from 'react';
import styles from "./Home.module.css"
import img from "../../../assets/images/photo.jpg"

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.photo}><img src={img} alt="photo" width={"100%"}></img></div>
            <div className={styles.description}><p className={styles.name}>
                Evgeniya Ivanova
            </p>
                <p className={styles.position}>
                    Frontend Developer / React Developer
                </p></div>
        </div>


    );
}

export default Home;