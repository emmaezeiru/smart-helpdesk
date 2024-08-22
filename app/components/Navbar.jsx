import Image from "next/image";
import Link from "next/link";
import Logo from './smart-logo.jpg'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='smart logo'
        width={50}
        quality={100}
        placeholder="blur"
      />
      
      <Link href="/">
        <h1>Smart Helpdesk</h1>
      </Link>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
