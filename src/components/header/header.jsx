import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <nav className={styles.header}>
      <input type="text" placeholder="Enter the keywords" />
      <button>Search</button>
    </nav>
  );
}

export default Header;
