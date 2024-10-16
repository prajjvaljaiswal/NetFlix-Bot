import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name : "movie",
        initialState : {
            nowPlayingMovies : null,
            trailerVideo : null
        },
        reducers : {
            addMovies(state,action){
                state.nowPlayingMovies = action.payload;
            },
            addTrailerVideo(state,action){
                state.trailerVideo = action.payload;
            }
        }
    }
)

export const {addMovies, addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;