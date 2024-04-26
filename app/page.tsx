import Image from 'next/image'
import Day2 from './day2/page'
import Day3 from './day3/page'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-white'>
      <Day2 />
      <Day3 />
    </main>
  )
}
