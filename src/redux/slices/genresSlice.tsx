import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IGenre} from "../../Interfaces/IGenre";
import {genreService} from "../../services/api.service";
import {AxiosError} from "axios";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

type GenresSliceType = {
    genres: IGenre[],
    error: boolean
}


const initialGenresState:GenresSliceType = {
    genres: [],
    error: false
}

const loadGenres = createAsyncThunk(
    "genresSlice/loadGenres",
    async (_, thunkAPI)=>{
        try{
            const genres = await genreService.getGenres();
            return thunkAPI.fulfillWithValue(genres);
        }
        catch(e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)


const genresSlice = createSlice({
    name: "genresSlice",
    initialState: initialGenresState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(loadGenres.fulfilled, (state, action)=>{
                console.log(action.payload)
                state.genres = action.payload
            })
            .addMatcher(isFulfilled(loadGenres), (state, action)=>{
                state.error = false
            })
            .addMatcher(isRejected(loadGenres), (state, action)=>{
                state.error = true
            })

});

const {reducer: genreReducer, actions} = genresSlice;

const genreActions ={
    ...actions,
    loadGenres
}

export{
    genreReducer,
    genreActions
}


