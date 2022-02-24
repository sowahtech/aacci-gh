import React from 'react'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/home/Home'
import About from './components/about/AboutUs'
import Membership from './components/membership/Membership'
import Services from './components/services/Services'
import Events from './components/events/Events'
import Articles from './components/articles/Articles'
import Gallery from './components/gallery/Gallery'
import Contact from './components/contact/ContactUs'



const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={ <Home/> } />
				<Route path="about" element={ <About/> } />
				<Route path="membership" element={ <Membership/> } />
				<Route path="services" element={ <Services/> } />
				<Route path="events" element={ <Events/> } />
				<Route path="articles" element={ <Articles/> } />
				<Route path="gallery" element={ <Gallery/> } />
				<Route path="contact" element={ <Contact/> } />
      		</Routes>
		</div>
	)
}

export default App
