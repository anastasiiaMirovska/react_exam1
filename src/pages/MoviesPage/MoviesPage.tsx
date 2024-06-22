import React, {useEffect, useState} from 'react';
import MoviesListComponent from "../../components/MoviesListComponent/MoviesListComponent";
import {movieService} from "../../services/api.service";
import {IMovie} from "../../Interfaces/IMovie";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/moviesSlice";
import styles from "./MoviesPage.module.css"

const MoviesPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.loadMovies());
    }, []);

    return (
        <div className={styles.MoviesPage}>
            <MoviesListComponent/>
        </div>
    );
};

export default MoviesPage;