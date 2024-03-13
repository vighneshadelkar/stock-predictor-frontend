import React from 'react'
import '../styles/NewsCard.css'

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
          </div>
     )
}

export default NewsCard