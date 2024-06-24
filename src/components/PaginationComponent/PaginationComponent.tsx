import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux/slices/moviesSlice";
import {movieService} from "../../services/api.service";
import {stringify} from "node:querystring";
import styles from "./PaginationComponent.module.css"
import {Button, ButtonProps, Stack, styled} from "@mui/material";
import {purple} from "@mui/material/colors";
import {genreActions} from "../../redux/slices/genresSlice";
import {ColorButton} from "../../StyledElementsMUI/StyledElementsMUI";

const PaginationComponent = () => {
    const [query, setQuery ] =useSearchParams({page: "1", with_genres:null})

    const {page, total_pages, with_genres} = useAppSelector(state => state.moviesSlice);
    const dispatch = useAppDispatch();

    const changePage = (action:string) => {
        let newPage = page;
        switch(action){
            case "prev":
                if (newPage > 1) {
                    newPage = newPage - 1;
                }
                break;
            case "next":
                if (newPage < total_pages) {
                    newPage = newPage + 1;
                }
                break;
        }
        if (newPage !== page) {
            const currentGenre = parseInt(query.get("with_genres"))||0;
            const currentFilmName = query.get("filmName")||"";
            if(currentGenre === 0 && currentFilmName ===""){
                setQuery( {page: newPage.toString()});
            }
            else if(currentGenre !== 0 && currentGenre !== null){
                setQuery({page:newPage.toString(), with_genres:currentGenre.toString()})
            }
            else if(currentFilmName!=="" && currentFilmName !== null){
                setQuery( {page: newPage.toString(),filmName: currentFilmName});
            }
            else{
                setQuery( {page: newPage.toString(), with_genres: currentGenre.toString(), filmName: currentFilmName });
            }
            dispatch(movieActions.changePage(newPage));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };


// Стрілочки вправо вліво
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <ColorButton onClick={()=>changePage("prev")} disabled={page<=1}  variant="contained" size="medium">Previous</ColorButton>
                <span>{page}</span>
                <ColorButton onClick={()=>changePage("next")} disabled={page>=total_pages} variant="contained" size="medium" >Next</ColorButton>
            </Stack>

        </div>
    );
};

export default PaginationComponent;
