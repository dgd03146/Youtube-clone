import React from 'react';
import styles from './videoDetail.module.css';

const VideoDetail = ({ video }) => {
  const tags = [];
  let he = require('he');
  const title = he.decode(video.snippet.title);
  for (let i = 0; i < 4; i++) {
    video.snippet.tags && (tags[i] = `#${video.snippet.tags[i]} `);
  }
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        title="youtube video player"
        id="ytplayer"
        type="text/html"
        width="100%"
        height="600px"
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      {tags && <span className={styles.tag}>{tags}</span>}
      <h2 className={title}>{video.snippet.title}</h2>

      <hr className={styles.divide} />
      <div className={styles.channel}>
        <div className={styles.channelInfo}>
          <img
            className={styles.channelThumnails}
            src={video.channelThumbnails}
            alt="channelThumbnails"
          />
          <h3 className={styles.channelTitle}>{video.snippet.channelTitle}</h3>
        </div>

        <button className={styles.subscribe}>SUBSCRIBE</button>
      </div>
      <span className={styles.description}>{video.snippet.description}</span>
    </section>
  );
};

export default VideoDetail;
