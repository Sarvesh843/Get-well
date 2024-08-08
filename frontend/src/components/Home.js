import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();


    const handleClickDoctor=()=>{
    navigate('/doctor-signup');

    }

    const handleClickPatient=()=>{
    navigate('/patient-signup');

    }
  return (
    <div className='HomeDiv'>
        <div style={{border:'1px solid black',padding:'10px'}}>
            <h1>Welcome</h1>
        <h1>Please specify your role</h1>
        <div className='Home-inner' onClick={handleClickDoctor}>I am Doctor</div>
        <div className='Home-inner' onClick={handleClickPatient}>I am Patient</div>
        </div>
    </div>
  )
}

export default Home