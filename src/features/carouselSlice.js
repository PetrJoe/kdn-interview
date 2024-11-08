import { createSlice } from "@reduxjs/toolkit";

const initState = {
  movies: [
    {id:1, title: 'The Godfather', year: 1994, runtime: 142},
    {id:2, title: 'Pulp Fiction', year: 1994, runtime: 142},
    {id:3, title: 'The Dark Knight', year: 1994, runtime: 142},
    {id:4, title: 'Fight Club', year: 1994, runtime: 142},
    {id:6, title: 'Inception', year: 1994, runtime: 142},
    {id:7, title: 'Goodfellas', year: 1994, runtime: 142},
    {id:8, title: 'The Matrix', year: 1994, runtime: 142},
    {id:9, title: 'Forrest Gump', year: 1994, runtime: 142},
    {id:10, title: 'The Silence of the Lambs', year: 1994, runtime: 142},  ],
  filteredMovies: [],
};

const carouselSlice = createSlice({
    name: 'carousel',
    initialState: initState,
    reducers:{
        filterMovies(state, action){
            state.filteredMovies = state.movies.filter(movie => movie.title.toLowerCase().includes(action.payload.toLowerCase()))
        }
    }
})
export const { filterMovies } = carouselSlice.actions;
export const selectMovies = state => state.carousel.movies;
export default carouselSlice.reducer;
