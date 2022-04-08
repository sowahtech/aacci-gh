import React from 'react'
import { Link } from "react-router-dom";
import AboutDropdown from './dropdowns/AboutDropdown'
import MembershipDropdown from './dropdowns/MembershipDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import './menu.css'
import ServicesDropdown from './dropdowns/ServicesDropdown';
import EventsDropdown from './dropdowns/EventsDropdown';
import GalleryDropdown from './dropdowns/GalleryDropdown';

const Menu = () => {
   
  return (
    <div className = 'menu-container'>
      <div className = 'menu-item'>
        <Link to="#" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>Home</Link>
      </div>
      <div className = 'menu-item'>
        <AboutDropdown />
      </div>
      <div className = 'menu-item'>
        <MembershipDropdown />
      </div>
      <div className = 'menu-item'>
        <ServicesDropdown />
      </div>
      <div className = 'menu-item'>
        <EventsDropdown />
      </div>
      <div className = 'menu-item'>
        <Link to="#" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>Articles</Link>
      </div>
      <div className = 'menu-item'>
        <GalleryDropdown />
      </div>
      <div className = 'menu-item'>
        <Link to="#" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>Contact</Link>
      </div>
      <div className = 'menu-item'>
        <FontAwesomeIcon icon={faSearch} style={{marginTop: 5, color:'white'}} />
      </div>

    </div> 
  )
}

export default Menu;

