import React from 'react'
import '../styles/News.css'
import Img1 from '../assets/news-1.jpeg'
import Img2 from '../assets/news-2.jpeg'
import Img3 from '../assets/news-3.jpeg'

function News() {
  return (
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
    </div>
  )
}

export default News