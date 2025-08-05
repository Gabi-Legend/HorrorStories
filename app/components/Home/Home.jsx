import styles from "@/app/components/Home/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.homeEntireSect}>
        <div className={styles.homeSect}>
          <h1 className={styles.find}>Find the best horror stories!</h1>
          <Link href="/storypage">
            <button>Read Stories</button>
          </Link>
        </div>
      </div>
    </>
  );
}
