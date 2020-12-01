import React from 'react';
import {PageHeader} from "antd";
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {
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
        <div className={styles.container}>
            <PageHeader ghost={false}
                        onBack={() => window.history.back()}
                        title="Back"
                        extra={listItems}
                        className={styles.header}
            >
            </PageHeader>
        </div>
    )
}

export default Header;