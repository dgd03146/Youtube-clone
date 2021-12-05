import React from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import VideoDetail from '../video_detail/videoDetail';
import VideoList from '../video_list/videoList';
import styles from './main.module.css';

function Main({ videos, selectedVideo, search, selectVideo }) {
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
