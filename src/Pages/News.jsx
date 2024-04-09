import Img1 from '../assets/news-1.jpeg'
import Img2 from '../assets/news-2.jpeg'
import Img3 from '../assets/news-3.jpeg'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/News.css';
import NewsCard from '../components/NewsCard';
import { Link } from 'react-router-dom';

function News() {
  const [newsData, setNewsData] = useState([]);
  const [gridNewsData, setgridNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://real-time-finance-data.p.rapidapi.com/stock-news', {
          params: {
            symbol: 'AAPL:NASDAQ',
            language: 'en'
          },
          headers: {
            'X-RapidAPI-Key': '35646dbea5msh47cc576bae2f2c1p1c6c65jsn053d747717e2',
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
          }
        });
        const fetchedNews = response.data.data.news;
        const firstThreeNews = fetchedNews.slice(0, 3);
        setgridNewsData(firstThreeNews);
        setNewsData(fetchedNews.slice(3));

      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
    console.log(gridNewsData)
    console.log(newsData)
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
      timeZone: 'Asia/Kolkata' 
    };
    return date.toLocaleString('en-IN', options);
  }


  return (
    <div className="main-news-cont">
      <div className="newsContainer">
        {gridNewsData.length > 1 &&
          <div className="center-news-grid">
            <div className="left-news" style={{ backgroundImage: `url(${gridNewsData[0].article_photo_url})` }}>
              <Link to={gridNewsData[0].article_url}>
                <div className="news-text-l">
                  {gridNewsData[0].article_title}
                </div>

              </Link>
            </div>
            <div className="right-news">
              <div className="right-news-1" style={{ backgroundImage: `url(${gridNewsData[1].article_photo_url})` }}>
              <Link to={gridNewsData[1].article_url}>
                <div className="news-text-r">
                  {gridNewsData[1].article_title}
                </div>

              </Link>
              </div>
              <div className="right-news-2"  style={{ backgroundImage: `url(${gridNewsData[2].article_photo_url})` }}>
              <Link to={gridNewsData[2].article_url}>
                <div className="news-text-r">
                  {gridNewsData[2].article_title}
                </div>

              </Link>
              </div>
            </div>
          </div>}
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
