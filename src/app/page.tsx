import Image from "next/image";
import styles from "@/scss/page.module.scss";
import { Typography } from "@mui/material";
import Link from "next/link";
import { APP_NAME } from "@/constants/general";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Hello, selamat datang :)</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Typography variant="h1" component="h1">
          {APP_NAME}.
        </Typography>
      </div>

      <div className={styles.card_wrapper}>
        <Link href="/auth/signup" className={styles.card}>
          <h2>
            Kuy Join <span>-&gt;</span>
          </h2>
          <p>Cobain nih applikasi baru.</p>
        </Link>
        <Link href="/auth/login" className={styles.card}>
          <h2>
            Buka Lagi <span>-&gt;</span>
          </h2>
          <p>Buat kalian yang sudah pernah pake applikasi ini.</p>
        </Link>
      </div>
    </main>
  );
}
