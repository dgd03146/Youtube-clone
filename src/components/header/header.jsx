import React, { memo, useRef } from 'react';
import styles from './header.module.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';

import SearchIcon from '@mui/icons-material/Search';
import avatar from './../../images/avatar.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

const Header = memo(({ onSearch }) => {
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
        <SearchIcon className={styles.searchIcon} onClick={onClick} />
      </div>
      <div className={styles.bar_right}>
        <a className={styles.link} href="https://github.com/dgd03146">
          <GitHubIcon className={styles.icon} />
        </a>
        <a
          href="https://gelatinous-macadamia-65a.notion.site/Coding-f8b575f544d34a4f8fbe2e6d2944da7e"
          className={styles.link}
        >
          <DescriptionIcon className={styles.icon} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCEPrexquOQfiDxFr8uIJ-8Q"
          className={styles.link}
        >
          <img className={styles.avatar} src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
});

export default Header;
