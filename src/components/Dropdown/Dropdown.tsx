import React, { useEffect } from 'react'
import styles from './Dropdown.module.scss'
interface IDropdown {
  fonts: string[]
  setFont: React.Dispatch<React.SetStateAction<string>>
  font:string
}

const Dropdown = ({fonts,setFont,font}: IDropdown) => {
  
  return (
    <div className={styles.wrapper} onClick={(e)=> e.stopPropagation()}>
        <p  onClick={()=>setFont(fonts[0])} className={font==fonts[0]? styles.title_active: styles.title1}>{fonts[0]}</p>
        <p  onClick={()=>setFont(fonts[1])} className={font==fonts[1]? styles.title_active: styles.title2}>{fonts[1]}</p>
        <p  onClick={()=>setFont(fonts[2])} className={font==fonts[2]? styles.title_active: styles.title3}>{fonts[2]}</p>
    
    </div>
  )
}

export default Dropdown