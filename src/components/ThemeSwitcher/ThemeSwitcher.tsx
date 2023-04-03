import { useEffect, useState } from "react"
import  moon   from "../../assets/icon-moon.svg"

import styles from './ThemeSwitcher.module.scss'



const ThemeSwitcher = () => {
    //@ts-ignore
    const [isDark, setIsDark] =useState(false)
    const themeIcon = isDark? 'light': 'dark'
   
    useEffect(()=> {
      if(localStorage.getItem('theme')===null) {
        localStorage.setItem('theme', JSON.stringify(isDark))
      }
      if(localStorage.getItem('theme')!==null) {
        //@ts-ignore
        setIsDark(JSON.parse(localStorage.getItem('theme')))
      }
    },[])

    useEffect(()=> {
        document.body.setAttribute('data-theme' , isDark? 'light': 'dark')
    }, [isDark])

    const themeSwitcher =()=> {
      setIsDark(!isDark)
      localStorage.setItem('theme', JSON.stringify(!isDark))
    }
  return (
    <div className={styles.toggle} >
         <button
        className={styles.toggleButton}
        data-active-theme={themeIcon}
        
        onClick={themeSwitcher}
        ></button>
          <img src={moon} alt="dsf" />
       
    </div>
  )
}

export default ThemeSwitcher