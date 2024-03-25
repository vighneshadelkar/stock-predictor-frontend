import React from 'react'
import '../styles/MainHome.css'
import mainImg from '../assets/12463623_4976424.jpg'
import { Link } from 'react-router-dom'

function MainHome() {
     return (
          <div className="main-cont">
               <div className="content main-cont-child">
                    <h1 className="main-heading">
                         Discover the power of Stock Analysis
                    </h1>
                    <h3 className="main-sub-head">
                         SafeStocks is the ultimate platform for discussing stock analysis and making informed investment decisions. Join our communinty today!
                    </h3>
                    <Link to="/stocks">
                         <button className="button-9" role="button">All Stocks</button>
                    </Link>
               </div>
               <div className="main-img-cont main-cont-child">
                    <img className="main-img" src={mainImg} alt="stocks image" />

               </div>
          </div>
     )
}

export default MainHome