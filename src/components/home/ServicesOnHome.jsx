import React from 'react'
import './servicesOnHome.css'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as LightBulb } from '../../assets/images/lightbulb-solid.svg'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import FlagIcon from '@mui/icons-material/Flag';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import GroupsIcon from '@mui/icons-material/Groups';


const ServicesOnHome = () => {
  return (
    <div >
        <p style={{textAlign: 'center', color: '#3c423e', fontSize: 30, fontWeight: 'bolder', fontType: 'Comfortaa, cursive'}}>Services</p>
        <div className='seperator-div'>
            <div style={{width:30, height:1, backgroundColor:'orange', marginRight: 9}}/>
            <div style={{width:12, height:12, backgroundColor: 'orange', borderRadius: 6, display:'flex', justifyContenct: 'center', alignItems: 'center', paddingLeft: 4}}>
                <div style={{width: 4, height: 4, backgroundColor: 'white', borderRadius: 2}}>
                
                </div>
            </div>
            <div style={{width:30, height:1, backgroundColor:'orange', marginLeft: 9}}/>
           
        </div>
        <div className='icon-set-one' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '7vh 7vw'}}>
            <div style={{display:'flex', flexDirection: 'row'}}>
                <div style={{width:50, height:50, backgroundColor:'orange', borderRadius: 25}}>
                    <FontAwesomeIcon icon={faCheck} style={{color: 'white', fontSize: 32, marginLeft: 10, marginTop: 9, fontWeight: 'bolder'}}/>
                </div>
                <p style={{textAlign: 'center', color: '#3c423e', fontSize: 20, marginLeft: 10, fontWeight: 'bold'}}>Certificate of Origin</p>
            </div>
            <div style={{display:'flex', flexDirection: 'row'}}>
                <div style={{width:50, height:50, backgroundColor:'orange', borderRadius: 25}}>
                    {/* <img src={LightBulb} alt ='light bulb' fill='white' /> */}
                    <LightBulb fill = 'white' style= {{transform:"scale(0.4)", marginTop: -6}} />
                </div>
                <p style={{textAlign: 'center', color: '#3c423e', fontSize: 20, marginLeft: 10, fontWeight: 'bold'}}>Trade Facilitation Services</p>
            </div>
            <div style={{display:'flex', flexDirection: 'row'}}>
                <div style={{width:50, height:50, backgroundColor:'orange', borderRadius: 25}}>
                    <AssuredWorkloadIcon style={{color: 'white', fontSize: 32, marginLeft: 10, marginTop: 9, fontWeight: 'bolder'}}/>
                </div>
                <p style={{textAlign: 'center', color: '#3c423e', fontSize: 20, marginLeft: 10, fontWeight: 'bold'}}>Government Representation</p>
            </div>
            
        </div>

        <div className='icon-set-two' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: '7vh 7vw'}}>
            <div style={{display:'flex', flexDirection: 'row', marginTop: -24, marginLeft: -58}}>
                <div style={{width:50, height:50, backgroundColor:'orange', borderRadius: 25}}>
                    <FlagIcon style={{color: 'white', fontSize: 32, marginLeft: 10, marginTop: 9, fontWeight: 'bolder'}}/>
                </div>
                <p style={{textAlign: 'center', color: '#3c423e', fontSize: 20, marginLeft: 10, fontWeight: 'bold'}}>Business Networking Services</p>
            </div>
            <div style={{display:'flex', flexDirection: 'row', marginLeft: -73}}>
                <div style={{width:50, height:50, backgroundColor:'orange', borderRadius: 25}}>
                    {/* <img src={LightBulb} alt ='light bulb' fill='white' /> */}
                    <EnergySavingsLeafIcon style={{color: 'white', fontSize: 32, marginLeft: 10, marginTop: 9, fontWeight: 'bolder'}} />
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p style={{color: '#3c423e', fontSize: 20, marginLeft: 10, fontWeight: 'bold'}}>Trade Mission, Fares &amp; Exibition</p>
                    <p style={{color: '#3c423e', fontSize: 20, fontWeight: 'bold', marginTop: -20, marginLeft: 10 }}>Services</p>
                </div>
                
            </div>
            <div style={{display:'flex', flexDirection: 'row', marginTop: -35, marginLeft: -33}}>
                <div style={{width:50, height:50, backgroundColor:'orange', borderRadius: 25}}>
                    <GroupsIcon style={{color: 'white', fontSize: 32, marginLeft: 10, marginTop: 9, fontWeight: 'bolder'}}/>
                </div>
                <p style={{color: '#3c423e', fontSize: 20, marginLeft: 10, fontWeight: 'bold'}}>Consultancy Services</p>
            </div>
            
        </div>
        
        
    </div>
  )
}

export default ServicesOnHome
