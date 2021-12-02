import React from 'react';
import styles from './videoDetail.module.css';

const VideoDetail = ({ video }) => {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        id="ytplayer"
        type="text/html"
        width="100%"
        height="600px"
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        frameborder="0"
        allowfullscreen
      ></iframe>

      <h2 className={styles.title}>{video.snippet.title}</h2>
      <hr className={styles.divide} />
      <div className={styles.channel}>
        <h3 className={styles.channelTitle}>{video.snippet.channelTitle}</h3>
        <button className={styles.subscribe}>SUBSCRIBE</button>
      </div>

      <span className={styles.description}>{video.snippet.description}</span>
    </section>
  );
};

export default VideoDetail;
