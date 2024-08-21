import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/images/f23ae318b98ae2324c09a299d6c70d27afe85ab9.png" alt="Synthecity Logo" width={150} height={50} />
        </div>
        <nav className={styles.nav}>
          <Link href="/" className={styles.activeLink}>Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About Us</Link>
          <Link href="/why-us">Why Us</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className={styles.joinUs}>
          <Image src="/images/2466368e-2db8-49da-87ce-a869b8e85cd6.png" alt="Join Us" width={30} height={30} />
          <span>Join Us</span>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              <span>Elevate</span>
              <span className={styles.gradient}>Your Digital Presence</span>
              <span>today!</span>
            </h1>
            <p>Welcome to SYNTHECITY Digital Solutions. We Transform Ideas into Digital Reality</p>
            <button className={styles.ctaButton}>Explore Now!</button>
          </div>
          <div className={styles.heroImage}>
            <Image src="/images/66993ac3-6dcd-49cd-a6cb-a8cbc46b7d2b.png" alt="Hero Image" width={600} height={400} />
          </div>
        </section>

        <section className={styles.services}>
          <h2>
            <span className={styles.gradient}>VA</span> and <span className={styles.gradient}>Web Development</span> Solutions
          </h2>
          <div className={styles.serviceImages}>
            <Image src="/images/1f41d0af4a762eb46f9ba559324562e6f986d32b.png" alt="VA Services" width={400} height={300} />
            <Image src="/images/f3499ddc1d9d8090c776bc0011eca328fe950bec.png" alt="Web Development" width={400} height={300} />
          </div>
        </section>

        {/* Add more sections as needed */}

      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Image src="/images/f23ae318b98ae2324c09a299d6c70d27afe85ab9.png" alt="Synthecity Logo" width={150} height={50} />
          <p>Contact us here!</p>
          <div className={styles.footerLinks}>
            {/* Add footer links */}
          </div>
          <div className={styles.socialIcons}>
            {/* Add social media icons */}
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© 2024 SYNTHECITY DIGITAL SOLUTIONS. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}