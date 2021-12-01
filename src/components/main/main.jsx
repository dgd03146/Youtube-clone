import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import VideoList from '../video_list/videoList';
import styles from './main.module.css';

function Main({ youtube }) {
  const [videos, setVideos] = useState([]); // make once
  const search = query => {
    youtube
      .search(query) // generally promise line be placed
      .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.mainPage}>
      <Header onSearch={search} />
      <div className={styles.content}>
        <Sidebar />
        <VideoList videos={videos} />
      </div>
    </div>
  );
}

export default Main;
