import Img1 from '../assets/news-1.jpeg'
import Img2 from '../assets/news-2.jpeg'
import Img3 from '../assets/news-3.jpeg'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/News.css';
import NewsCard from '../components/NewsCard';

function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://real-time-finance-data.p.rapidapi.com/stock-news', {
          params: {
            symbol: 'AAPL:NASDAQ',
            language: 'en'
          },
          headers: {
            'X-RapidAPI-Key': '2a23f9fb6cmsh122c6e99b4f6562p1ad6a3jsnff19d315c172',
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
          }
        });
        setNewsData(response.data.data.news);
        console.log(newsData)
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);


  function formatDate(dateTimeString) {
    const date = new Date(dateTimeString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata' // Set the time zone to IST
    };
    return date.toLocaleString('en-IN', options);
  }
  

  return (
    <div className="main-news-cont">
      <div className="newsContainer">
        <div className="center-news-grid">
          <div className="left-news">
          <div className="news-text-l">This is the first news about Stocks</div>
          </div>
          <div className="right-news">
          <div className="right-news-1">
             <div className="news-text-r">This is the first news about Stocks</div>
           </div>
           <div className="right-news-2">
             <div className="news-text-r">This is the first news about Stocks</div>
           </div>
          </div>
        </div>
        <div className="heading">
          <h1 className="headinhead">News</h1>
        </div>
        <div className="news-cards-grid">
          {newsData.map((newsItem, index) => (
            <NewsCard
              key={index}
              img={newsItem.article_photo_url}
              headline={newsItem.article_title}
              date={formatDate(newsItem.post_time_utc)}
              cont={newsItem.source}
              link={newsItem.article_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
