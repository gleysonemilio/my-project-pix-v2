import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <Link href={'/raffle'}>raffle</Link>
        <Link href={'/profile'}>profile</Link>
      </div>
      
    </main>
  )
}
