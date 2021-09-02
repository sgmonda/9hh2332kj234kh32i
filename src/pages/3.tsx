import Link from 'next/link';
import React from 'react';
import styles from './page.module.sass';

const Page = () => {
  return (
    <div className={styles.centered}>
      <div>
        <h2>Stats</h2>
        <p>This page has not been implemented yet</p>
        <p>
          <Link href="/"><a>Goto home page</a></Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
