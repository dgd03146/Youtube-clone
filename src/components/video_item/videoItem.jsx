import React from 'react';
import styles from './videoItem.module.css';

const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className={styles.li}>
      <div className={styles.thumnails_box}>
        <img
          className={styles.thumbnails}
          src={snippet.thumbnails.medium.url}
          alt="thumnails"
        />
        <div className={styles.overlay}>
          <span className={styles.description}>Let's start the video</span>
        </div>
      </div>
      <div className={styles.videoInfo}>
        <h1 className={styles.title}>{snippet.title}</h1>
        <span className={styles.channelTitle}>{snippet.channelTitle}</span>
      </div>
    </li>
  );
};

export default VideoItem;