import React, { useRef } from 'react';
import styles from './header.module.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import avatar from './../../images/avatar.jpg';

const Header = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const query = inputRef.current.value;
    onSearch(query);
  };

  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
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
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="Enter the keywords"
          onKeyPress={onKeyPress}
        />
        <button className={styles.inputBtn} onClick={onClick}>
          <SearchIcon className={styles.searchIcon} />
        </button>
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
};

export default Header;
