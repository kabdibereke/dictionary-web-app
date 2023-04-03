import React, { useEffect, useRef, useState } from 'react'
import styles from './Main.module.scss'
import playIcon from '../../assets/icon-play.svg'
import Meaning from '../Meaning/Meaning'
import { IWord } from '../../interface/interface'
import { getAudioUrl, getPhonetic } from '../../helpers/helpers'
interface IMain {
    data: IWord
    getWord: (word: string) => Promise<void>
}

const Main = ({data,getWord}: IMain) => {
    const audio = useRef<HTMLAudioElement | null>();
    const text= getPhonetic(data)
    const audioString = getAudioUrl(data)
    const play = () => {
        if (audio.current == null || audio.current.src !== audioString) {
        audio.current = new Audio(audioString!);
        }

        audio.current.play();
    };
   
  return (
    <section >
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.word_info}>
                    <div className={styles.text__wrapper}>
                        <h1 className={styles.title}>{data.word}</h1>
                        <p className={styles.pronounce}>{text}</p>
                    </div>
                    {audioString && <div className={styles.audio} onClick={play}>
                                <img src={playIcon} alt="play" />
                    </div>}
                </div>
                {data.meanings.map((item,index)=> {
                    return  <Meaning key={index} item={item} getWord={getWord}/>
                })}
            </div>
            {data.sourceUrls.length ? <>
                <div className={styles.divider}>
                 
                </div>
                <div className={styles.source_wrapper}>
                    <p className={styles.source_title}>Source</p>
                    <a href={data.sourceUrls[0]} className={styles.link}>{data.sourceUrls[0]}</a>
                </div>
            </>:''}
        </div>
       
    </section>
  )
}

export default Main