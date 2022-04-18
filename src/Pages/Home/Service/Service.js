import React from 'react';
import './Service.css';
import icon1 from '../../../image/icon/icon1.jpg'
import { Navigate, useNavigate } from 'react-router-dom';



const Service = ({ service }) => {
      const { id, name, img, price, location, text } = service;
      const Navigate = useNavigate();
      const navigateToServiceDetails = id => {
            Navigate(`/service/${id}`)
      }
      return (
            <div className='service-container mt-5'>
                  <img src={img} alt=''></img>
                  <h2>{name}</h2>
                  <h4>{text}</h4>
                  <div className='location-price'>
                        <div className='cocation-icon'>
                              <img src={icon1} alt=""></img>

                        </div>
                        <div>
                              <h5>location: {location}</h5>

                        </div>
                        <h5>{price}/ package</h5>
                  </div>
                  <button onClick={() => navigateToServiceDetails(id)} className='booking-button '>Add Booking</button>

            </div>
      );
};

export default Service;