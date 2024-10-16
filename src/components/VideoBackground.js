import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTraile from '../hooks/useMovieTrailer'

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store)=> store.movie?.trailerVideo)
    useMovieTraile(movieId);
    
    return (
        <div className='w-screen'>
            <iframe className='aspect-video w-screen'
                src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
            </iframe>
        </div>
    )
}

export default VideoBackground