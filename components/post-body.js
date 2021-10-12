import styles from "../styles/postbody.module.css";

export default function PostBody({ content }) {
  return (
    <div>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
