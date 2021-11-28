import React from 'react';
import styles from './landingPage.module.css';
import bgImage from '../../images/landing-background.png';
import Header from '../header/header';

function LandingPage() {
  return (
    <div className={styles.body}>
      <nav className={styles.navbar}>
        <div className={styles.bar_left}>
          <a className={styles.logo} href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <h1 className={styles.geo}>Geo</h1>
          <h1 className={styles.tube}>Tube</h1>
        </div>
        <div className={styles.bar_right}>
          <a className={styles.github} href="https://github.com/dgd03146">
            <i className="fab fa-github"></i>
          </a>
          <a className={styles.blog} href="https://imgeozi.tistory.com">
            <i className="fas fa-blog"></i>
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
