import styles from './Search.module.scss'
import searchIcon from '../../assets/icon-search.svg'
import { useState } from 'react'
interface ISearch {
  getWord: (word: string) => Promise<void>
}

const Search = ({getWord}: ISearch) => {
  const [word, setWord] = useState('')
  const [wordError, setWordError] =useState(false)
  const handleSumbit =( e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()
    if(word) {
      getWord(word)
    }else {
      setWordError(true)
    }
    setWord('')
  }

  const handleChange= (e: React.ChangeEvent<HTMLInputElement>)=> {
    setWord(e.target.value)
    setWordError(false)
  }
  return (
   <div className="container">
        <form className={styles.wrapper} onSubmit={handleSumbit}>
            <input type="text"  className={styles.input} value={word} onChange={handleChange}/>
            {wordError&& <p className={styles.error}>Dont be empty </p>}
            <button type='submit' className={styles.btn} >
                <img src={searchIcon} alt="searchIcon"   />
            </button>
        </form>
        
   </div>
  )
}

export default Search