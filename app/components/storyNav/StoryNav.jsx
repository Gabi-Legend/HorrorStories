import styles from "./StoryNav.module.css";

export default function StoryNav() {
  return (
    <nav className={styles.storyNav}>
      <h1 className={styles.logo}>
        <a href="/">Horror stories</a>
      </h1>
      <button className={styles.createStoryBtn}>Create story</button>
    </nav>
  );
}
