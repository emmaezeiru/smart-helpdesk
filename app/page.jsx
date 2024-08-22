import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p> This is a content writing for my smart help desk application</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primaty">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New menber of the web dev team...</h3>
        <p> this is another content writing</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>another content writing again</p>
      </div>
    </main>
  )
}
