import React from 'react'
import Navbar from '../inc/nav/Navbar'
import CarouselElement from './carousel/CarouselElement';
import Welcome from './Welcome';
import ServicesOnHome from './ServicesOnHome';
import MissionAndVision from './missionAndVision/MissionAndVision';


const home = () => {
	return (
		<div>
			<Navbar />

			<CarouselElement />

			<Welcome />

			<ServicesOnHome />

			<MissionAndVision />
		</div>
	)
}

export default home

