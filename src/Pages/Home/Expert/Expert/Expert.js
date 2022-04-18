import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

const Expert = ({ expert }) => {
      const { name, img } = expert;
      return (
            <div>
                  <div class="card">
                        <img src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                              <h5 class="card-title text-center">Name: {name}</h5>
                              <Button className='w-100 mt-3 mb-0'> Click me</Button>
                        </div>
                  </div>

            </div>
      );
};

export default Expert;