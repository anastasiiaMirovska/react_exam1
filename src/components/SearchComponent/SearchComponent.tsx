import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/moviesSlice";
import {joiResolver} from "@hookform/resolvers/joi";
import SearchValidator from "../../validators/SearchValidator";
import {TextField} from "@mui/material";
import {ColorButton} from "../../StyledElementsMUI/StyledElementsMUI";
import styles from"./SearchComponent.module.css"

interface IProps {
    filmName: string;
}

const SearchComponent = () => {
    const [query, setQuery] = useSearchParams({ page: "1", filmName: "" });
    const {movies} = useAppSelector(state=>state.moviesSlice);
    const {mode} = useAppSelector(state => state.switchSlice);
    const dispatch = useAppDispatch();
    const { handleSubmit, register,formState:{errors, isValid} } = useForm<IProps>({mode:"all", resolver: joiResolver(SearchValidator)});

    const searchFilms: SubmitHandler<IProps> = (data) => {
        const currentFilmName = data.filmName || "";

        dispatch(movieActions.changeGenre(null));
        dispatch(movieActions.changeFilmName(currentFilmName));
        dispatch(movieActions.loadMovies({page: 1, filmName: currentFilmName }));
        setQuery({ page: "1", filmName: currentFilmName});
        console.log(movies)
    };


    return (
        <div>
            <form onSubmit={handleSubmit(searchFilms)} className={styles.FormBlock}>
                <TextField id="outlined-basic" label="Search" variant="outlined" color={"info"} size={"small"} sx={mode && {backgroundColor:"white"}}{...register("filmName")}/>
                <ColorButton disabled={!isValid} variant="contained" size="medium" >Submit</ColorButton>
                {
                    errors.filmName && <p>{errors.filmName.message}</p>
                }
            </form>
        </div>
    );
};


export default SearchComponent;