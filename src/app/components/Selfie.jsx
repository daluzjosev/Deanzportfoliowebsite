import React from 'react'
import Image from 'next/image'


export default function Carousel() {
  return (
    <div className='my-5 flex flex-wrap justify-center '>
        <Image 
        className='rounded-full '
        src={"/Deanzportfoliowebsite/images/deanztinio-landscape.png"}
        alt='avatar'
        width={500}
        height={250}
        
        />
    </div>
  )
}
