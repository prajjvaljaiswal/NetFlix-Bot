import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // const {poster_path} = movies[0]
  return movies &&(
    <div className='p-6 text-white'>
        <h1 className=' text-3xl py-4 font-bold'>{title}</h1>
        <div className='flex overflow-x-scroll'>
          <div className='flex'>
          {movies.map((movie)=>(
            <MovieCard key={movie?.id} poster={movie?.poster_path}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default MovieList