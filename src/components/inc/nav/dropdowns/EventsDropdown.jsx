import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import './events.css'


export default class ServicesDropdown extends React.Component {

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
            title = 'Events'
            onMouseEnter = { this.handleOpen }
            onMouseLeave = { this.handleClose }
            show={ this.state.isOpen }
            noCaret
            id="language-switcher-container"
            style = {{color:'white'}}
          >
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Past Events</NavDropdown.Item>   
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Forthcoming Events</NavDropdown.Item>   
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Sponsorship Opportunity</NavDropdown.Item>   
          </NavDropdown>
        </Nav>
      )
    }
  }

  