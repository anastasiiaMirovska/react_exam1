import React, {FC} from 'react';
import {IMovieDetails} from "../../../Interfaces/IMovieDetails";
import PosterPreviewComponent from "../../elements/PosterPreviewComponent/PosterPreviewComponent";
import StarsRatingComponent from "../../elements/StarsRatingComponent/StarsRatingComponent";
import ButtonBack from "../../elements/ButtonBack/ButtonBack";
import {Badge} from "@mui/material";
import GenreBadgeComponent from "../../genres/GenreBadgeComponent/GenreBadgeComponent";

import styles from "./MovieInfoComponent.module.css"

interface IProps{
    movie : IMovieDetails
}

const MovieInfoComponent:FC<IProps> = ({movie}) => {
    const rating = Math.round(movie.vote_average*10)/10;

    return (
        <div>

            <ButtonBack/>
            <h2>{movie.title}</h2>
            <div className={styles.MovieInfoBox}>
                <div className={styles.GeneralInfo}>
                    <span>Age : {movie.adult ? <span>for adults</span> : <span>any</span>}</span><br/>
                    <span>ID: {movie.id}</span><br/>
                    <span>Original language: {movie.original_language}</span><br/>
                    <span>Original title: {movie.original_title}</span><br/>
                    <span>Overview: {movie.overview}</span><br/>
                    <span>Popularity: {movie.popularity}</span><br/>
                    <span>Release date: {movie.release_date}</span><br/>
                    <span>Vote count: {movie.vote_count}</span><br/>
                    <StarsRatingComponent rating={rating} size={"large"}/>
                    <span>Rating: {rating}</span>
                </div>
                <div className={styles.PosterBox}>
                    <Badge color="success" anchorOrigin={{vertical: 'top', horizontal: 'right',}}>
                        <GenreBadgeComponent genres={movie.genres}/>
                        <PosterPreviewComponent poster_path={movie.poster_path} poster_size={2}/>
                    </Badge><br/>
                </div>
            </div>


        </div>
    );
};

export default MovieInfoComponent;