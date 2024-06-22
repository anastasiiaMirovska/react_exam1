import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {IMovie} from "../../Interfaces/IMovie";
import {movieService} from "../../services/api.service";
import {AxiosError} from "axios";

type MoviesSliceType = {
    movies: IMovie[],
    page: number,
    total_pages: number
    error: boolean
}

const initialMoviesState: MoviesSliceType = {
    movies: [],
    page: null,
    total_pages: null,
    error: null
}

const loadMovies = createAsyncThunk(
    "movieSlice/loadMovies",
    async (page:number, thunkAPI)=>{
        try{
            const movies = await movieService.getMovies(page);
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
    reducers:{
        changePage:(state, action: PayloadAction<number>)=>{
            state.page = action.payload
        }
    },
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

const {reducer: movieReducer, actions} = moviesSlice;

const movieActions = {
    ...moviesSlice.actions,
    loadMovies
}

export {
    movieActions,
    movieReducer
}
