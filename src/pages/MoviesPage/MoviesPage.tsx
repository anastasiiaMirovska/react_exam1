import React, {useEffect, useState} from 'react';
import MoviesListComponent from "../../components/MoviesListComponent/MoviesListComponent";
import {movieService} from "../../services/api.service";
import {IMovie} from "../../Interfaces/IMovie";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/moviesSlice";
import styles from "./MoviesPage.module.css"
import {genreActions} from "../../redux/slices/genresSlice";
import GenresListComponent from "../../components/GenresListComponent/GenresListComponent";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";

const MoviesPage = () => {
    const [query, setQuery] = useSearchParams({page: "1"});

    const dispatch = useAppDispatch();

    useEffect(() => {
        const currentPage = parseInt(query.get("page"))||1;
        dispatch(movieActions.loadMovies(currentPage));
        dispatch(genreActions.loadGenres());
    }, [query, dispatch]);

    return (
        <div className={styles.MoviesPage}>
            <GenresListComponent/>
            <MoviesListComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;