import styles from './YouTubeVideo.module.scss'
import SectionLabel from '../SectionLabel/SectionLabel';

const YouTubeVideo = () => {
  return (
    <div className={styles.videoWrap}>
      <SectionLabel label='video'/>
      <div className={styles.video}>
      <iframe
        width="100%"
        height="400px"
        src="https://www.youtube.com/embed/jDCp6s0Md3c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe></div>
    </div>
  );
};

export default YouTubeVideo;
