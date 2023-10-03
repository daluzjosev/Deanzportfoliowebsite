'use client'
import YoutubeEmbed from "./YoutubeEmbed"
import videoData from '/_data/db.json'

export default function Youtubeplayer({id, title}) {
  
  if (!id) {
    return <div><h2 className="">Video not found</h2></div>;
    }
  return  (
    <div className='items-center'>
      <h2 className='basis-full text-center text-xl'>{title}</h2>
      <YoutubeEmbed embedId={id} />
    </div>
  )
}
