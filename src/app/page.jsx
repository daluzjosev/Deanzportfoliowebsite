import Thumbnails from './components/Thumbnails'
import Highlightreel from '@/app/components/Highlightreel'
import Link from 'next/link'
import Contactlist from './components/Contactlist'
export default function Home() {
  return (
    <main className='flex-nowrap justify-center'>
      <div className="flex-wrap text-center mobile-nav space-x-4 p-0">
          <Link href={"/"}><p className=''>WORK</p></Link>
          <Link href={"/About"}><p className=''>ABOUT</p></Link>
          <ul className='flex justify-center pr-5 p-2 space-x-2 mt-2'>
            <Contactlist/>
          </ul>

      </div>
      <Highlightreel />

      <Thumbnails />
    </main>    

      
  )
}
