import React from 'react'
import './Header.css'
import ExploreMenu from '../ExploreMenu/ExploreMenu.jsx'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>"Craving? We've Got You Covered – Hot, Fresh, Fast!" </p>
            <button onClick={<ExploreMenu/>}>View Menu</button>
        </div>
    </div>
  )
}

export default Header