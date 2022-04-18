import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
// import { Link } from 'react-router-dom';

const Header = () => {
      const [user] = useAuthState(auth);
      const handleSignOut = () => {
            signOut(auth)
      }
      return (
            <div>
                  <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
                        <Container>
                              <Navbar.Brand as={Link} to="/">Traveling</Navbar.Brand>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                              <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">


                                    </Nav>
                                    <Nav>
                                          <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                          <Nav.Link href="home#services">services</Nav.Link>
                                          <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
                                          <Nav.Link as={Link} to="/about">About</Nav.Link>
                                          {
                                                user ?
                                                      <Button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</Button>
                                                      :
                                                      <Nav.Link as={Link} to="/login">
                                                            Login
                                                      </Nav.Link>}
                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>

            </div>
      );
};

export default Header;