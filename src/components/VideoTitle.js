import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>Play</button>
            <button className='bg-gray-500 text-white p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle