import { FC } from "react";
import Head from "next/head";
import { Heading1 } from "@ui/components/Typography/Typography";

import styles from "./styles.module.scss";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main>
        <div className={styles.hero}>
          <div className={styles.heroPreTitle}>Hello, I'm</div>
          <h1 className={styles.heroTitle}>
            Hans
            <br />
            Hoffman
          </h1>
          <div className={styles.heroDesc}>Fullstack web & mobile developer</div>
        </div>
      </main>
    </>
  );
};

export default Home;
