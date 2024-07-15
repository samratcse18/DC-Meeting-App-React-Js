import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ButtonStyle2 } from '../../StyledComponents/Home.style';
import Event from '../../components/Event';
import { Link, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import H1 from '../../components/H1';
import PlusIcon from '../../components/PlusIcon';
import { baseUrl } from '../../Constant/Constant';

const Home = () => {

    const [datas, setDatas] = useState(['']);
    const [eventType, setEventType] = useState('upcoming');

    const upcomingPastAllEvent = (type) => {
        setEventType(type);
        setDatas(['']);
    };

    const [activeButton, setActiveButton] = useState('upcoming');

    const handleButtonClick = (type) => {
        setActiveButton(type);
        upcomingPastAllEvent(type);
    };

    const ButtonStyle = (type) => ({
        backgroundColor: activeButton === type ? '#009975' : '#F0F4F9',
        color: activeButton === type ? '#FFFFFF' : '#3C4043',
        border:'none',
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: '500',
    });

    var [token, setToken] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const jwtToken = localStorage.getItem('jwt_token');
        if (jwtToken) {
            setToken(jwtToken);
        } else {
            setToken(null);
        }
    }, []);

    const [loading, setLoading] = useState(false)
            useEffect(()=> {
            setLoading(true)
            setTimeout(() => {
            setLoading(false)
            },1000)
        }, [])

    
    useEffect(() => {
    const fetchData = async () => {
    try {
            const response = await fetch(`${baseUrl}meeting/get-meetings-by-type/${eventType}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            },
            });
    
            var Data = await response.json();
            var datas = Data.data;
            if (response.ok) {
                setDatas(datas);
                // console.log('data fatch successfully:', datas);
            } else {
            }
        } catch (error) {
        }
    };
    fetchData();
    }, [token, eventType, location?.pathname]);


    

    return (
        <>
            {/* {loading?
                <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
                    <RotatingLines
                        visible={true}
                        height="96"
                        width="96"
                        color="grey"
                        strokeWidth="5"
                        animationDuration="0.25"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
                : */}
                <div style={{height:'100vh'}}>
                    <Header></Header>
                    <Container style={{ paddingTop: '40px',paddingBottom: '40px'}}>
                        <Row>
                            <Col lg={6} xs={7} >
                                <Button className='m-1' style={ButtonStyle('upcoming')} onClick={() => handleButtonClick('upcoming')}>Upcoming</Button>{' '}
                                <Button className='m-1' style={ButtonStyle('my-events')} onClick={() => handleButtonClick('my-events')}>My Event</Button>{' '}
                                <Button className='m-1' style={ButtonStyle('past')} onClick={() => handleButtonClick('past')}>Past</Button>
                            </Col>
                            <Col lg={6} xs={5} className='d-flex justify-content-end align-items-lg-start'>
                                <Button as={Link} to='/create-event' style={ButtonStyle2}>+ Add New Event</Button>
                            </Col>
                        </Row>
                        {eventType === 'upcoming' && (
                            <div>
                                {datas.map((data, index) => (
                                    new Date(data.starting_time) >= new Date() &&
                                    <Event key={index} data={data} />
                                ))}
                            </div>
                        )}
                        {eventType === 'my-events' && (
                            <div>
                                {datas.map((data, index) => (
                                    <Event EventType={"myEvents"} key={index} data={data} />
                                ))}
                            </div>
                        )}
                        {eventType === 'past' && (
                            <div>
                                {datas.map((data, index) => (
                                    new Date(data.starting_time) < new Date() &&
                                    <Event key={index} data={data} />
                                ))}
                            </div>
                        )}
                        {datas.length === 0 && (
                            <div className='h-100 d-flex flex-column justify-content-center align-items-center align-content-center' style={{marginTop:'15%'}}>
                            <H1
                                children="No events found"
                                color="#191B1C"
                                fontSize="24px"
                                fontWeight="500"
                                lineHeight="28px"
                                fontFamily="Graphik"
                            />
                        </div>
                        )}
                    </Container>
                </div>
            {/* } */}
        </>
    );
};

export default Home;