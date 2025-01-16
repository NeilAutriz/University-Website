import React from 'react'
import '../Header/Header.css'
import darkArrow from '../../assets/dark-arrow.png'

const Header = () => {
  return (
    <div className="header-container" id='home'>
        <h1>We ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <div className="button-head">
            <button className='explore-button'>
                Explore More
                <img src={darkArrow} className='dark-arrow-icon'/>
            </button>
        </div>
    </div>
    )
}

export default Header
