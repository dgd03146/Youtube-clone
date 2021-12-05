import React, { useCallback, useEffect, useState } from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import VideoDetail from '../video_detail/videoDetail';
import VideoList from '../video_list/videoList';
import styles from './main.module.css';

function Main({ youtube }) {
  const [videos, setVideos] = useState([]); // make once
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = useCallback(video => {
    setSelectedVideo(video);
  }, []);

  const search = useCallback(
    query => {
      youtube
        .search(query) // generally promise line be placed
        .then(videos => {
          const promises = [];
          Promise.all(youtube.channel(videos, promises)).then(() =>
            setVideos(videos)
          );
        });
      setSelectedVideo(null);
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => {
        const promises = [];
        Promise.all(youtube.channel(videos, promises)).then(() =>
          setVideos(videos)
        );
      });
  }, [youtube]);

  return (
    <div className={styles.mainPage}>
      <Header onSearch={search} />
      <div className={styles.content}>
        {selectedVideo ? (
          <div className={styles.container}>
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
          </div>
        ) : (
          <div className={styles.sidebar_container}>
            <Sidebar />
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              display={'grid'}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
