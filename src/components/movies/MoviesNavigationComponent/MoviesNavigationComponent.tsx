import React, {useEffect} from 'react';
import {Link, NavLink, useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../../hooks/reduxHooks";
import styles from "./MoviesNavigationComponent.module.css"

const MoviesNavigationComponent = () => {

    const {page, with_genres} = useAppSelector(state=>state.moviesSlice);
    const exists = (page>1 || with_genres!==null)

    return (
        <div className={styles.linkBox}>
            <span><NavLink to={"/movies"} className={exists ? styles.navLink : styles.navLinkActive}>Головна</NavLink></span>
            {exists &&
                <span>
                <span>/</span>
                <span><NavLink to={"/movies"} className={styles.navLinkActive}>Жанри</NavLink></span>
            </span>}

        </div>
    );
};

export default MoviesNavigationComponent;