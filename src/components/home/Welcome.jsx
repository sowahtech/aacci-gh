import React from 'react'
import './welcome.css'

const Welcome = () => {
  return (
    <div className='welc'>
      <p>
		  <span style={{fontFamily: 'Comfortaa, cursive', fontSize: 30, fontWeight: 'bolder', color: '#3c423e'}}>Welcome To</span>&nbsp;&nbsp;
		  <span style={{fontSize: 32, fontWeight: 'bolder', color:'orange'}}>AACCI!</span>
	  </p>
	  <p style={{color: '#696564'}}>
			Asian-African Chamber of Commerce & Industry (AACCI), Foundation is registered in the state of 
			Delaware, USA as a private, non-stock corporation to act as a trade & business promoting chamber 
			supporting SMEs and industries by means of representing them as bilateral chamber for the Asian 
			and African region and help them to build better economic growth and sustainable business. 
			This corporation is organized exclusively for charitable, religious or educational purposes 
			within the meaning of section 501 (c) (3) of the Internal Revenue Code.
	  </p>
	  <div className="services-div">
		    <img src = {require('../../assets/images/aacci-gh-office.jpg')} width={540} height={400}  style={{float:'left', marginRight: 20}} alt = 'ghana office'/>
				<p style={{marginBottom: 21, textAlign:'justify', color: '#696564'}}>
					The chamber was earlier founded in 2015 by CIHF (Confederation of International Healthcare 
					Foundation), established and registered under B.P.T. Act XXIX of 1950, Government of India, 
					Since 2005, by the presidents/representatives of various Commerce Chambers and professionals 
					of high repute from the entire Asian-African region with a view to giving the business 
					community of both this region a voice and a tool to foster development and realize UN 
					Sustainable Development Goals 2030.
				</p>

				<p style={{marginBottom: 21, textAlign:'justify', color: '#696564'}}>
					To translate that vision into reality, the founding members of AACCI set to create 
					transnational corporations, which would have presence in all associated member countries and 
					whose capital would be built by nationals of all 102 prospective member countries. 
					AACCI is now developed as a transnational chamber working in conjunction and affiliation 
					with other National & Regional Chamber partners dedicated to spreading the support for trade, 
					business & investment.
				</p>
		 		
				<p style={{textAlign:'justify', color: '#696564'}}>
					Asian African Chamber of Commerce & Industry Foundation is registered under Section 8 of 
					Companies Act. 2013, Govt of India as non-profit organisation as a Global Secretariat Hub.
				</p>
	  </div>
    </div>
  )
}

export default Welcome
