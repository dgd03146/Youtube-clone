import React from 'react';
import styles from './landingPage.module.css';
import bgImage from '../../images/landing-background.png';
import Header from '../header/header';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import NoteIcon from '@mui/icons-material/Note';

function LandingPage() {
  return (
    <div className={styles.LandingPage}>
      <nav className={styles.navbar}>
        <div className={styles.bar_left}>
          <a className={styles.youtube} href="#">
            <YouTubeIcon className={styles.icon} fontSize="large" />
          </a>
          <h1 className={styles.geo}>Geo</h1>
          <h1 className={styles.tube}>Tube</h1>
        </div>
        <div className={styles.bar_right}>
          <a className={styles.github} href="https://github.com/dgd03146">
            <GitHubIcon className={styles.icon} fontSize="large" />
          </a>
          <a className={styles.note} href="https://imgeozi.tistory.com">
            <NoteIcon className={styles.icon} fontSize="large" />
          </a>
        </div>
      </nav>
      <img className={styles.bg} src={bgImage} alt="background" />
      <div className={styles.description}>
        <h1>FIND YOUR</h1>
        <h1 className={styles.des_video}>VIDEO!</h1>
      </div>
      <span className={styles.mainPage}>Go to Main Page</span>
      <div className={styles.search}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter the keywords"
        />
        <button className={styles.search_btn}>Search</button>
      </div>
    </div>
  );
}

export default LandingPage;
