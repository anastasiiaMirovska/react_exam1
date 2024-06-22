import React, {FC, useEffect, useState} from 'react';
import {IMovie} from "../../Interfaces/IMovie";
import styles from "./MoviesListCardComponent.module.css"
import {imageService, movieService} from "../../services/api.service";
import PosterPreviewComponent from "../PosterPreviewComponent/PosterPreviewComponent";

interface IProps{
    movie: IMovie
}

const MoviesListCardComponent:FC<IProps> = ({movie}) => {

    return (
        <div className={styles.CardBox}>

            <span>ID: {movie.id}</span><br/>
            <span>Language: {movie.original_language}</span><br/>
            <PosterPreviewComponent poster_path={movie.poster_path} poster_size={2}/>
            <span>Title: {movie.original_title}</span><br/>
            <span>Release date: {movie.release_date}</span><br/>
            <span>Rating: {movie.vote_average}</span><br/>
            <span className={styles.OverflowText}>Overview: {movie.overview}</span><br/>

        </div>
    );
};

export default MoviesListCardComponent;