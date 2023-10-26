import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


// Components
import ImageCard from './components/Image-Card';
import TopBar from './components/Tob-Bar';
import ResultText from './components/Result-Text';
import PageBtns from './components/Page-Btns';

// Api resources
const API_URL = 'https://api.unsplash.com/search/photos'
const apiKey = process.env.REACT_APP_MY_API
const IMAGES_PER_PAGE = 25


// Main App
function App() {
  const [inputValue, setInputValue] = useState('cartoon')
  const [images, setImages] = useState([])
  const [showResultMsg, setshowResultMsg] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)

  
  useEffect(() => {
    setPage(1)
    fetchImages()
  }, [])

  useEffect(() => {
    if(inputValue.length )
    setshowResultMsg(false)
    
  }, [inputValue])

  useEffect(() => {
    fetchImages()
  }, [page])
  

 const fetchImages = async () => {
    try {
      const { data } = await axios.get(`${API_URL}?query=${inputValue}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${apiKey}`)

      const imageResults= data.results;
      setImages(imageResults)

      setTotalPages(data.total_pages)
    } catch (error) {
      console.log(error)
    }
  }

  const searchImage = () => {
    if(inputValue.length > 0) {
      fetchImages(inputValue)
    } else {
      console.log('Please Enter Image');
    }

    if(inputValue !== '') {
      setshowResultMsg(true)
    }
    setPage(1)
  }
  


  return (
    <div className="App">
  
      <TopBar setInputValue={setInputValue} searchImage={searchImage} />

      <ResultText inputValue={inputValue} showResultMsg={showResultMsg} />

      <ImageCard images={images}/>
      
      <PageBtns setPage={setPage} page={page} totalPages={totalPages} />

    </div>
  );
}

export default App;
