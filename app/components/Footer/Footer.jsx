import styles from "@/app/components/Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>© 2025 Horror Stories. All rights reserved.</div>
      <div className={styles.links}>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
      <div className={styles.socials}>{/* Icone sociale, dacă vrei */}</div>
    </footer>
  );
}
