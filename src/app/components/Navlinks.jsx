import React from 'react'
import Link from 'next/link'
import Contactlist from './Contactlist'

export default function Navlinks() {
  return (
        <div className="flex space-x-4 ">
          <Link href={"/"}><p className='nav-link'>Work</p></Link>
          <Link href={"/About"}><p className='nav-link'>About</p></Link>
          <ul className="nav-link mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {/* <Contactlist /> */}

          </ul>
        </div>
  )
}
