import React from 'react'
import '../styles/News.css'
import Img1 from '../assets/news-1.jpeg'
import Img2 from '../assets/news-2.jpeg'
import Img3 from '../assets/news-3.jpeg'
import NewsCard from '../components/NewsCard'

function News() {
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
        <NewsCard img={Img1} headline="This is a news." date="March 10 2012" cont="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem laborum minus aut commodi magni ex consectetur numquam corporis expedita pariatur."/>
        <NewsCard img={Img1} headline="This is a news." date="March 10 2012" cont="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem laborum minus aut commodi magni ex consectetur numquam corporis expedita pariatur."/>
        <NewsCard img={Img1} headline="This is a news." date="March 10 2012" cont="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem laborum minus aut commodi magni ex consectetur numquam corporis expedita pariatur."/>
        <NewsCard img={Img1} headline="This is a news." date="March 10 2012" cont="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem laborum minus aut commodi magni ex consectetur numquam corporis expedita pariatur."/>
        
      </div>
    </div>
    </div>
  )
}

export default News