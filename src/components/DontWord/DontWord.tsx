import React from 'react'
import styles from './DontWord.module.scss'
type Props = {}

const DontWord = (props: Props) => {
  return (
   <div className="container">
    <div  className={styles.wrapper}>
        <h2 className={styles.title}>No definitions found</h2>
        <p className={styles.subtitle}>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </div>
   </div>
  )
}

export default DontWord