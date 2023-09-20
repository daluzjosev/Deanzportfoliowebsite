import React from 'react'
import Contactlist from './Contactlist'

export default function Footer() {
  return (
    <footer className='p-5'>
        <div className=" mx-auto max-w-screen-xl p-6 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Dean Ver Tinio
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <Contactlist />
          </ul>
        </div>
    </footer>
  )
}
