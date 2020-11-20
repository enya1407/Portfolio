import React from 'react';
import styles from "./Contacts.module.css";
import {GithubOutlined, MailOutlined, PhoneOutlined, SkypeOutlined} from "@ant-design/icons";

const Contacts = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.contacts}><p className={styles.heading}>
                Contacts
            </p>
                <p><PhoneOutlined/><a className={styles.link} href="tel:+375295167570">+375295167570</a></p>
                <p><MailOutlined/><a className={styles.link} href="mailto:enya1407@gmail.com">enya1407@gmail.com</a></p>
                <p><GithubOutlined/><a className={styles.link} href="https://github.com/enya1407"
                                       target="_blank">github.com/enya1407</a>
                </p>
                <p><SkypeOutlined/><a className={styles.link} href="
                                      skype:[live:.cid.a8ecbb62e0b52708]?call">call skype</a>
                </p>


            </div>
        </div>

    )
        ;
}

export default Contacts;