import React from 'react'
import Thumbnails from '@/app/components/Thumbnails'
import Youtubeplayer from './Youtubeplayer'

export default function page() {
  return (
    <>
      <Youtubeplayer />
      <Thumbnails />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}