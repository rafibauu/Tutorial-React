import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import styles from './topbar.module.css'

const Topbar = () => {
  return (
    <nav className={styles.topbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>React App</h3>
        </div>
        <div className={styles.menu}>
          <ul className={styles["menu-list"]}>
            <li>
              <Link to="/" className={styles["menu-item-link"]}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles["menu-item-link"]}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Topbar