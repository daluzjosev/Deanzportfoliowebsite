import React from 'react'

export default function Highlightreel() {
    return  (
        <main className='flex justify-center'>
            <div className="max-w-screen-sm w-full overflow-hidden my-10">
                <iframe
                    className='aspect-video'
                    width="100%"
                    height="full"
                    src={`https://www.youtube.com/embed/V-v-86CH7mw`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </main>
        
      )
}
