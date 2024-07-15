import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { InputBorder, LoginSignupButton, MainDiv } from '../../StyledComponents/Login.Style';
import H1 from '../../components/H1';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CustomLink from '../../components/CustomLink';
import { toast } from 'react-toastify';
import { baseUrl } from '../../Constant/Constant';

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [countdown, setCountdown] = useState(180);
  const [email, setEmail] = useState('');

  const location = useLocation();
  const { userData } = location.state || {};
  console.log(userData.email)

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  useEffect(()=>{
    if(userData){
      setEmail(userData.email)
    }
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Otp = otp.join('');

    try {
        const response = await fetch(`${baseUrl}auth/verify-otp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'otp': Otp,
            'email': email
          })
        });
  
        var Data = await response.json();
        var data = Data.data;
        if (response.ok) {
          toast.success(`${Data.message}`);
          navigate('/change-forgot-password', { state: { email: email, otp: Otp } });
          // console.log('User signed up successfully:', data);
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
                                children="Verify OTP"
                                color="#49454F"
                                fontSize="28px"
                                lineHeight="40px"
                                fontWeight="500"
                                fontFamily="Graphik"
                            />
                            <hr style={{color:'#49454F',fontSize:'1px',opacity:'25%'}} />
                        </div>
                        <Row className='mb-4'>
                            {otp.map((data, index) => (
                                <Col key={index} xs={2}>
                                    <Form.Control
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    value={data}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onFocus={(e) => e.target.select()}
                                    className="text-center"
                                    style={InputBorder}
                                    />
                                </Col>
                            ))}
                        </Row>
                        {/* <Link to='/change-forgot-password'> */}
                        <Button type="submit" style={LoginSignupButton}>
                            Verify
                        </Button>
                        {/* </Link> */}
                        <div className='d-flex justify-content-between align-items-center mt-3'>
                            <div>
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
                            </div>
                            <div>
                                {countdown === 0 ? (
                                    <div>
                                        <H1
                                            color="#49454F"
                                            fontSize="14px"
                                            lineHeight="21px"
                                            fontWeight="400"
                                            fontFamily="Graphik"
                                        >
                                            Remaining time expired
                                            <CustomLink
                                                children=" Resend"
                                                to="/forgot-password"
                                                textDecoration="none"
                                                color="#009975"
                                                fontSize="14px"
                                                lineHeight="21px"
                                                fontWeight="400"
                                                fontFamily="Graphik"
                                            />
                                        </H1>
                                    </div>
                                ) : (
                                        <H1
                                            color="#49454F"
                                            fontSize="14px"
                                            lineHeight="21px"
                                            fontWeight="400"
                                            fontFamily="Graphik"
                                        >
                                            Time remaining: 
                                            <span style={{color:'#ce0d0d',fontSize:'14px',lineHeight:'21px',fontFamily:'Graphik',fontWeight:'400'}}> {formatTime(countdown)}</span>
                                        </H1>
                            )}

                            </div>
                        </div>
                    </Form> 
                </MainDiv>
            </Container>
        </div>
    </>
  );
};

export default Otp;
