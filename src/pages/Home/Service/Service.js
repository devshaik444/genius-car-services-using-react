import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {name,price,description,img,_id}=service

    const navigate=useNavigate()
    const navigateToServiceDetail=(id)=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
            <img style={{width:'50%',height:'50%'}} src={img} alt=""/>
            <h3>{name}</h3>
            <p>Price:${price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetail(_id)}>{name}</button>
        </div>
    );
};

export default Service;