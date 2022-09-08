import styles from "./YouTubeVideo.module.scss";
import SectionLabel from "../SectionLabel/SectionLabel";
import Link from "next/link";

const YouTubeVideo = () => {
  return (
    <div className={styles.videoWrap}>
      <Link href="/video">
        <a>
          <SectionLabel label="video" />
        </a>
      </Link>

      <div className={styles.video}>
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/jDCp6s0Md3c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
