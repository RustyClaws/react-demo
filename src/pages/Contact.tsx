import { useNavigate } from 'react-router-dom'
import React from 'react'
import './c1.css'
import git from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import image from '../assets/react.svg'
// import {cn} from "./utils"



const Contact: React.FC = () => {

    const navigate = useNavigate();
  
    const go_home = () => {
      navigate('/');
    };
    const go_about = () => {
      navigate('/About');
    };
    const go_dashboard = () => {
      navigate('/Dashboard');
    };
    const go_setting = () => {
      navigate('/Setting');
    };
    const go_contact = () => {
      navigate('/Contact');
    };

    return (

      <div className='page-container' >

              <div className='nav'>
          <h4 onClick={go_about} className='h-bar'>About</h4>
          <h4 onClick={go_dashboard} className='h-bar'>Dashboard</h4>
          <img src={image} className='img_round' onClick={go_home}></img>
          {/* click the img go to the homepage */}
          <h4 onClick={go_setting} className='h-bar'>Extra page</h4>
          <h4 onClick={go_contact} className='h-bar'>Contact</h4>

        </div>

        <div className='contentBox'> 
          <div className='about'>
            <div style={{fontSize : '28px'}}> About </div>
            <div style={{fontSize : '17px'}}> I am Nicole, A web developer. Also can do data processing and data scraping. </div>
            <div style={{display: 'inline-block'}}>
              <div>
                <img src={git} style={{width: '30px', marginRight: '6px', marginTop: '6px'}}></img>
                <a href='https://github.com/RustyClaws'>Github @rustyclaws</a>
              </div>

              <div>
                <img src={linkedin} style={{width: '30px', marginRight: '6px', marginTop: '6px'}}></img>
                <a href='www.linkedin.com/in/zoe-nicole-8b84a62b9'>Linkedin @ZoeNicole</a>
              </div>

            </div>
          </div>

        
        </div>



      </div>      



    
      );
    
    };


    export default Contact;