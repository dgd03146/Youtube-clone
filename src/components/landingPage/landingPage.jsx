import React, { useRef } from 'react';
import styles from './landingPage.module.css';
import bgImage from '../../images/landing-background.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import NoteIcon from '@mui/icons-material/Note';
import { useNavigate } from 'react-router-dom';

function LandingPage({ onSearch }) {
  const navigate = useNavigate();
  const inputRef = useRef();
  const handleSearch = () => {
    let query = inputRef.current.value;
    onSearch(query);
    query = '';
    navigate('/main');
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
    <div className={styles.LandingPage}>
      <nav className={styles.navbar}>
        <div className={styles.bar_left}>
          <YouTubeIcon
            className={styles.icon}
            fontSize="large"
            onClick={() => {
              navigate('/main');
            }}
          />

          <h1 className={styles.geo}>Geo</h1>
          <h1 className={styles.tube}>Tube</h1>
        </div>
        <div className={styles.bar_right}>
          <a className={styles.github} href="https://github.com/dgd03146">
            <GitHubIcon className={styles.icon} fontSize="large" />
          </a>
          <a
            className={styles.note}
            href="https://gelatinous-macadamia-65a.notion.site/Coding-f8b575f544d34a4f8fbe2e6d2944da7e"
          >
            <NoteIcon className={styles.icon} fontSize="large" />
          </a>
        </div>
      </nav>
      <img className={styles.bg} src={bgImage} alt="background" />
      <div className={styles.description}>
        <h1>FIND YOUR</h1>
        <h1 className={styles.des_video}>VIDEO!</h1>
      </div>
      <span
        className={styles.mainPage}
        onClick={() => {
          navigate('/main');
        }}
      >
        Go to Main Page
      </span>
      <div className={styles.search}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Enter the keywords"
          onKeyPress={onKeyPress}
        />
        <button onClick={onClick} className={styles.search_btn}>
          Search
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
