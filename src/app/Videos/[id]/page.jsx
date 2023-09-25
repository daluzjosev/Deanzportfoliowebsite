import React from 'react'
import Thumbnails from '@/app/components/Thumbnails'
import Youtubeplayer from '../Youtubeplayer';
import videoData from '/_data/db.json'

export default function page({ params }) {
  const video = videoData.videos.find(video => video.id === params.id)
  return (
    <>
      <Youtubeplayer id={video.id} title={video.title} />
      <Thumbnails />
    </>
  )
}
export async function getStaticProps({ params }) {
  try {
    const response = await fetch(`https://my-json-server.typicode.com/daluzjosev/deanzvideos/videos/${params.id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch video data');
    }
    const data = await response.json();
    console.log(data);

    return { props: { video : data } };
  } catch (error) {
    console.error(error);
    return { props: { video: null } }; // Set video prop to null to handle the error gracefully
  }
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

