import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import VideoDetail from '../video_detail/videoDetail';
import VideoList from '../video_list/videoList';
import styles from './main.module.css';

function Main({ youtube }) {
  const [videos, setVideos] = useState([]); // make once
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };

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
        {selectedVideo ? (
          <>
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo} />
            </div>
            <div className={styles.list}>
              <VideoList
                videos={videos}
                onVideoClick={selectVideo}
                display={'list'}
              />
            </div>
          </>
        ) : (
          <>
            <Sidebar />
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              display={'grid'}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Main;
