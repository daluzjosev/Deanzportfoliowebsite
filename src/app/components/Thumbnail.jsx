import React from 'react'
import Image from 'next/image'

export default function Thumbnail({ video }) {
  return (
    <div className="card group block max-w-xs mx-auto p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
        <Image 
        src={video.thumbnailUrl}
        alt={video.title} 
        width={500}
        height={250}
        />
  </div>
  )
}
