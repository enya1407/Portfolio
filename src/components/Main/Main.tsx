import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import MyProjects from "./MyProjects/MyProjects";
import Contacts from "./Contacts/Contacts";
import styles from "./Main.module.css"

const Main = () => {
    return (
        <div className={styles.main}><Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/aboutMe' component={AboutMe}/>
            <Route path='/myProjects' component={MyProjects}/>
            <Route path='/contacts' component={Contacts}/>
        </Switch></div>

    );
}

export default Main;
