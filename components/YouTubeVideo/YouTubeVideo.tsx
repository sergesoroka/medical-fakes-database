/* eslint-disable react/no-unknown-property */
import styles from "./YouTubeVideo.module.scss";
import SectionLabel from "../SectionLabel/SectionLabel";
import Link from "next/link";

import { videoData } from "./../../data/fakes/videoData";

const YouTubeVideo = ({ video_id }: { video_id: string }) => {
  const video = videoData.map((item, i) => {
    if (video_id == item.video_id) {
      return (
        <>
          {item.video_id && (
            <Link href="/video" >
              <a>
                <SectionLabel label="video" />
              </a>
            </Link>
          )}
          <iframe
          className={styles.frame}
            key={item.video_id}
            width="560"
            height="315"
            src={item.video_link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </>
      );
    }
  });
  return (
    <div className={styles.videoWrap}>
      <div className={styles.video}>{video}</div>
    </div>
  );
};

export default YouTubeVideo;
