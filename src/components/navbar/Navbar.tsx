import React from "react"
import { useState } from "react"
import LogoutIcon from '@mui/icons-material/Logout';

import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";

export default function Navbar() {

    const [navBlack, setNavBlack] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
  
    const transitionNav = () => {
      window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
    }
  
    useState(() => {
        document.addEventListener("scroll", transitionNav)
      })
    
      const handleClick = () => {
        console.log(toggleMenu)
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
      }

return (

<div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent"} ${toggleMenu && "show"}`}>
    <button className="nav__burger" onClick={handleClick}>
        <MenuIcon />
    </button>
    <img src="./images/logo.png" className="nav__logo" alt="Netflix" />
    <nav className="nav__links">
        <Link to={'/homepage'}>     
        <a href="/homepage" className="nav__link">
            Accueil
        </a>
        </Link>
        <Link to={'/series'}>     
        <a href="/" className="nav__link">
            Séries
        </a>
        </Link>
        <Link to={'/homepage'}>     
        <a href="/" className="nav__link">
            Films
        </a>
        </Link>

    </nav>
    <div className="nav__actions">
        <a href="/" className="nav__action">
            <SearchIcon />
        </a>
        <a href="/" className="nav__action">
            <CardGiftcardIcon />
        </a>
        <a href="/" className="nav__action">
            <NotificationsIcon />
        </a>
        <a href="/" className="nav__action">
            <img src="./images/avatar.jpg" alt="" />
        </a>
        <a href="/" className="nav__action">
            <LogoutIcon />
        </a>
    </div>
</div>
)
}