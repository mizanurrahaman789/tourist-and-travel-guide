import React from 'react';
import expert1 from '../../../../image/expert/expert1.jpg'
import expert2 from '../../../../image/expert/expert2.jpg'
import expert3 from '../../../../image/expert/expert3.jpg'
import expert4 from '../../../../image/expert/expert4.jpg'
import expert5 from '../../../../image/expert/expert5.jpg'
import expert6 from '../../../../image/expert/expert6.jpg'


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
            <div>
                  <h2>Our Experts</h2>
            </div>
      );
};

export default Experts;