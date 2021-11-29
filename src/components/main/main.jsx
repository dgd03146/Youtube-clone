import React from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import styles from './main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <Sidebar />
    </div>
  );
}

export default Main;
