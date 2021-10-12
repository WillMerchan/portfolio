import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/about.module.css";
import avatar from "../public/assets/avatar.jpg";

export default function About() {
  return (
    <Layout activePage='about'>
      <div className={styles.container}>
        <Image
          src={avatar}
          className={styles.avatar}
          width={200}
          height={200}
        />
        <p className={styles.title}>👋 Hello!</p>
        <p className={styles.body}>
          I'm Will, a product designer and sometimes frontend dev who enjoys
          working on hard to solve problems which have a social impact. I'm
          currently leading design on a school management app at{" "}
          <a href='https://portal.newvisions.org'>
            New Visions for Public Schools
          </a>
          . Prior to that I spent time working in climate tech, AI chatbots,
          learning management system, and content management systems for media
          businesses. Feel free to{" "}
          <a href='mailto:willmerchan@gmail.com'>reach out</a> if there's a
          project you'd like to collaborate on!
        </p>
      </div>
    </Layout>
  );
}
