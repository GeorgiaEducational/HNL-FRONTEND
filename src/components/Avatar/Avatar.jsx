import styles from "./Avatar.module.css";

export default function Avatar(initialChar) {
  return (
    <div className={styles.avatar}>
      <span>{initialChar}</span>
    </div>
  );
}
