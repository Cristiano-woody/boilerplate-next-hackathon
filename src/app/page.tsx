import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/componentes/Header/Header'

export default function Home() {
  return (
    <div>
        <Header />
      <main className={styles.main}>
        <p className={styles.tituloPagina}>Pagina <span className={styles.tituloPaginaSpan}>Home</span></p>
      </main>
    </div>
  )
}
