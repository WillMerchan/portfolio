import CoverImage from "../components/cover-image";
import styles from "../styles/postheader.module.css";

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <div className={styles.textContainer}>
        <div className={styles.date}>{date}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.cover}>
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
    </>
  );
}
