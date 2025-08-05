"use client";
import { useState } from "react";
import styles from "./page.module.css";
import StoryNav from "../components/storyNav/StoryNav";

const stories = [
  {
    id: 1,
    title: "The Whispering Shadows",
    author: "Alex",
    description:
      "In the dead of night, shadows whispered secrets no one dared repeat. Their voices crept along the walls, cold and sharp. The house had been empty for years, but tonight something stirred. Footsteps echoed with no source. Lights flickered even though the electricity was cut. It wasn’t just haunted. It was alive.",
  },
  {
    id: 2,
    title: "The Last Door",
    author: "Mara",
    description:
      "Every door led somewhere… except the last one. That one was different. It breathed. The air was heavier behind it. No one dared open it—until Jamie did. What he saw on the other side was not meant for the world of the living.",
  },
];

export default function StoryPage() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleCard = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      <StoryNav />
      <section className={styles.storySection}>
        {stories.map((story) => (
          <div
            key={story.id}
            className={`${styles.card} ${
              expandedId === story.id ? styles.expanded : ""
            }`}
          >
            <h3 className={styles.title}>{story.title}</h3>
            <p className={styles.author}>by {story.author}</p>
            <p className={styles.description}>
              {expandedId === story.id
                ? story.description
                : story.description.slice(0, 100) + "..."}
            </p>
            <button
              className={styles.button}
              onClick={() => toggleCard(story.id)}
            >
              {expandedId === story.id ? "Show less" : "Read more"}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
