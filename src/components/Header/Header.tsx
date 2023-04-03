import styles from './Header.module.scss'
import logo from '../../assets/logo.svg'
import arrow from '../../assets/icon-arrow-down.svg'
import Dropdown from '../Dropdown/Dropdown'
import { useEffect, useState } from 'react'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
type Props = {}
const fonts = ['Serif', 'Sans-Serif', 'Mono']
const Header = (props: Props) => {
    const [openDropdown, setOpenDropdown] =useState(false)
    const [font,setFont]= useState(fonts[0])
    useEffect(()=> {
        document.body.addEventListener('click',()=> {
            setOpenDropdown(false)
        })
        return (
            document.body.removeEventListener('click',()=> {
                setOpenDropdown(false)
            })
        )
    },[])

    useEffect(()=> {
       if(font=='Sans-Serif'){
        document.body.style.fontFamily="Inconsolata,sans-serif";
       }
       if(font=='Serif'){
        document.body.style.fontFamily="Inter,serif";
       }
       if(font=='Mono'){
        document.body.style.fontFamily="Lora,monospase";
       }
       
    },[font])

    const handleOpen= (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=> {
        e.stopPropagation()
        setOpenDropdown(!openDropdown)
    }
  return (
   <>
    <header>
        <div className="container">
            <div className={styles.wrapper}>
                <img src={logo} alt="logo" />
                <div className={styles.first}>
                    <div className={styles.dropdown} onClick={handleOpen}>
                        <p className={styles.title}>{font}</p>
                        <img src={arrow} alt="arrow" className={!openDropdown? styles.arrow: styles.arrowDown} />
                         {openDropdown && <Dropdown fonts={fonts} setFont={setFont} font={font}/>}
                    </div>
                    <span className={styles.divider}></span>
                    <ThemeSwitcher/>
                </div>
            </div>
        </div>
    </header>
    
   </>
  )
}

export default Header