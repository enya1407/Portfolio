import React from 'react';
import styles from "./MyProjects.module.css";
import ModalWindow from "./ModalWindow/ModalWindow";
import {useDispatch} from "react-redux";
import {changeModalWindowDataIdAction, changeModalWindowStateAction} from "../../../actions";
import {dataProjects} from "../../../dataProjects"

const MyProjects = () => {
    const dispatch = useDispatch()
    const cards = dataProjects.map((el) => (
        <div key={el.id} className={styles.project} onClick={() => {
            dispatch(changeModalWindowStateAction(true));
            dispatch(changeModalWindowDataIdAction(el.id))
        }}>
            <img src={el.svg} alt={el.svg} width={200} className={styles.card__img}></img>
            <div className={styles.card__name}>
                <p>{el.name} </p>
                <img src={el.screenshot} alt={el.screenshot} width={350}></img>
            </div>
        </div>
    ))
    return (
        <div className={styles.wrapper}>
            <ModalWindow/>
            {cards}
        </div>
    );
}

export default MyProjects;