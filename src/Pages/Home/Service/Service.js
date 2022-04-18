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

            <div className="card service-container ">
                  <img className="card-img-top w-100" src={img} alt="..." />
                  <div class="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{text}</p>
                        <div className='location-price'>
                              <div className='location-icon d-flex '>
                                    <div>
                                          <img src={icon1} alt=''></img>
                                    </div>
                                    <div>
                                          <p>Location: {location}</p>
                                    </div>

                              </div>
                              <p>{price}/ package</p>

                        </div>
                        <button onClick={() => navigateToServiceDetails(id)} className='booking-button '>Add Booking</button>
                  </div>
            </div>



      );
};

export default Service;






