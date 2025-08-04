"use client";

import { useState } from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { signOut } from "firebase/auth";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

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
        {user && (
          <button onClick={handleLogout} className={styles.signBtn}>
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}
