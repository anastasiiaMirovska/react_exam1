import React, {FC, useEffect, useState} from 'react';
import {IMovie} from "../../../Interfaces/IMovie";
import styles from "./MoviesListCardComponent.module.css"
import {imageService, movieService} from "../../../services/api.service";
import PosterPreviewComponent from "../../elements/PosterPreviewComponent/PosterPreviewComponent";
import {useAppSelector} from "../../../hooks/reduxHooks";
import {NavLink, useLocation} from "react-router-dom";

interface IProps{
    movie: IMovie
}

const MoviesListCardComponent:FC<IProps> = ({movie}) => {

    const location = useLocation();

    const handleClick = () => {
        const currentSearch = location.pathname + location.search;
        sessionStorage.setItem('previousSearch', currentSearch);
    }
    return (
        <div className={styles.CardBox}>

            <span>ID: {movie.id}</span><br/>
            <span>Language: {movie.original_language}</span><br/>
            <NavLink to={`/movies/${movie.id}`} className={styles.posterLink} onClick={handleClick}>
                <PosterPreviewComponent poster_path={movie.poster_path} poster_size={2}/>
            </NavLink>
            <span>genre_ids: {movie.genre_ids.map(id=><span>{id},  </span>)}</span>
            <span>Title: {movie.original_title}</span><br/>
            <span>Release date: {movie.release_date}</span><br/>
            <span>Rating: {movie.vote_average}</span><br/>
            <span className={styles.OverflowText}>Overview: {movie.overview}</span><br/>

        </div>
    );
};

export default MoviesListCardComponent;