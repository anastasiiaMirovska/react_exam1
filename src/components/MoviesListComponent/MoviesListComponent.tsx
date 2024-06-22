import React from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import MoviesListCardComponent from "../MoviesListCardComponent/MoviesListCardComponent";

import styles from "./MoviesListCardComponent.module.css"


const MoviesListComponent = () => {
    const {movies} = useAppSelector(state => state.moviesSlice);
    return (
        <div className={styles.CardsBox}>
            {movies.map(movie=><MoviesListCardComponent key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesListComponent;