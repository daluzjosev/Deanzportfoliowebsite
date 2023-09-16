import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <Link href={"/"}><h1>Dean Ver Tinio</h1></Link>
        <Link href={"/"}>Work</Link>
        <Link href={"/About"}>About</Link>
    </nav>
  )
}
