import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./HeaderComponent.module.css"

const HeaderComponent = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.linkBox}>
                <span><NavLink to={"/"} className={({isActive})=>(isActive ? styles.navLinkActive : styles.navLink)}>Home</NavLink></span>
                <span><NavLink to={"/movies"} className={({isActive})=>(isActive ? styles.navLinkActive : styles.navLink)}>All Movies</NavLink></span>
                <span><NavLink to={"/genres"} className={({isActive})=>(isActive ? styles.navLinkActive : styles.navLink)}>Genres</NavLink></span>
            </div>
        </div>
    );
};

export default HeaderComponent;
