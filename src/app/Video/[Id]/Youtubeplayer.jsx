'use client'
import React, { useState, useEffect } from 'react'
import videoData from '/_data/db.json'
import { useParams } from 'next/navigation'
import YoutubeEmbed from "./YoutubeEmbed"

export default function Youtubeplayer() {
  
  const {Id} = useParams()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    setVideos(videoData.videos)
  }, [])

  const video = videos.find(video => video.id === Id)
  if (!video) {
    return <div><h2>Video not found</h2></div>
  }
  return  (
    <div className=''>
      <h2 className='basis-full'>{video.title}</h2>
      <YoutubeEmbed embedId={video.id} />
    </div>
  )
}
