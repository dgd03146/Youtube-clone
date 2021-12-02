import React from 'react';
import styles from './videoDetail.module.css';

const VideoDetail = ({ video }) => {
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
