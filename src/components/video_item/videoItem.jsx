import React, { memo } from 'react';
import styles from './videoItem.module.css';

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    let he = require('he');
    const title = he.decode(video.snippet.title);
    return (
      <li
        className={`${styles.li} ${displayType}`}
        onClick={() => onVideoClick(video)}
      >
        <div className={styles.thumbnails_box}>
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
          <div className={styles.info_thumnails}>
            <img
              className={styles.channelThumnails}
              src={video.channelThumbnails}
              alt="channelThumbnails"
            />
          </div>
          <div className={styles.info_title}>
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.channelTitle}>{snippet.channelTitle}</span>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
