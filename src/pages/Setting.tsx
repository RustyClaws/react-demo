import { useNavigate } from 'react-router-dom'
import React from 'react'
import './c1.css'
import image from '../assets/react.svg'
import { LightBoard } from '../components/ui/lightboard'




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
          <img src={image} className='img_round' onClick={go_home}></img>
          {/* click the img go to the homepage */}
          <h4 onClick={go_setting} className='h-bar'>Extra page</h4>
          <h4 onClick={go_contact} className='h-bar'>Contact</h4>

        </div>

        <div className='contentBox'> 
        
        <div className="w-full bg-black" style={{width: '100vw'}}>
        <LightBoard
          text="Hello World"
          rows={7}
          gap={1}
          lightSize={4}
          font="default"
          updateInterval={150}
          colors={{
            background: "#1a1a1a",
            textDim: "#3a3a3a",
            drawLine: "#7a7a7a",
            textBright: "#ffffff",
          }}
        />
      </div>
        
        </div>


      </div>      



    
      );
    
    };


    export default Setting;