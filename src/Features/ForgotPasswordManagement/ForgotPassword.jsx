import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { InputBorder, LoginSignupButton, MainDiv } from '../../StyledComponents/Login.Style';
import H1 from '../../components/H1';
import CustomLink from '../../components/CustomLink';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
      });


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
            const response = await fetch('https://meetingapp.bestinbd.com/auth/forgot-password', {
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
                navigate('/otp', { state: { userData: formData } });
            //   console.log('OTP send successfully:', data);
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
                                    children="Forgot Password"
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
                            {/* <Link to='/otp'> */}
                            <Button type="submit" style={LoginSignupButton}>
                                Send
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

export default ForgotPassword;