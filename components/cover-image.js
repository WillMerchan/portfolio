import Link from "next/link";
import Image from "next/image";
import styles from "../styles/coverimage.module.css";

export default function CoverImage({ title, src, slug, height, width, path }) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={styles.image}
      layout='responsive'
      width={width}
      height={height}
    />
  );
  return (
    <div className={styles.imagewrapper}>
      {slug ? (
        <Link as={`/${path}/${slug}`} href={`/${path}/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
