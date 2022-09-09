import YouTubeVideo from "../components/YouTubeVideo/YouTubeVideo";
import styles from "./../styles/Home.module.scss";
import { videoData } from "../data/fakes/videoData";
import SectionLabel from "../components/SectionLabel/SectionLabel";

const Video = () => {
  const video = videoData.map((item, i) => {
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
  });
  return (
    <div className={styles.infoPage}>
      <SectionLabel label="video" />
      <div className={styles.videoPage}>
      {video}
      </div>
    </div>
  );
};

export default Video;
