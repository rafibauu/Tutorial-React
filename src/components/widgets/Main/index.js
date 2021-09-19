import React from 'react'

import styles from './main.module.css'

const Main = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {children}
      </div>
    </main>
  )
}

export default Main
