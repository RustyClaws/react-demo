import { useNavigate } from 'react-router-dom'
import React from 'react'
import './c1.css'
import Coding from '../assets/Coding.svg'
// import {cn} from "./utils"



const About: React.FC = () => {

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

        <div className='contentBox'> 
        <div className='inlineflex'>
          <img src={Coding} className='picture'></img>
          <div className='picture'>
            <h4> Title</h4>
            <p> This is the example About page.</p>
            <p> You can place images and content. </p>
            <p> Telling people more about  </p>
            <p> The object/ the product/ the things...</p>
          </div>
        </div>

        </div>


      </div>      



    
      );
    
    };


    export default About;