import React from 'react'
import Thumbnails from '@/app/components/Thumbnails'
import Youtubeplayer from '../Youtubeplayer';
import videoData from '/_data/db.json'
import Link from 'next/link';

export default function page({ params }) {
  const video = videoData.videos.find(video => video.id === params.id)
  return (
    <>
    <div className="flex-wrap text-center mobile-nav space-x-4 p-0">
          <Link href={"/"}><p className=''>Work</p></Link>
          <Link href={"/About"}><p className=''>About</p></Link>
          

      </div>
     <main className='flex-nowrap justify-items-center'>
      <Youtubeplayer id={video.id} title={video.title} />
      <Thumbnails />
    </main>
    </>
   
  )
}


export async function getStaticPaths() {
  const response = await fetch('https://my-json-server.typicode.com/daluzjosev/deanzvideos/videos');
  
  const data = await response.json();
  
  return { 
    
    paths: data.map(video =>  (
      {
        params: { id: video.id }
      }
    )  
    
    ), 
    
    fallback: false };
}

