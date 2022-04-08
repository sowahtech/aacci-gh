import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import './services.css'


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
            title = 'Services'
            onMouseEnter = { this.handleOpen }
            onMouseLeave = { this.handleClose }
            show={ this.state.isOpen }
            noCaret
            id="language-switcher-container"
            style = {{color:'white'}}
          >
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Certificate of Origin</NavDropdown.Item>   
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Trade Facilitation Services</NavDropdown.Item>   
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Government Representation</NavDropdown.Item>   
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Business Networking Services</NavDropdown.Item>   
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Trade Mission, Fairs and Exibition Services</NavDropdown.Item>
            <NavDropdown.Item className = 'dropdown-item' eventKey="4.1">Consultancy Services</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      )
    }
  }

  