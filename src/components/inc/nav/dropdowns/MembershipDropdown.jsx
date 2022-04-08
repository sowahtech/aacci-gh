import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
// import MenuItem from 'react-bootstrap/MenuItem'
import { Link } from "react-router-dom";
import './about.css'


export default class MembershipDropdown extends React.Component {

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
            title = 'Membership'
            onMouseEnter = { this.handleOpen }
            onMouseLeave = { this.handleClose }
            show={ this.state.isOpen }
            noCaret
            id="language-switcher-container"
            style = {{color:'white'}}
          >
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Join AACCI</NavDropdown.Item>   
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">12 Reasons to Join</NavDropdown.Item>   
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Industries</NavDropdown.Item>   
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Membership Fees</NavDropdown.Item>   
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Members</NavDropdown.Item>   
            
          </NavDropdown>
        </Nav>
      )
    }
  }

  