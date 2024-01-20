import {axiosInstance} from './axios';
import { createElement, useEffect, useState } from "react";
import NewsList from "./NewsList";

function App() {
  const date = new Date();
  const oneMonthAgoDate = new Date();
  oneMonthAgoDate.setDate(date.getDate() -7);
  const [page, setPage] = useState("1");
  const [keyword, setKeyword] = useState("");
  const [today ,setToday] = useState(date.toISOString().substring(0, 10));
  const [oneMonthAgo , setOneMonthAgo] = useState(oneMonthAgoDate.toISOString().substring(0, 10));
  const [currentPage, setCurrentPage] = useState(1);
  const [articles ,setArticles] = useState([]);
  const sortBy = 'popularity';
  
  useEffect(() => {
    async function fetchData() {
      try {
        const url = `/everything`;
        const response = await axiosInstance.get(url, {
          params: {
            q : keyword,
            from: oneMonthAgo,
            to: today,
            pageSize: 5,
            page: currentPage,
            sortBy: sortBy,
          }
        });
        console.log(response); 
        setArticles((prevArticles) => [...prevArticles, ...response.data.articles]);
      } catch (error) {
        console.error(error);
      }
    }
    if(keyword !== "") {
      fetchData();
    }

    

  }, [keyword, currentPage, today, oneMonthAgo]);
  

  const callback = (entries, observer) => {
    entries.forEach( (entry) => {
      if(entry.isIntersecting) {
        setCurrentPage(currentPage + 1);
        console.log(`is intersecting? ${entry.intersectionRatio}`);
        observer.disconnect();
        console.log(`끝`)
      }
    });
  };

  useEffect(() => {
    const observerEntry = document.getElementById(`article-${articles.length - 2}`);

    if(observerEntry) {
      const observerInstance = new IntersectionObserver(callback, { threshold: 0.2 });
      observerInstance.observe(observerEntry);
    }
  },[articles]);


  
  const OnSubmit = (event) => {
    event.preventDefault();
    
  }
  const HandelKeyword = (event) => {
    setKeyword(event.target.value);
  }
  const HandelDateTo = (event) => {
    setToday(event.target.value);
  }
  const HandelDateFrom = (event) => {
    setOneMonthAgo(event.target.value);
  }
  
  return (
    <div className="App">
      <form onSubmit={OnSubmit}>
        <input type='date'value={oneMonthAgo} onChange={HandelDateFrom}/>
        <input type="date" value={today} onChange={HandelDateTo} />
        <input type="text" onChange={HandelKeyword}/>
        <button>search</button>
      </form>
      <div>
        <NewsList key={articles.index} Articles = {articles} currentPage = {currentPage} />
      </div>
    </div>
  );
}

export default App;
