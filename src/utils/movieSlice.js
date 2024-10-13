import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name : "movie",
        initialState : {
            nowPlayingMovies : null
        },
        reducers : {
            addMovies(state,action){
                state.nowPlayingMovies = action.payload
            }
        }
    }
)

export const {addMovies} = movieSlice.actions;

export default movieSlice.reducer;