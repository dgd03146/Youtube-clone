import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import VideoList from '../video_list/videoList';
import styles from './main.module.css';

function Main() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=24&key=AIzaSyCPbzL0dj-lklB6dc5L3qQ3Bl-E-_TkM8o',
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className={styles.mainPage}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <VideoList videos={videos} />
      </div>
    </div>
  );
}

export default Main;
