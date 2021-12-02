import React from 'react';
import VideoItem from '../video_item/videoItem';
import styles from './videoList.module.css';

const VideoList = ({ videos, onVideoClick, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <ul className={`${styles.ul} ${displayType}`}>
      {videos.map(video => (
        <VideoItem
          video={video}
          key={video.id}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
