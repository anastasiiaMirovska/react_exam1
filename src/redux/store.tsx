import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/moviesSlice";
import {useDispatch, useSelector} from "react-redux";
import {genreActions, genreReducer} from "./slices/genresSlice";


export const store = configureStore({
    reducer:{
        moviesSlice: movieReducer,
        genresSlice: genreReducer
    }
})


export type MyRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;



