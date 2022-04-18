import React from 'react';
import { Button } from 'react-bootstrap';
import google from '../../../image/social/google.png'
import facebook from '../../../image/social/facebook.png'
import GitHub from '../../../image/social/GitHub.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
      const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
      const navigate = useNavigate();
      let errorElement;
      if (error) {
            errorElement = <div div >
                  <p className='text-danger'>Error: {error.message}</p>
            </div>

      }
      if (user) {
            navigate('/home')
      }

      return (
            <div>
                  <div className='d-flex align-items-center'>
                        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                        <p className='mt-2 px-2'>or</p>
                        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                  </div>
                  {errorElement}
                  <div>
                        <Button
                              onClick={() => signInWithGoogle()}
                              className='btn btn-dark w-50 d-block mx-auto my-3'>
                              <img style={{ width: '30px' }} src={google} alt=''></img>
                              <span className='px-3'>Google Sign In</span>
                        </Button>
                        <Button className='btn btn-dark w-50 d-block mx-auto my-3'>
                              <img style={{ width: '30px' }} src={facebook} alt=''></img>
                              <span className='px-3'>Facebook Sign In</span>
                        </Button>
                        <Button className='btn btn-dark w-50 d-block mx-auto'>
                              <img style={{ width: '30px' }} src={GitHub} alt=''></img>
                              <span className='px-3'>GitHub Sign In</span>
                        </Button>
                  </div>
            </div>
      );
};

export default SocialLogin;