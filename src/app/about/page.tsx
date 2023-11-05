import styles from './page.module.css'
import Header from '@/componentes/Header/Header'

export default function about() {
  return (
    <div>
        <Header />
      <main className={styles.main}>
        <p className={styles.tituloPagina}>Pagina Sobre</p>
      </main>
    </div>
  )
}