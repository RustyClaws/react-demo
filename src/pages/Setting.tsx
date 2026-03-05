import { useNavigate } from 'react-router-dom'
import React from 'react'
import './c1.css'
// import {cn} from "./utils"



const Setting: React.FC = () => {

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
          <img src="/public/OIP-C.webp" className='img_round' onClick={go_home}></img>
          {/* click the img go to the homepage */}
          <h4 onClick={go_setting} className='h-bar'>Setting</h4>
          <h4 onClick={go_contact} className='h-bar'>Contact</h4>

        </div>

        <div className='contentBox'> Awaiting updates</div>


      </div>      



    
      );
    
    };


    export default Setting;