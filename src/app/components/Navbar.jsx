'use client'

import { Dropdown } from 'flowbite-react';
import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import Navlinks from "./Navlinks";
import Contactlist from "./Contactlist";


export default function Navbar() {
  return (
    <nav>
      
        
        <div className='flex space-x-4'>
        <Link href={"/"}> <h1 className='text-5xl nav-title'>Dean Ver Tinio</h1></Link>
        <ul className='flex space-x-2 mt-3 card-title'>
            <Contactlist/>
        </ul>
        </div>
        <div  className='flex pl-3'>
        <Link href={"/"}><Image className='nav-logo' src="/images/android-chrome-512x512.png" width={60} height={60} alt="icon" /></Link>

      </div>
        <div className="flex">
          

          <Navlinks />

          
        </div>
        
    </nav>
  )
}
