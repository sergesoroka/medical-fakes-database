import styles from "./../styles/Home.module.scss";
import SectionLabel from "../components/SectionLabel/SectionLabel";

import Head from "next/head";

import { useGetFakesQuery } from "../store/api";

const Video = () => {
  const { data } = useGetFakesQuery("video_ua");

  return (
    <>
      <Head>
        <title>Відео | Detox від пропаганди</title>
      </Head>
      <div className={styles.videoPageWrap}>
        <SectionLabel label="video" />
        <div className={styles.videoPage}>
          {data
            ? data.items.map((item, i) => {
                return (
                  <iframe
                    key={item.video_id}
                    width="560"
                    height="315"
                    src={item.video_link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                );
              })
            : "loading"}
        </div>
      </div>
    </>
  );
};

export default Video;
