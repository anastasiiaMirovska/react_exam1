import React, {FC} from 'react';
import {useAppSelector} from "../../../hooks/reduxHooks";
import {IMovie} from "../../../Interfaces/IMovie";
import {IMovieDetails} from "../../../Interfaces/IMovieDetails";
import PosterPreviewComponent from "../PosterPreviewComponent/PosterPreviewComponent";

interface IProps{
    movie : IMovieDetails
}

const MovieInfoComponent:FC<IProps> = ({movie}) => {
    return (
        <div>

            <h2>{movie.title}</h2>
            <PosterPreviewComponent poster_path={movie.poster_path} poster_size={2}/>


            <span>Age : {movie.adult ? <span>for adults</span> : <span>any</span>}</span><br/>
            {/*<span>genre_ids: number[],</span>*/}
            {/*<span>id: number,</span>*/}
            <span>Original language: {movie.original_language}</span><br/>
            <span>Original title: {movie.original_title}</span><br/>
            <span>Overview: {movie.overview}</span><br/>
            <span>Popularity: {movie.popularity}</span><br/>
            <span>Release date: {movie.release_date}</span><br/>
            {/*<span>Vote average: number,</span>*/}
            <span>Vote count: {movie.vote_count}</span><br/>
        </div>
    );
};

export default MovieInfoComponent;