import React from 'react'
import thumbnail1 from './thumbnail1.jpg'
import Image from 'next/image'

export default function Thumbnails() {
  return (
    <div className="card-container">
        <div className="card">
            <Image 
                src={thumbnail1}
                alt="thumbnail 1"
                sizes='max'
                quality= {100}
                placeholder='blur'
            />
        </div>
        <div className="card">
            <Image 
                src={thumbnail1}
                alt="thumbnail 1"
                width = {2000}
                quality= {100}
                placeholder='blur'
            />
        </div>
        <div className="card">
            <Image 
                src={thumbnail1}
                alt="thumbnail 1"
                width = {500}
                quality= {100}
                placeholder='blur'
            />
        </div>
        <div className="card">
            <Image 
                src={thumbnail1}
                alt="thumbnail 1"
                sizes='max'
                quality= {100}
                placeholder='blur'
            />
        </div>
        <div className="card">
            <Image 
                src={thumbnail1}
                alt="thumbnail 1"
                width = {500}
                quality= {100}
                placeholder='blur'
            />
        </div>
        <div className="card">
            <Image 
                src={thumbnail1}
                alt="thumbnail 1"
                width = {500}
                quality= {100}
                placeholder='blur'
            />
        </div>
  </div>
  )
}
