import styles from "@/app/components/Home/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.homeEntireSect}>
        <div className={styles.homeSect}>
          <h1 className={styles.find}>Find the best horror stories!</h1>
          <button>Get started</button>
        </div>
      </div>
    </>
  );
}
