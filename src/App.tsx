import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Main from './components/Main/Main'
import { IWord } from './interface/interface'
import DontWord from './components/DontWord/DontWord'
import { MoonLoader } from 'react-spinners'


function App() {
  const [data, setData]= useState<IWord[]>([])
  const [error, setError]= useState(false)
  const [loading, setLoading] = useState(false)
  const getWord= async (word:string)=> {
    setData([])
    setError(false)
    try {
      setLoading(true)
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      if (!response.ok) {
        setLoading(false)
        setError(true)
      }
      const data = await response.json();
      setData(data)
      setLoading(false)
      
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  return (
   <>
   <Header/>
   <Search  getWord={getWord}/>
   {loading && <MoonLoader color="#a445ed" className='loader' />}
   {data.length ?  <Main data={data[0]} getWord={getWord}/> : ''}
    {!error && data.length==0 && !loading ? <div className='please_text'>Please write word</div> :''}
   {error&& <DontWord/>}
   </>
  )
}

export default App
