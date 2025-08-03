"use client";

import Link from "next/link";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log("Firebase response:", res);
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (e) {
      console.error("Sign-up error:", e);
    }
  };

  return (
    <form onSubmit={handleSignUp} className={styles.form}>
      <h2 className={styles.heading}>Sign Up</h2>

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
        {loading ? "Creating..." : "Sign Up"}
      </button>

      {error && <p className={styles.errorMsg}>{error.message}</p>}

      <Link href="/signin" className={styles.link}>
        Already have an account? Sign in
      </Link>
    </form>
  );
}
