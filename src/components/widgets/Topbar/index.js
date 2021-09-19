import React from 'react'
import { NavLink } from 'react-router-dom'

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
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Topbar
