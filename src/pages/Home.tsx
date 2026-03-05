import '/public/OIP-C.webp'
import { useNavigate } from 'react-router-dom'
import React  from 'react'
import './c1.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import loading from '../assets/loading.json';
// import {cn} from "./utils"


// function App() {
  const Home: React.FC = () => {

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
    
    // <div className='app-container'>
    <div className='page-container'>
      
      <div className='nav'>
        <h4 onClick={go_about} className='h-bar'>About</h4>
        <h4 onClick={go_dashboard} className='h-bar'>Dashboard</h4>
        <img src="/public/OIP-C.webp" className='img_round' onClick={go_home}></img>
        {/* click the img go to the homepage */}
        <h4 onClick={go_setting} className='h-bar'>Setting</h4>
        <h4 onClick={go_contact} className='h-bar'>Contact</h4>

      </div>

      <div className='contentBox'> 
      <div className='title-text'> Hello, welcome to the example page.</div>

        <div className='inlineflex'>
        <div className='dot-lottie'>
        <DotLottieReact
          src="https://lottie.host/472c30e7-2d18-4359-81dd-bd4970a7adb9/CkxgSlCqrc.lottie"
          loop 
          autoplay 
        />
        </div>

        <h3 style={{margin: '40px 30px'}}> <p>This animation is from lottiefiles.</p>
        <p>Very easy to use and light-weight.   ^-^</p>  </h3>

        </div>
          
       
      
      
      
      
      </div>
    
    

    
    </div>
    // </div>
  )
  }

export default Home
