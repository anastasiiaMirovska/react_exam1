import React, {useEffect} from 'react';
import MovieInfoComponent from "../../components/movies/MovieInfoComponent/MovieInfoComponent";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useParams} from "react-router-dom";
import {movieActions} from "../../redux/slices/moviesSlice";

const MovieInfoPage = () => {
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const {movie, error} = useAppSelector(state=> state.moviesSlice);
    console.log(id);
    useEffect(()=>{
        dispatch(movieActions.loadMovie(id));
    }, [id, dispatch]);


    return (
        <div>
            {
                movie && !error ? <MovieInfoComponent key={id} movie={movie}/> : <div>Ops Something went wrong</div>
            }
        </div>
    );
};

export default MovieInfoPage;