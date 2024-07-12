import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { InputBorder, LoginSignupButton, MainDiv } from '../../StyledComponents/Login.Style';
import H1 from '../../components/H1';
import CustomLink from '../../components/CustomLink';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ChangeForgotPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
        email: '',
        otp: '',
      });
      const location = useLocation();
      const { email, otp } = location.state || {};

      useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            email: email
        }));
    }, [email]);

      useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            otp: otp
        }));
    }, [otp]);

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
            const response = await fetch('https://meetingapp.bestinbd.com/auth/reset-password', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
      
            var Data = await response.json();
            var data = Data.data;
            if (response.ok) {
              toast.success(`${Data.message}`);
              navigate('/login');
            //   console.log('Change Password successfully:', data);
            } else {
                toast.error(Data.message || 'Something Went Wrong');
            }
          } catch (error) {
          }
      };

    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{background:'#F0F4F9',height:'100vh'}}>
                <Container className='d-flex justify-content-center'>
                    <MainDiv>
                        <Form onSubmit={handleSubmit}>
                            <div className='pb-2'>
                                <H1
                                    children="Change Password"
                                    color="#49454F"
                                    fontSize="28px"
                                    lineHeight="40px"
                                    fontWeight="500"
                                    fontFamily="Graphik"
                                />
                                <hr style={{color:'#49454F',fontSize:'1px',opacity:'25%'}} />
                            </div>
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
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="confirmPassword"
                                    name='confirmPassword'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="********"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    style={InputBorder}
                                />
                                <label htmlFor="confirmPassword">Confirm Password</label>
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
                                            <Form.Check.Label style={{color:'#49454F',fontWeight:'500',fontFamily:'Graphik'}}>Show password</Form.Check.Label>
                                        </Form.Check>
                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* <Link to='/otp'> */}
                            <Button type="submit" style={LoginSignupButton}>
                                Save
                            </Button>
                            {/* </Link> */}
                            <Row className='mt-3'>
                                <Col>
                                    <H1
                                        color="#49454F"
                                        fontSize="14px"
                                        lineHeight="21px"
                                        fontWeight="400"
                                        fontFamily="Graphik" 
                                    >
                                        Already have an account?
                                        <CustomLink
                                            children=" Login"
                                            to="/login"
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

export default ChangeForgotPassword;