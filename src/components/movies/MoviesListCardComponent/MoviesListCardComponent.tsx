import React, {FC, useEffect, useState} from 'react';
import {IMovie} from "../../../Interfaces/IMovie";
import styles from "./MoviesListCardComponent.module.css"
import {imageService, movieService} from "../../../services/api.service";
import PosterPreviewComponent from "../../elements/PosterPreviewComponent/PosterPreviewComponent";
import {useAppSelector} from "../../../hooks/reduxHooks";
import {NavLink, useLocation} from "react-router-dom";
import StarsRatingComponent from "../../elements/StarsRatingComponent/StarsRatingComponent";

interface IProps{
    movie: IMovie
}

const MoviesListCardComponent:FC<IProps> = ({movie}) => {

    const location = useLocation();
    const rating = Math.round(movie.vote_average*10)/10;
    const handleClick = () => {
        const currentSearch = location.pathname + location.search;
        sessionStorage.setItem('previousSearch', currentSearch);
    }
    return (
        <div className={styles.CardBox}>

            <NavLink to={`/movies/${movie.id}`} className={styles.posterLink} onClick={handleClick}>
                <PosterPreviewComponent poster_path={movie.poster_path} poster_size={2}/>
            </NavLink>
            <div className={styles.infoBox}>
                <span>Release date: {movie.release_date}</span>
                <StarsRatingComponent rating={rating} size={"small"}/>
                <span className={styles.OverflowText}>{movie.overview}</span>
            </div>

        </div>
    );
};

export default MoviesListCardComponent;