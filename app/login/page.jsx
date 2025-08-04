"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <form onSubmit={handleSignIn} className={styles.form}>
      <h2 className={styles.heading}>Sign In</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={styles.input}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className={styles.input}
      />

      <button type="submit" disabled={loading} className={styles.button}>
        {loading ? "Signing in..." : "Sign In"}
      </button>

      {error && <p className={styles.errorMsg}>{error.message}</p>}

      <Link href="/signup" className={styles.link}>
        Don't have an account? Sign up
      </Link>
    </form>
  );
}
