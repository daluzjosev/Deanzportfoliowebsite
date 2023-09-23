import React from 'react'
import Thumbnails from '@/app/components/Thumbnails'
import Youtubeplayer from './Youtubeplayer'
import videoData from '/_data/db.json'



export default function page() {
  return (
    <>
      <Youtubeplayer />
      <Thumbnails />
    </>
  )
}

export async function getStaticPaths() {
  const videos = videoData.videos
  const paths = videos.map(({ id }) => ({ params: { id }}))

  return {
    paths,

    fallback: true,
  };
}

export async function getStaticProps(context) {
  const videos = videoData.videos;

  return {
    props: {
      videos,
    },
  };
}