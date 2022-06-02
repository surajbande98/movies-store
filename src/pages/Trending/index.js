import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent';

import Pagination from '../../components/Pagination';

import "./index.css";

const Trending = () => {

  const [content, setContent] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scroll(0, 0);
    const fetchTrending = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=84f0af452a32db35bc96d30668b86d61&page=${page}`
      );
  
      console.log(data.results)
      setContent(data.results);
    };
    fetchTrending();
  }, [page]);

  

  return (
    <div>
      <span className='pageTitle'>Trending</span>
      
      <div className='trending'>
        {content && content.map((c) => (
          <SingleContent key={c.id} content={c} />
          ))}
      </div>

      <Pagination setPage={setPage}/>

    </div>
  )
}

export default Trending