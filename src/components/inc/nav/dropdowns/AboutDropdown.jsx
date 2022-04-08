import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
// import MenuItem from 'react-bootstrap/MenuItem'
import { Link } from "react-router-dom";
import './about.css'


export default class AboutDropdown extends React.Component {

    constructor(props) {
      super(props)
      this.state = { isOpen: false }
    }
  
    handleOpen = () => {
      this.setState({ isOpen: true })
    }
  
    handleClose = () => {
       this.setState({ isOpen: false })
    }
  
    render() {
      return (
         <Nav>
          <NavDropdown
            title = 'About Us'
            onMouseEnter = { this.handleOpen }
            onMouseLeave = { this.handleClose }
            show={ this.state.isOpen }
            noCaret
            id="language-switcher-container"
            style = {{color:'white'}}
          >
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Background</NavDropdown.Item>   
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Message from the Ghana Chapter President</NavDropdown.Item>   
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Mission and Vision</NavDropdown.Item>   
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">The people</NavDropdown.Item>   
            
          </NavDropdown>
        </Nav>
      )
    }
  }

  