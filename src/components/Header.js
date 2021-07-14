import React from 'react'
import '../styles/header.scss'
import logo from '../assets/logo.png'

function Header() {
    return (
        <div>
        <header>
            <img src={logo} alt="logo"  />
            <h2>VaxiFinder</h2>
        </header>
      
        </div>
    )
}

export default Header
