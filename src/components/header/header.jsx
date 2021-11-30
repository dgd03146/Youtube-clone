import React from 'react';
import styles from './header.module.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import avatar from './../../images/avatar.jpg';

function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.bar_left}>
        <MenuIcon className={styles.icon} />
        <div className={styles.bar_logo}>
          <YouTubeIcon className={styles.youtubeIcon} />
          <h1 className={styles.geo}>Geo</h1>
          <h1 className={styles.tube}>Tube</h1>
        </div>
      </div>
      <div className={styles.bar_search}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter the keywords"
        />
        <SearchIcon className={styles.inputBtn} />
      </div>
      <div className={styles.bar_right}>
        <VideoCallIcon className={styles.videocallIcon} />
        <AppsIcon className={styles.appIcon} />
        <NotificationsIcon className={styles.notificationIcon} />
        <a href="https://www.youtube.com/channel/UCEPrexquOQfiDxFr8uIJ-8Q">
          <img className={styles.avatar} src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
}

export default Header;
