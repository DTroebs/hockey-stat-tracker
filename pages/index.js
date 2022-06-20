import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {Button} from '@mui/material'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Hockey Stat Tracker</title>
                <meta name="description" content="Track your game stats"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to Hockey Tracker
                </h1>

                <p className={styles.description}>
                    To Get started, click below!
                </p>

                <div className={styles.grid}>
                    <Button variant="contained" className={styles.button}>Record Stats</Button>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}
