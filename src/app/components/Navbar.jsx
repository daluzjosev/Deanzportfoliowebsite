'use client'

import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import Navlinks from "./Navlinks";

export default function Navbar() {
  return (
    <nav>
        <div className='flex'>
        <Link href={"/"}> <h1 className='text-5xl nav-title'>Dean Ver Tinio</h1></Link>
        </div>
        <Link href={"/"}><Image className='nav-logo pl-2' src="Deanzportfoliowebsite/apple-touch-icon.png " width={60} height={60} alt="icon" /></Link>
        <Navlinks />
    </nav>
  )
}
