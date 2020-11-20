import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Footer.module.css"
import {GithubOutlined, MailOutlined, PhoneOutlined, SkypeOutlined} from "@ant-design/icons";

const Footer = () => {
    const data = [{name: 'Home', link: '/'},
        {name: 'AboutMe', link: '/aboutMe'},
        {name: 'MyProjects', link: '/myProjects'},
        {name: 'Contacts', link: '/contacts'},
    ]

    const listItems = data.map((dataItem, index) => (
        <NavLink className="ant-btn ant-btn-primary" to={dataItem.link} key={index}>

            {dataItem.name}
        </NavLink>
    ));
    return (
        <div className={styles.footer}>

            <p className={styles.name}>© Evgeniya Ivanova 2020</p>
            <p className={styles.link}>
                <a className={styles.link} href="tel:+375295167570">
                    <PhoneOutlined className={styles.icon}/>
                </a>
            </p>
            <p className={styles.link}>
                <a className={styles.link} href="mailto:enya1407@gmail.com">
                    <MailOutlined className={styles.icon}/>
                </a>
            </p>
            <p className={styles.link}>
                <a className={styles.link} href="https://github.com/enya1407" target="_blank">
                    <GithubOutlined className={styles.icon}/>
                </a>
            </p>
            <p className={styles.link}>
                <a className={styles.link} href="skype:[live:.cid.a8ecbb62e0b52708]">
                    <SkypeOutlined className={styles.icon}/>
                </a>
            </p>


        </div>
    )
}

export default Footer;