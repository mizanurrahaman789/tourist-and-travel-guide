import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import expert1 from '../../../../image/expert/expert1.jpg'
import expert2 from '../../../../image/expert/expert2.jpg'
import expert3 from '../../../../image/expert/expert3.jpg'
import expert4 from '../../../../image/expert/expert4.jpg'
import expert5 from '../../../../image/expert/expert5.jpg'
import expert6 from '../../../../image/expert/expert6.jpg'
import Expert from '../Expert/Expert';
import './Experts.css'


const experts = [
      { id: 1, name: 'jecson mith', img: expert1 },
      { id: 2, name: 'john', img: expert2 },
      { id: 3, name: 'cristimark', img: expert3 },
      { id: 4, name: 'heklampi', img: expert4 },
      { id: 5, name: 'jremdali', img: expert5 },
      { id: 6, name: 'poddam', img: expert6 }
]

const Experts = () => {

      return (
            <div className='container'>
                  <h2 className='text-primary text-center mt-5 mb-5'>Our Experts</h2>
                  <div className='row '>
                        <div className='expert-section'>
                              {
                                    experts.map(expert => <Expert
                                          key={expert.id}
                                          expert={expert}
                                    ></Expert>)
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Experts;