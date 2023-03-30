import React from 'react';
import { useNavigate } from 'react-router-dom';



const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div className='CardHeader'>
      <div>
        <h1 className='StyleH1' onClick={() => navigate(props.data.route)}>{props.title}</h1>
      <h1 className='StyleDH1'>{props.description}</h1>
      
      </div>
    </div>
  )
}

export default Card
