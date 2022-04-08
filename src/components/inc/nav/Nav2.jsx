import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "react-router-dom";
import './nav.css'
import Select from 'react-select'


const nav = () => {

	const countries = [
		{
			value: 'eng', 
			label: <div>
				<img
					src={require('../../../assets/images/aacci-gh-pix16.jpeg')}
					alt='flag for english language'
					style={{ width: 25, height: 18, marginTop: -4, marginRight: 1 }}
				/>
				<span style={{ marginLeft: 7, marginRight: 29, fontSize: 20 }}>
					English
				</span>
			</div>
		},
		{
			value: 'arab',
			label: <div>
				<img
					src={require('../../../assets/images/aacci-gh-pix17.jpeg')}
					alt='flag for arabic'
					style={{ width: 25, height: 18, marginTop: -4, marginRight: 1, }}
				/>
				<span style={{ marginLeft: 7, marginRight: 35, fontSize: 20 }}>
					Arab 
				</span>&nbsp;&nbsp;&nbsp;
			</div>
		},
		{
			value: 'fra',
			label: <div>
				<img
					src={require('../../../assets/images/aacci-gh-pix18.jpeg')}
					alt='flag for french'
					style={{ width: 25, height: 18, marginTop: -4, marginRight: 1 }}
				/>
				<span style={{ marginLeft: 7, marginRight: 30, fontSize: 20 }}>
					French
				</span>
			</div>
		}

	]

  	return (
      	<Navbar className = 'justify-content-center' collapseOnSelect expand="lg" bg="white" variant="light">
			<Container className = 'whole-nav'>
				<div className='top-nav'>
					<div className = 'logo-div'>
						<Navbar.Brand href="#home">
							{/* logo starts here */}
							<Link to="/">
								<div className="logo">
									<img src={require('../../../assets/images/aacci-logo.jpeg')} alt='site logo' />
								</div>
							</Link>
							{/* logo ends here */}
						</Navbar.Brand>
					</div>
					{/* nav right starts here */}
					<div className="top-nav-right">
						<div className="top-asia-contact"></div>
						<div className="asia-contact">
							<h6>Asian Region</h6>
							<p>+91-909-999-3461</p>
						</div>

						<div className='languages ghana-contact'>
							{/* languages combo box starts here */}
							<div className="languages-container">
								<Select
									options={countries}
									styles={{ }}
									defaultValue={countries[0]}
								/>
								{/* languages combo box ends here */}
							</div>
							<div className="ghana-contact">
								<h6>Ghanaian Region</h6>
								<p>+233-50-941-7025</p>
							</div>
						</div>
						{/* top nav right section  ends here */}
					</div>
					{/* nav right ends here */}
				</div>
				{/* nav-top ends here */}

				{/* menu starts from here */}
				<div className = 'menu-section'>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#features">Home</Nav.Link>
							<NavDropdown title="About Us" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Background</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Message from Ghana President</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Mission and Vision</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">The People</NavDropdown.Item>	
							</NavDropdown>

							<NavDropdown title="Membership" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Join AACCI</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">12 Reasons to Join</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Industries</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Membership Fees</NavDropdown.Item>	
								<NavDropdown.Item href="#action/3.3">Members</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title="Services" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Certificate of Origin</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Trade Facilitation Services</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Government representation</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Business Networking Services</NavDropdown.Item>	
								<NavDropdown.Item href="#action/3.3">Trade Mission, Fairs and Exibition Services</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Consultancy Services</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title="Events" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Past Events</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Forthcoming Events</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Sponsorship Opportunity</NavDropdown.Item>	
							</NavDropdown>

							<Nav.Link href="#pricing">Articles</Nav.Link>

							<NavDropdown title="Gallery" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Photo Gallery</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Video Gallery</NavDropdown.Item>	
							</NavDropdown>
							
							<Nav.Link href="#pricing">Contact</Nav.Link>
						</Nav>
						{/* <Nav>
							<Nav.Link href="#deets">More deets</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								Dank memes
							</Nav.Link>
						</Nav> */}
					</Navbar.Collapse> 
				</div>
			</Container>
		</Navbar>
	)
}

export default nav
