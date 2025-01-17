import React, {useEffect, useState} from 'react';
import MoviesListComponent from "../../components/movies/MoviesListComponent/MoviesListComponent";
import {movieService} from "../../services/api.service";
import {IMovie} from "../../Interfaces/IMovie";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/moviesSlice";
import styles from "./MoviesPage.module.css"
import {genreActions} from "../../redux/slices/genresSlice";
import GenresListComponent from "../../components/genres/GenresListComponent/GenresListComponent";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import MoviesNavigationComponent from "../../components/movies/MoviesNavigationComponent/MoviesNavigationComponent";
import SearchComponent from "../../components/SearchComponent/SearchComponent";

const MoviesPage = () => {
    const [query, setQuery] = useSearchParams({page: "1", with_genres:"0", filmName:""});
    const {page, with_genres, filmName, movies, total_pages} = useAppSelector(state => state.moviesSlice)
    const dispatch = useAppDispatch();


    useEffect(() => {
        const currentPage = parseInt(query.get("page")) || 1;
        const currentGenre = parseInt(query.get("with_genres"))||0;
        const currentFilmName = query.get("filmName")||"";

        dispatch(genreActions.loadGenres());
        if(currentGenre === 0 && currentFilmName ===""){
            dispatch(movieActions.loadMovies({page:currentPage}))
        }
        else if(currentGenre !== 0 && currentGenre !== null){
            dispatch(movieActions.loadMovies({page:currentPage, with_genres:currentGenre}))
        }
        else if(currentFilmName !== ""){
            dispatch(movieActions.loadMovies({page:currentPage, filmName: currentFilmName}))
        }
        else{
            dispatch(movieActions.loadMovies({page:currentPage, with_genres:currentGenre, filmName: currentFilmName}))
        }
    }, [query]);

    return (
        <div className={styles.MoviesPage}>
            <SearchComponent/>
            <GenresListComponent/>
            <MoviesNavigationComponent/>
            <MoviesListComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;