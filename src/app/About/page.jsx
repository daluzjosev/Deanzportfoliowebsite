import React from 'react'
import Carousel from '../components/Carousel'
import Image from 'next/image'

export default function About() {
  return (
    <main>
        <h2 > About </h2>

      <div className=''>
        <Carousel />

        <div className='text-justify'>
          <div className=' py-5'>
            <p className='text-center'>

              Dean Ver Tinio is a visionary editor of digital post-production content. 

              He has worked with various type of content in the digital entertainment industry.


          </p> 
            <br />
            <p className='text-center'>
              He worked with multiple youtube celebrities and big branded esports organizations with the likes of
            </p>
          </div>
          <div className='py-5 text-center'>
            <h2 className='m-5'>some quote here</h2>
            <p>asdfg@gmail.com</p>
          </div>
        </div>
        
      </div>
     
    </main>
    
  )
}
