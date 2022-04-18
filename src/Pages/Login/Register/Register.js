import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
      const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();

      const navigateLogin = () => {
            navigate('/login')
      }

      if (user) {
            navigate('/home');
      }
      const handleRegister = event => {
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const password = event.target.password.value;

            createUserWithEmailAndPassword(email, password);
            console.log(event.target.name.value)
      }
      return (
            <div className='register-form'>
                  <h1 className='text-center'>Please Register Now</h1>

                  <Form onSubmit={handleRegister}>
                        <input type="text" name='name' id='' placeholder='Your name'></input>

                        <input type="email" name='email' id='' placeholder='Email Address' required></input>

                        <input type="password" name='password' id='' placeholder='Password' required></input>
                        <input type="checkbox" name='terms' id="terms"></input>
                        <label htmlFor='terms'>Accept Terms And Condition</label>
                        <input className='w-50 mx-auto btn btn-primary mt-2' type='submit' value='Register'></input>
                  </Form>
                  <p className='text-center'>Alredy have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Pleasse Login</Link></p>
                  <SocialLogin></SocialLogin>
            </div >
      );
};

export default Register;