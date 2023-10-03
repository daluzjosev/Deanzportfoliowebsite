import React from 'react'
import Selfie from '@/app/components/Selfie'
import Link from 'next/link'

export default function About() {
  return (
    <>
    <div className="flex-wrap text-center mobile-nav space-x-4 p-0">
          <Link href={"/"}><p className=''>Work</p></Link>
          <Link href={"/About"}><p className=''>About</p></Link>
          

      </div>
    <main>
      <Selfie />
        <h2 className='text-center' > About </h2>

      <div className=''>

        <div className='text-justify'>
          <div className=' py-5'>
            <p className='text-center italic'>

              {"Dean Ver Tinio is a visionary editor of digital post-production content." }

          </p> 
            <br />
            <p className='text-center'>
            {"He's been in the digital entertainment world, working with all kinds of content. He's teamed up with YouTube stars and big esports names like TSM (Team Solo Mid) and PRX. His specialty? Making fun videos and doing cool 3D stuff. He's a video pro who takes big ideas and turns them into awesome visuals."}
            </p>
          </div>
          <div className='py-5 text-center'>
            <h2 className='m-5'>Transforming Videos into Entertainment <span className='text-yellow-400'>Gold</span> </h2>
            <p>
              contact@deanvertinio.com
            </p>
          </div>
        </div>
        
      </div>
     
    </main>
    </>
    
    
  )
}
