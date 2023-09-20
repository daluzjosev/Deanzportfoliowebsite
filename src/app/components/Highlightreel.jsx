import React from 'react'

export default function Highlightreel() {
    return  (
        <div className="card-container overflow-hidden max-w-full my-10">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/Zd0u1QQ9KFY`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
         </div>
      )
}
