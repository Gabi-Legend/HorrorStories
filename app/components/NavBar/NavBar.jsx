"use client";

import { useState } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  return (
    <nav className={styles.navigation}>
      <h1 className={styles.logo}>
        <Link href="/">Horror Stories</Link>
      </h1>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={menuOpen ? styles.burgerLineActive : styles.burgerLine}
        ></span>
        <span
          className={menuOpen ? styles.burgerLineActive : styles.burgerLine}
        ></span>
        <span
          className={menuOpen ? styles.burgerLineActive : styles.burgerLine}
        ></span>
      </button>

      <div
        className={`${styles.signSection} ${menuOpen ? styles.showMenu : ""}`}
      >
        {!loading && !user && (
          <>
            <Link href="/signup" className={styles.signBtn}>
              Sign Up
            </Link>
            <Link href="/login" className={styles.signBtn}>
              Sign in
            </Link>
          </>
        )}
        {user && <p className={styles.welcomeMsg}>Welcome, {user.email}</p>}
      </div>
    </nav>
  );
}
