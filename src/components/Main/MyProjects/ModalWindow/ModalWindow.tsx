import {Button, Divider, Drawer} from 'antd';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {modalWindowDataIdSelector, modalWindowSelector} from "../../../../selector";
import {changeModalWindowStateAction} from "../../../../actions";
import {dataProjects} from "./../../../../dataProjects"
import styles from "./ModalWindow.module.css";

const ModalWindow = () => {
    const modalWindow = useSelector(modalWindowSelector)
    const modalWindowDataId = useSelector(modalWindowDataIdSelector)
    const dispatch = useDispatch()
    const data = dataProjects[modalWindowDataId]

    const handleCancel = () => {
        dispatch(changeModalWindowStateAction(false))
    };

    return (
        <Drawer
            className={styles.modal__window}
            title={data.name}
            width="50%"
            placement="right"
            closable={false}
            onClose={handleCancel}
            visible={modalWindow}
        >
            <div className={styles.modal__container}>
                <div className={styles.img__container}>
                    <a className={styles.link} href={data.webSite}
                       target="_blank">
                        <img className={styles.img} src={data.screenshot} alt={data.screenshot}
                             width={400}>
                        </img>
                    </a>
                    <div className={styles.button__container}>
                        <a className={styles.link} href={data.webSite}
                           target="_blank">
                            <Button> On hosting</Button>
                        </a>
                        <a className={styles.link} href={data.code}
                           target="_blank">
                            <Button> source code</Button>
                        </a>
                    </div>
                </div>
                <Divider style={{margin: 10}}/>
                <div className={styles.text}>
                    <ul className={styles.list}>
                        {data.text.stack.map((el, i) => (
                            <li className={styles.item} key={i}>{el}</li>
                        ))}
                    </ul>

                    <div className={styles.description__container}>
                        <p className={styles.description__header}>{data.text.headerDescription}</p>
                        <ul className={styles.description}>
                            {data.text.description.map((el, i) => (
                                <li className={styles.item__description} key={i}>{el}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Drawer>
    );
};
export default ModalWindow