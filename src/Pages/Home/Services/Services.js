import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
      const [services, setServices] = useState([]);
      useEffect(() => {
            fetch('services.json')
                  .then(res => res.json())
                  .then(data => setServices(data))
      }, [])
      return (
            <div id='services' className='container '>
                  <h1 className='our-service mt-5'>Our Traveling Service </h1>
                  <div className='row'>

                        <div className='services-section'>
                              {
                                    services.map(service => <Service
                                          key={service.id}
                                          service={service}
                                    ></Service>)
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Services;