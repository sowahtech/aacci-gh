import React from 'react'
import Select from 'react-select'
import { Link } from "react-router-dom";
import './navbar.css'
import Menu from './Menu'
// import nav from './Nav2';
 



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
		<div className='nav-container'>
			{/* nav nav-top starts from here */}
			<div className='top-nav'>

				{/* logo starts here */}
					<Link to="/">
						<div className="logo">
							<img src={require('../../../assets/images/aacci-logo.jpeg')} alt='site logo' />
						</div>
					</Link>
				{/* logo ends here */}

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
			<div className='menu-section'>
				<Menu />
			</div>
			{/* menu ends here */}
		</div>
	)
}

export default nav
