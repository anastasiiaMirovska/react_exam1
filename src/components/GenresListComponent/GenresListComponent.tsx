import React from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import GenreItemComponent from "../GenreItemComponent/GenreItemComponent";

const GenresListComponent = () => {
    const {genres} = useAppSelector(state=>state.genresSlice);
    console.log(genres);
    return (
        <div>
            {
                genres.map(genre=> <GenreItemComponent key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export default GenresListComponent;