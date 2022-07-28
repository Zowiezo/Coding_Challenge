import React from 'react'
import './styles.css'

function Header( { black } ) {

  return (
    <header className={black ? 'black' : ''}>
        <div className="header--logo">
          <a href="/">
            <img alt="Netflix" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" />
          </a>  
          <div>
            Zowie streaming
          </div>
        </div>
    </header>
  )
}

export default Header