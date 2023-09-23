'use client'
import React, { useState, useEffect } from 'react'
import videoData from '/_data/db.json'
import Link from 'next/link'
import Thumbnail from './Thumbnail'

export default function Thumbnails() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videoData.videos);
  }, []);

  return (
    <div className='card-container'>
      {videos.map(video => (
        <Link key={video.id} href={`/${video.id}`}>
            <Thumbnail video={video} />
        </Link>
      ))}
    </div>
  );
 
}
