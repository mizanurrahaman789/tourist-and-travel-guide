import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../image/banner/banner1.jpg'
import banner2 from '../../../image/banner/banner2.jpg'
import banner3 from '../../../image/banner/banner3.jpg'
import './Banner.css'

const Banner = () => {
      const [index, setIndex] = useState(0);

      const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
      };
      return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={banner1}
                              alt="First slide"
                        />
                        <Carousel.Caption>
                              <h3 >Traveling Very Intersting</h3>
                              <p>Our travel guides aim to give you the best and most up-to-date information on the major travel destinations around the world.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={banner2}
                              alt="Second slide"
                        />

                        <Carousel.Caption>
                              <h3>TRAVEL GUIDES</h3>
                              <p>Our travel guides aim to give you the best and most up-to-date information on the major travel destinations around the world.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={banner3}
                              alt="Third slide"
                        />

                        <Carousel.Caption>
                              <h3>TRAVEL GUIDES</h3>
                              <p>
                                    Our travel guides aim to give you the best and most up-to-date information on the major travel destinations around the world.
                              </p>
                        </Carousel.Caption>
                  </Carousel.Item>
            </Carousel>
      );
};

export default Banner;