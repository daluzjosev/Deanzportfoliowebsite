import Thumbnails from './components/Thumbnails'
import Highlightreel from '@/app/components/Highlightreel'
import Link from 'next/link'
import Contactlist from './components/Contactlist'

export default function Home() {
  return (
    <main className='flex-nowrap justify-center'>
      <div className="flex-wrap text-center mobile-nav space-x-4 p-0">
          <Link href={"/"}><p className=''>Work</p></Link>
          <Link href={"/About"}><p className=''>About</p></Link>
          

      </div>
      <Highlightreel />

      <Thumbnails />
    </main>    

      
  )
}
