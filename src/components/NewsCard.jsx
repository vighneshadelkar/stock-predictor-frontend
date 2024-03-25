import React from 'react'
import '../styles/NewsCard.css'
import { Link } from 'react-router-dom';

function NewsCard(props) {
     return (
          <div className="news-card">
               <div className="news-img">
                    <img src={props.img} alt="news-img" />
               </div>
               <div className="news-date">
                    {props.date}
               </div>
               <div className="news-headline">{props.headline}</div>
               <div className="news-cont">{props.cont}</div>
               <Link to={props.link}>Read More</Link>
          </div>
     )
}

export default NewsCard