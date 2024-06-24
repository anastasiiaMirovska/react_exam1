import React, {useEffect} from 'react';
import {Link, NavLink, useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../../hooks/reduxHooks";
import styles from "./MoviesNavigationComponent.module.css"

const MoviesNavigationComponent = () => {
    const[query, SetQuery]=useSearchParams()
    // const {page, with_genres} = useAppSelector(state=>state.moviesSlice);
    let exists = false;
    exists= query.get("with_genres")!==null

    return (
        <div className={styles.linkBox}>
            <span><NavLink to={"/movies"} className={exists ? styles.navLink : styles.navLinkActive}>Головна</NavLink></span>
            {exists &&
                <span>
                <span>  / </span>
                <span className={styles.navLinkActive}>Жанри</span>
            </span>}

        </div>
    );
};

export default MoviesNavigationComponent;