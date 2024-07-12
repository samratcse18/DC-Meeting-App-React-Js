import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { InputBorder, LoginSignupButton, MainDiv } from '../../StyledComponents/Login.Style';
import H1 from '../../components/H1';
import CustomLink from '../../components/CustomLink';
import Social from '../../components/Social';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userInfo } from '../../Store/Reducers/userReducer';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        showPassword: '',
      });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://meetingapp.bestinbd.com/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      
            var Data = await response.json();
            var data = Data.data;
            if (response.ok) {
              toast.success(`${Data.message}`);
              navigate('/home');
            //   console.log('User logged in successfully:', data);
              dispatch(userInfo(data));
              localStorage.setItem('Loggedin', true);
              localStorage.setItem('jwt_token', data.jwt_token);
              localStorage.setItem('id', data.id);
            } else {
              toast.error(Data.message || 'Something Went Wrong');
            }
          } catch (error) {
            
          }
      };

    return (
        <>
            <div style={{background:'#F0F4F9',height:'100vh'}}>
                <Container className='d-flex justify-content-center'>
                    <MainDiv>
                        <Form onSubmit={handleSubmit}>
                            <div className='pb-2'>
                                <H1
                                    children="Login"
                                    color="#49454F"
                                    fontSize="32px"
                                    lineHeight="40px"
                                    fontWeight="500"
                                    fontFamily="Graphik"
                                />
                                <H1
                                    children="to get started"
                                    color="#49454FCC"
                                    fontSize="16px"
                                    opacity="80%"
                                    lineHeight="24px"
                                    fontWeight="400"
                                    fontFamily="Roboto"
                                />
                                <hr style={{color:'#49454F',fontSize:'1px',opacity:'25%'}} />
                            </div>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={InputBorder}
                                />
                                <label htmlFor="email">Email</label>
                            </Form.Floating>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="password"
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="********"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    style={InputBorder}
                                />
                                <label htmlFor="password">Password</label>
                            </Form.Floating>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formShowPassword">
                                        <Form.Check type="checkbox">
                                            <Form.Check.Input
                                                type="checkbox"
                                                id="showPassword"
                                                name="showPassword"
                                                checked={showPassword}
                                                onChange={toggleShowPassword}
                                                style={{border:'2px solid #49454F',borderRadius:'0px'}}
                                            />
                                            <Form.Check.Label style={{color:'#49454F',fontWeight:'500',fontFamily:'Graphik'}}>
                                                Show password
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </Form.Group>
                                </Col>
                                <Col className='d-flex justify-content-end'>
                                    <CustomLink
                                        children="Forgot password?"
                                        to="/forgot-password"
                                        textDecoration="none"
                                        color="#009975"
                                        fontFamily="Graphik"
                                        fontWeight="500"
                                    >
                                    </CustomLink>
                                </Col>
                            </Row>
                            {/* <Link to='/home'> */}
                            <Button type="submit" style={LoginSignupButton}>
                                Login
                            </Button>
                            {/* </Link> */}
                            <Row className='d-flex justify-content-center align-items-center my-3'>
                                <Col xs="5">
                                    <hr style={{color:'49454F',height:'1px'}} />
                                </Col>
                                <Col xs="1" className='text-center'>
                                    <H1
                                        children="or"
                                        color="#49454F"
                                        fontSize="14px"
                                        lineHeight="15.4px"
                                        fontWeight="400"
                                        fontFamily="Graphik"
                                        margin="0"
                                    />
                                </Col>
                                <Col xs="5">
                                    <hr style={{color:'49454F',height:'1px'}} />
                                </Col>
                            </Row>
                            <Social></Social>
                            <Row className='mt-3'>
                                <Col>
                                    <H1
                                        color="#49454F"
                                        fontSize="14px"
                                        lineHeight="21px"
                                        fontWeight="400"
                                        fontFamily="Graphik" 
                                    >
                                        
                                        Don't have an account?
                                        <CustomLink
                                            children=" Sign Up"
                                            to="/signup"
                                            textDecoration="none"
                                            color="#009975"
                                            fontSize="14px"
                                            lineHeight="21px"
                                            fontWeight="400"
                                            fontFamily="Graphik"
                                        >
                                        </CustomLink>
                                    </H1>
                                </Col>
                            </Row>
                        </Form> 
                    </MainDiv>
                </Container>
            </div>
        </>
        
    );
};

export default Login;