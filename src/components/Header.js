import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header style={{
      width: '100%',
      padding: '20px 0',
      backgroundColor: '#ffffff',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link href="/">
          <img src="/images/f23ae318b98ae2324c09a299d6c70d27afe85ab9.png" alt="Synthecity Logo" style={{ width: '150px' }} />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}