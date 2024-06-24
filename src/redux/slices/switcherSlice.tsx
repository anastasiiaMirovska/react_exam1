import {createSlice} from "@reduxjs/toolkit";

type SwitcherSliceType ={
    mode: boolean
}

const initialSwitcherState: SwitcherSliceType ={
    mode: false
}


const switcherSlice = createSlice({
    name:"switcherSlice",
    initialState: initialSwitcherState,
    reducers:{
        changeMode:(state)=>{
            state.mode = !state.mode
        }
    }
});

const {reducer: switchReducer, actions} = switcherSlice;

const switchActions ={
    ...actions
}

export {
    switchReducer,
    switchActions
}


