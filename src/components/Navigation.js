import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        gap: '20px',
      }}>
        <li><Link href="/" style={{ color: '#6953d3', fontWeight: 600 }}>Home</Link></li>
        <li><Link href="/services" style={{ color: '#444444', fontWeight: 600 }}>Services</Link></li>
        <li><Link href="/portfolio" style={{ color: '#444444', fontWeight: 600 }}>Portfolio</Link></li>
        <li><Link href="/about" style={{ color: '#444444', fontWeight: 600 }}>About Us</Link></li>
        <li><Link href="/why-us" style={{ color: '#444444', fontWeight: 600 }}>Why Us</Link></li>
        <li><Link href="/pricing" style={{ color: '#444444', fontWeight: 600 }}>Pricing</Link></li>
        <li><Link href="/blog" style={{ color: '#444444', fontWeight: 600 }}>Blog</Link></li>
        <li><Link href="/contact" style={{ color: '#444444', fontWeight: 600 }}>Contact</Link></li>
      </ul>
    </nav>
  )
}