import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f9f4f4',
      padding: '50px 0',
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <div>
          <img src="/images/f23ae318b98ae2324c09a299d6c70d27afe85ab9.png" alt="Synthecity Logo" style={{ width: '150px' }} />
          <p>Contact us here!</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/why-us">Why Us</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Follow Us</h3>
          {/* Add social media icons here */}
        </div>
      </div>
      <div style={{
        textAlign: 'center',
        marginTop: '20px',
      }}>
        <p>© 2024 SYNTHECITY DIGITAL SOLUTIONS. All Rights Reserved.</p>
      </div>
    </footer>
  )
}