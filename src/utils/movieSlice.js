import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name : "movie",
        initialState : {
            nowPlayingMovies : null,
            trailerVideo : null,
            popularMovies : null,
            topRatedMovies : null
        },
        reducers : {
            addMovies(state,action){
                state.nowPlayingMovies = action.payload;
            },
            addTrailerVideo(state,action){
                state.trailerVideo = action.payload;
            },
            addPopularMovies(state, action){
                state.popularMovies = action.payload;
            },
            addTopRatedMovies(state, action){
                state.topRatedMovies = action.payload;
            }
        }
    }
)

export const {addMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies} = movieSlice.actions;

export default movieSlice.reducer;