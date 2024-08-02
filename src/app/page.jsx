
import Link from 'next/link';
import styles from './page.module.css'
import Image from 'next/image';
import Hero from '@/components/Hero/page';


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Hero/>
      </div>
    </main>
  );
}

