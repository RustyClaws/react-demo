import { useNavigate } from 'react-router-dom'
import React from 'react'
import './c1.css'
import TwoPie from '../components/Twopie'
import LineChart from '../components/LineChart'
// import {cn} from "./utils"




const Dashboard: React.FC = () => {

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
        <h2> Dashboard example</h2>

        <div style={{display: 'inlineblock'}}>
        <div className='card'>
        <div className='chart' style={{width: '300px'}}>
          <TwoPie />
        </div>
        <div className='desc'>
          <p>This is the example pie, </p> 
          <p>showing structure and proportion</p>
          </div>
        </div>

        <div className='card'>
        <div className='chart' style={{width: '400px'}}>
          <LineChart />
        </div>
        <div className='desc'>
          <p>Line Chart, </p> 
          <p>displaying data changes</p>
          </div>
        </div>

        </div>
        <div className='card'>
          <h3>Summary</h3>
          <div className='desc'>
            <p> This interactive dashboard showcases my front-end development and data visualization skills </p>
            <p> using mock datasets. It features a pie chart analyzing user segments, a line graph tracking </p>
            <p> seasonal sales trends, and a bar chart comparing product category performance. While fictional, </p>
            <p> the design highlights my ability to translate data into actionable insights for strategic decision-making.</p>
          </div>
        </div>
        
        
        
        
        </div>


      </div>      



    
      );
    
    };


    export default  Dashboard;