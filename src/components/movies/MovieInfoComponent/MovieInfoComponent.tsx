import React, {FC} from 'react';
import {useAppSelector} from "../../../hooks/reduxHooks";
import {IMovie} from "../../../Interfaces/IMovie";
import {IMovieDetails} from "../../../Interfaces/IMovieDetails";
import PosterPreviewComponent from "../../elements/PosterPreviewComponent/PosterPreviewComponent";
import {useNavigate} from "react-router-dom";
import StarsRatingComponent from "../../elements/StarsRatingComponent/StarsRatingComponent";
import ButtonBack from "../../elements/ButtonBack/ButtonBack";
import {Badge} from "@mui/material";
import GenreBadgeComponent from "../../genres/GenreBadgeComponent/GenreBadgeComponent";

interface IProps{
    movie : IMovieDetails
}

const MovieInfoComponent:FC<IProps> = ({movie}) => {
    const rating = Math.round(movie.vote_average*10)/10;
    console.log(movie.genres)

    return (
        <div>

            <ButtonBack/>
            <h2>{movie.title}</h2>

            <div>
                <Badge color="success" anchorOrigin={{vertical: 'top', horizontal: 'right',}}>
                    <GenreBadgeComponent genres={movie.genres}/>
                    <PosterPreviewComponent poster_path={movie.poster_path} poster_size={2}/>
                </Badge><br/>
            </div>

            <div>
                <span>Age : {movie.adult ? <span>for adults</span> : <span>any</span>}</span><br/>
                <span>ID: {movie.id}</span><br/>
                <span>Original language: {movie.original_language}</span><br/>
                <span>Original title: {movie.original_title}</span><br/>
                <span>Overview: {movie.overview}</span><br/>
                <span>Popularity: {movie.popularity}</span><br/>
                <span>Release date: {movie.release_date}</span><br/>
                {/*<span>Vote average: number,</span>*/}
                <span>Vote count: {movie.vote_count}</span><br/>
                <StarsRatingComponent rating={rating}/>
            </div>

        </div>
    );
};

export default MovieInfoComponent;