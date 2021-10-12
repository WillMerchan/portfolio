import CoverImage from "./cover-image";
import Link from "next/link";

import styles from "../styles/postpreview.module.css";

export default function PostPreview({ title, coverImage, date, slug, type }) {
  const path = type == "post" ? "posts" : "portfolio";
  return (
    <div className={styles.container}>
      <div className='mb-5'>
        {coverImage && (
          <CoverImage
            slug={slug}
            title={title}
            src={coverImage}
            height={903}
            width={1720}
            path={path}
          />
        )}
      </div>
      {type == "post" && <div className={styles.tag}>{date}</div>}
      <Link as={`/${path}/${slug}`} href={`/${path}/${slug}`}>
        <a className={styles.title}>{title}</a>
      </Link>
    </div>
  );
}
