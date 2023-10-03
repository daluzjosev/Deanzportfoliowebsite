'use client'
import React, { useState, useEffect } from 'react'
import videoData from '/_data/db.json'
import Thumbnail from './Thumbnail'
import Link from 'next/link'

export default function Thumbnails() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videoData.videos);
  }, []);

  return (
      <div className='card-container grid justify-center'>
        
          {videos.map(video => (
            <div className='card' key={video.id} >
            <Link 
            href={`/Videos/${video.id}`
            
            
            }>
                <Thumbnail video={video} />
            </Link>
            </div>
            
            
          ))}
        </div>
    
  );
 
}


