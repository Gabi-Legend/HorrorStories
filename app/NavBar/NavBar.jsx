import styles from "@/app/NavBar/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navigation}>
      <h1 className={styles.logo}>Horror Stories</h1>
    </nav>
  );
}
