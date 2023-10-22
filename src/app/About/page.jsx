import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Contactlist from '../components/Contactlist'
export default function About() {
  return (
    <>
    <div className="flex-wrap text-center mobile-nav space-x-4 p-0 uppercase">
          <Link href={"/"}><p className=''>Work</p></Link>
          <Link href={"/About"}><p className=''>About</p></Link>
          
          <ul className='flex justify-center pr-5 p-2 space-x-2 mt-2'>
            <Contactlist/>
          </ul>
      </div>
      
    <main>
      <div className='flex flex-wrap justify-center space-x-5 mt-5'>
      <Image 
              className='object-contain invert'
              src={"images/tsmlogo.png"}
              alt='Tsm logo'
              width={100}
              height={100}
              
              />
      <Image 
              className='object-contain invert'
              src={"images/prxlogo.png"}
              alt='PRX logo'
              width={100}
              height={100}
              
              />
              <Image 
              className='object-contain invert'
              src={"images/flyquestlogo-black.png"}
              alt='Tsm logo'
              width={100}
              height={100}
              
              />
              
              <Image 
              className='object-contain invert'
              src={"images/darkzero3-black.png"}
              alt='darkzero3 logo'
              width={100}
              height={100}
              
              /><Image 
              className='object-contain invert'
              src={"images/aimlab.png"}
              alt='aimlab logo'
              width={100}
              height={100}
              
              />
     <Image 
              className='object-contain invert'
              src={"images/gmclogo2-black.png"}
              alt='gcm logo'
              width={100}
              height={100}
              
              />
      
              
              <Image 
              className='object-contain invert'
              src={"images/logitechlogo.png"}
              alt='Logitech logo'
              width={100}
              height={100}
              
              />
              
      </div>
      <div className=' text-lg'>

        <div className='text-justify '>
          <div className=' p-5 tracking-tighter text-pink-200'>
              <p className='text-center   p-8'>

                {"Dean Ver Tinio is a visionary editor of digital post-production content." }


              </p> 
              
             
              <p className='text-center italic text-pink-100'>
              {"2021 Nominated “2021 Best Video Prod Team of the Year”, Esports Awards (TSM)" } 
              
              </p>
              
              <p className='text-center italic text-pink-50'>
              {"2023 Nominated “2023 Best Video Prod Team of the Year”, Esports Awards (Flyquest)" }
              
              </p>
              <br />
              
          </div>

          <p className='text-center '>
              {"He has worked with various types of content in the digital entertainment industry. He worked with multiple youtube celebrities and big branded esports organizations with the likes of PRX, TSM, Flyquest, Darkzero, Cody Ko, Logitech, GMC, Aimlabs."}
          </p>

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
