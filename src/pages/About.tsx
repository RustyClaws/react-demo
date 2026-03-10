import { useNavigate } from 'react-router-dom'
import React from 'react'
import './c1.css'
import Coding from '../assets/Coding.svg'
import image from '../assets/react.svg'
import Aboutus from '../assets/Aboutus.svg'
import Product from '../assets/Product.svg'




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
          <img src={image} className='img_round' onClick={go_home}></img>
          {/* click the img go to the homepage */}
          <h4 onClick={go_setting} className='h-bar'>Extra page</h4>
          <h4 onClick={go_contact} className='h-bar'>Contact</h4>

        </div>

        <div className='contentBox'> 
        <div className='inlineflex'>
          <img src={Coding} className='picture'></img>
          <div className='about-content'>
            <h2> About us</h2>
            We are a team of curious minds united by a shared passion for creativity, innovation, and meaningful connections. Founded on the belief that collaboration fuels progress, we thrive at the intersection of ideas, cultures, and perspectives. Our journey began with a simple question: How can we make a positive impact, one step at a time?
          </div>
        </div>

        <div className='inlineflex'>
        <div className='about-content'>
        We are a team of curious minds united by a shared passion for creativity, innovation, and meaningful connections. Founded on the belief that collaboration fuels progress, we thrive at the intersection of ideas, cultures, and perspectives. Our journey began with a simple question: How can we make a positive impact, one step at a time?
            
        </div>
          <img src={Aboutus} className='picture'></img>
          
        </div>

        <div className='inlineflex'>
          <img src={Product} className='picture'></img>
          <div className='about-content'>
          We are a team of curious minds united by a shared passion for creativity, innovation, and meaningful connections. Founded on the belief that collaboration fuels progress, we thrive at the intersection of ideas, cultures, and perspectives. Our journey began with a simple question: How can we make a positive impact, one step at a time?
            
          </div>
        </div>


        </div>



      </div>      



    
      );
    
    };


    export default About;