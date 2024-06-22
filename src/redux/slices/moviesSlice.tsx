import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IMovie} from "../../Interfaces/IMovie";
import {movieService} from "../../services/api.service";
import {AxiosError} from "axios";

type MoviesSliceType = {
    movies: IMovie[],
    error: boolean
}

const initialMoviesState: MoviesSliceType = {
    movies: [],
    error: null
}

const loadMovies = createAsyncThunk(
    "movieSlice/loadMovies",
    async (_, thunkAPI)=>{
        try{
            const movies = await movieService.getMovies();
            return thunkAPI.fulfillWithValue(movies)
        }
        catch(e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

const moviesSlice = createSlice({
    name:"movieSlice",
    initialState: initialMoviesState,
    reducers:{},
    extraReducers: builder=>
        builder
            .addCase(loadMovies.fulfilled, (state, action)=>{
                state.movies = action.payload;
            })
            .addMatcher(isFulfilled(loadMovies), (state, action)=>{
                state.error = false;
            })
            .addMatcher(isRejected(loadMovies), (state, action)=>{
                state.error = true;
            })

})

export const {reducer: movieReducer, actions} = moviesSlice;

export const movieActions = {
    ...moviesSlice.actions,
    loadMovies
}

