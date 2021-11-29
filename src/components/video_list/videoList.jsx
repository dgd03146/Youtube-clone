import React from 'react';
import VideoItem from '../video_item/videoItem';
import styles from './videoList.module.css';

const VideoList = ({ videos }) => {
  return (
    <ul className={styles.ul}>
      {videos.map(video => (
        <VideoItem video={video} key={video.id} />
      ))}
    </ul>
  );
};

export default VideoList;
