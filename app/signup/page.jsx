"use client";

import Link from "next/link";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { updateProfile } from "firebase/auth";
import styles from "./page.module.css";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [localError, setLocalError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, firebaseError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setLocalError("Password must be at least 8 characters.");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(email, password);

      if (res && res.user) {
        await updateProfile(res.user, {
          displayName: username,
        });
      }

      setEmail("");
      setPassword("");
      setUsername("");
      setLocalError("");
      router.push("/");
    } catch (e) {
      console.error("Sign-up error:", e);
    }
  };

  return (
    <form onSubmit={handleSignUp} className={styles.form}>
      <h2 className={styles.heading}>Sign Up</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className={styles.input}
      />

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
        placeholder="Password (min. 8 characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className={styles.input}
      />

      <button type="submit" disabled={loading} className={styles.button}>
        {loading ? "Creating..." : "Sign Up"}
      </button>

      {localError && <p className={styles.errorMsg}>{localError}</p>}

      {firebaseError && (
        <p className={styles.errorMsg}>{firebaseError.message}</p>
      )}

      <Link href="/login" className={styles.link}>
        Already have an account? Sign in
      </Link>
    </form>
  );
}
