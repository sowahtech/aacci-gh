import React from 'react'
import './mandv.css'

const MissionAndVision = () => {

  return (
    <div className='missionAndVisionContainer' style={{display: 'flex', justifyContenct: 'center', alignItems: 'center', flexDirection: 'row'}}>
      <div className="objective-div" style={{width: '33.3%', height: '50vh', backgroundColor: '#35393d', color: 'white', padding: '2vw 3vw'}}>
          <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: 22}}>Objective</p>
          <p>
            To facilitate advocacy, dialogue and exchange of information between Members and the Member 
            countries’ government officials and agencies in order to improve the business climate in the 
            region, and to promote Asian business interests in Africa;
          </p>
          <button className='Button'>READ MORE</button>
      </div>
      <div className="missionAndVision-div" style={{width: '33.3%', height: '50vh', backgroundColor: '#c4480a', color: 'white', padding: '2vw 3vw'}}>
          <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: 22}}>Mission and Vision</p>
          <p>To be recognised as an essential driving force for international business between Asian and 
             African organisations.
          </p>
          <p>
            AACCI advocates on behalf of the private sector of the Asian-African region for:
          </p>
          <button className='Button1'>READ MORE</button>
      </div>
      <div className="membership-div" style={{width: '33.3%', height: '50vh', backgroundColor: '#35393d', color: 'white', padding: '2vw 3vw'}}>
          <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: 22}}>Membership</p>
          <p>
            AACCI represents the engagement of more than 100 Countries, Corporates, Associations and 
            Individual Professionals from all over the Asian-African region, encompassing all sectors of 
            multi-lateral trade…
          </p>
          <button className='Button'>READ MORE</button>
      </div>
    </div>
  )
}

export default MissionAndVision

