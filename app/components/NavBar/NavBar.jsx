import styles from "@/app/components/NavBar/NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.navigation}>
      <h1 className={styles.logo}>
        <a href="/">Horror Stories</a>
      </h1>
      <div className={styles.signSection}>
        <button className={styles.signBtn}>
          <Link href="/signup">Sign Up</Link>
        </button>
        <button className={styles.signBtn}>Log in</button>
      </div>
    </nav>
  );
}
