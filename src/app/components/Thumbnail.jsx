import React from 'react'
import Image from 'next/image'


export default function Thumbnail({ video }) {
  return (
    <>
      <div className="card text-center relative group block max-w-xs mx-auto ">
          <Image 
          className='
          group-hover:blur-[2px] duration-300
          group-hover:grayscale-[50%]
          '
          src={video.thumbnailUrl}
          alt={video.title} 
          width={750}
          height={350}
          />
            <div className="bg-rose-600  bg-opacity-50 h-[100%] duration-500 opacity-0 absolute left-0 right-0 bottom-0 text-white group-hover:opacity-100">

              <span className='p-5 '><p className='p-5 text-lg'><br></br>{video.title}</p>
              </span>
          </div>
      
      </div>
      
    </>
    
  )
}
