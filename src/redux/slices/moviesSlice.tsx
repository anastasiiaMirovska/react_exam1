import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {IMovie} from "../../Interfaces/IMovie";
import {movieService} from "../../services/api.service";
import {AxiosError} from "axios";
import {IGetMovies} from "../../Interfaces/IGetMovies";
import {IMovieDetails} from "../../Interfaces/IMovieDetails";

type MoviesSliceType = {
    movies: IMovie[],
    page: number,
    total_pages: number,

    with_genres: number,
    filmName:string,
    movie: IMovieDetails,
    error: boolean
}

const initialMoviesState: MoviesSliceType = {
    movies: [],
    page: null,
    total_pages: null,
    with_genres: null,
    filmName:null,
    movie: null,
    error: false
}

const loadMovie = createAsyncThunk<IMovieDetails, string>(
    "movieSlice/loadMovie",
    async (id:string, thunkAPI)=>{
        try{
            const movieResponse = await movieService.getMovieById(id);
            return thunkAPI.fulfillWithValue(movieResponse);
        }
        catch(e){
            const error = e as AxiosError;
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)


const loadMovies = createAsyncThunk(
    "movieSlice/loadMovies",
    async ({page, with_genres, filmName}:IGetMovies, thunkAPI)=>{
        try{
            let movies;
            if(with_genres){
                movies = await movieService.getMovies({page:page, with_genres:with_genres, filmName:null});
            }
            else if(filmName){
                movies = await movieService.getMovies({page:page, with_genres:undefined, filmName:filmName});
            }
            else{
                movies = await movieService.getMovies({page:page, with_genres:undefined, filmName:null})
            }
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
        },
        changeGenre:(state, action:PayloadAction<number>)=>{
            state.with_genres = action.payload
        },
        changeFilmName:(state, action:PayloadAction<string>)=>{
            state.filmName =  action.payload
        },
        changeErrorState:(state, action:PayloadAction<boolean>)=>{
            state.error = action.payload;
        }
    },
    extraReducers: builder=>
        builder
            .addCase(loadMovies.fulfilled, (state, action)=>{
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages;
                state.error = false;
            })
            .addCase(loadMovie.fulfilled, (state, action)=>{
                state.movie = action.payload;
                state.error = false;
            })
            .addMatcher(isFulfilled(loadMovies), (state, action)=>{
                state.error = false;
            })
            .addMatcher(isFulfilled(loadMovie), (state, action)=>{
                state.error = false;
            })
            .addMatcher(isRejected(loadMovies), (state, action)=>{
                state.error = true;
            })
            .addMatcher(isRejected(loadMovie), (state, action)=>{
                state.error = true;
            })

})

const {reducer: movieReducer, actions} = moviesSlice;

const movieActions = {
    ...moviesSlice.actions,
    loadMovies,
    loadMovie
}

export {
    movieActions,
    movieReducer
}
