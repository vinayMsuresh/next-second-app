import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Dash.module.scss'
export default function Home() {
  return (
    <div >
  
        <h1 className={styles.highlight}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

    </div>
  )
}
