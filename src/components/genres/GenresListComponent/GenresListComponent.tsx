import React from 'react';
import {useAppSelector} from "../../../hooks/reduxHooks";
import GenreItemComponent from "../GenreItemComponent/GenreItemComponent";
import styles from "./GenresListComponent.module.css"

const GenresListComponent = () => {
    const {genres} = useAppSelector(state=>state.genresSlice);
    return (
        <div className={styles.GenresBox}>
            {
                genres.map(genre=> <GenreItemComponent key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export default GenresListComponent;