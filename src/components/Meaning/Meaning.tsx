import React from 'react'
import styles from './Meaning.module.scss'
import { IMeanings } from '../../interface/interface'
interface IMeaning {
    item: IMeanings
    getWord: (word: string) => Promise<void>
}

const Meaning = ({item,getWord}:IMeaning) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title_wrapper}>
            <div className={styles.title} >
                {item.partOfSpeech}
            </div>
            <div className={styles.border}> </div>
        </div>
        <div className={styles.meaning_wrapper}>
            <p className={styles.meaning}>Meaning</p>
            <ul className={styles.list}>
                {item.definitions.map((item,index)=> {
                    return <li key={index}>{item.definition}</li>
                })}
            </ul>
        </div>
       {item.synonyms.length?  <div className={styles.synonims_wrapper}>
            <p className={styles.synonims}>Synonyms</p>
            <div className={styles.word_wrapper}>
              {item.synonyms.map((item,index)=> {
                return  <div key={index} className={styles.word} onClick={()=>getWord(item)}>{item}</div>
                
              })}
            </div>
        </div>:''}
        {item.antonyms.length ? <div className={styles.synonims_wrapper}>
            <p className={styles.synonims}>Antonyms</p>
            <div className={styles.word_wrapper}>
              {item.antonyms.map((item,index)=> {
                return  <p key={index} className={styles.word} onClick={()=>getWord(item)}>{item}</p>
                
              })}
            </div>
        </div>:''}
        
    </div>
  )
}

export default Meaning