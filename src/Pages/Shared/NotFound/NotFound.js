import React from 'react';
import notfound1 from '../../../image/notfound/notfound1.jpg'
import './NotFound.css'

const NotFound = () => {
      return (
            <div className='text-center notfound-sector'>
                  <h1 style={{ color: 'blue' }}>Dor mia Abul Tabul Type Korte na Korsi na</h1>
                  <img src={notfound1} alt=''></img>
            </div>
      );
};

export default NotFound;