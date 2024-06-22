import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/moviesSlice";
import {useDispatch, useSelector} from "react-redux";


export const store = configureStore({
    reducer:{
        movieSlice: movieReducer
    }
})


export type MyRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;



