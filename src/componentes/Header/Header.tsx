import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Projeto</h2>
      <nav>
        <ul className={styles.listaLink}>
          <li>
            <Link className={styles.links} href={'/'}>Home</Link>
          </li>
          <li>
            <Link className={styles.links} href={'/about'}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}