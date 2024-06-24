import React, {FC} from 'react';
import {IGenre} from "../../../Interfaces/IGenre";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux/slices/moviesSlice";

interface IProps{
    genre:IGenre
}

const GenreItemComponent:FC<IProps> = ({genre}) => {

    const [query, setQuery] = useSearchParams({page:"1", with_genres: null});
    const dispatch = useAppDispatch();

    const changeGenreId = (genreId:number)=>{

        const currentGenre = parseInt(query.get("with_genres"))||0;
        dispatch(movieActions.changeGenre(genre.id));
        dispatch(movieActions.changeFilmName(null));
        //dispatch(movieActions.loadMovies({page:1, genreID:currentGenre,filmName:null}))

        setQuery({page:"1", with_genres: String(genreId)})
    }

    return (
        <div>
            <button onClick={()=>changeGenreId(genre.id)}>{genre.name}</button>
        </div>
    );
};

export default GenreItemComponent;