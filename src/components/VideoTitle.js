import React, { useState } from 'react'

const VideoTitle = ({title,overview}) => {
    // const [hide, setHide] = useState(false)
  return (
    <div className='pt-[20%] px-24 absolute bg-gradient-to-r from-black aspect-video w-screen text-white'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-4 px-12 text-xl hover:bg-opacity-70 rounded-lg font-bold'>Play</button>
            <button className='bg-gray-500 text-white p-4 px-12 mx-2 text-xl bg-opacity-50 hover:bg-opacity-80 rounded-lg'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle