import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import H1 from '../../components/H1';
import { Link } from 'react-router-dom';
import { EventInputBorder, EventInputBorder2 } from '../../StyledComponents/Login.Style';
import CustomDateTimePicker from '../../components/CustomDateTimePicker';
import Time from '../../assets/image/clock-three.png';
import UserAdd from '../../assets/image/user-add.png';
import link from '../../assets/image/link.png';
import notebook from '../../assets/image/notebook.png';
import { ResponsiveCreateEvent, ResponsiveInputField } from '../../StyledComponents/Styled.style';
import Participant from '../../components/Participant';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import SocialHome from '../../components/SocialHome';
import { baseUrl } from '../../Constant/Constant';

const CreateEvent = () => {

    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const jwtToken = localStorage.getItem('jwt_token');
        setToken(jwtToken);
    }, []);

    const newAccessTokens = async (refreshToken) => {
    const client_id = "558135012588-2vd3rau8mocs5ss6l6unsc301rchqa0v.apps.googleusercontent.com";
    const client_secret = "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";  

    const params = new URLSearchParams();
    params.append('client_id', client_id);
    params.append('client_secret', client_secret);
    params.append('refresh_token', refreshToken);
    params.append('grant_type', 'refresh_token');

    try {
      const response = await axios.post('https://oauth2.googleapis.com/token', params);
      setAccessToken(response.data.access_token);
    } catch (error) {
    }
  };

    const [participant, setparticipant] = useState(['']);

    const [formData, setFormData] = useState({
        title: '',
        meeting_link: '',
        starting_time: new Date(),
        ending_time: new Date(),
        participants: [''],
        agenda: '',
        add_to_calendar: false,
        access_token: '',
    });

    function getparticipant(data) {
        setparticipant(data);
    }
    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            participants: participant
        }));
    }, [participant]);

    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleDateTimeChange = (name, date) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: date
        }));
    };
    function access_token(data) {
        setAccessToken(data);
    }
    const RefreshToken = localStorage.getItem('refreshToken');
    
    useEffect(() => {
        if(formData.add_to_calendar === true && RefreshToken){
            newAccessTokens(RefreshToken);
        }
        else if(formData.add_to_calendar === false){
            setAccessToken(null);
        }
        // else if(!RefreshToken){
        //     setFormData(prevFormData => ({
        //         ...prevFormData,
        //         add_to_calendar: false
        //     }));
        // }
    }, [formData,RefreshToken]);

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            access_token: accessToken
        }));
    }, [accessToken]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseUrl}meeting/create-meeting`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'authorization': token,
                // 'x-access-token': accessToken,
              },
              body: JSON.stringify(formData)
            });
            
            var Data = await response.json();
            var data = Data.data;
            if (response.ok) {
              navigate('/home');
              toast.success(`${Data.message}`);
            //   console.log('Meeting create successfully:', data);
            } else {
                toast.error(Data.message || 'Something Went Wrong');
            }
          } catch (error) {
          }
    };

    return (
        <div>
            <Header />
            <Container className='d-flex justify-content-center' style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <Form onSubmit={handleSubmit}>
                    <ResponsiveCreateEvent>
                        <div className=''>
                            <Form.Group className="">
                                <Form.Control
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="Add a title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    style={EventInputBorder}
                                    className='border-bottom'
                                />
                            </Form.Group>
                        </div>
                        <div className='d-flex flex-lg-row flex-row justify-content-lg-between align-items-lg-center gap-lg-2 gap-3 mt-4'>
                            <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={Time} roundedCircle />
                            <div className='d-flex flex-lg-row flex-column justify-content-between align-items-center gap-lg-4 gap-2'>
                                <CustomDateTimePicker 
                                    value={formData.starting_time} 
                                    onChange={(date) => handleDateTimeChange('starting_time', date)} 
                                />
                                <H1
                                    children="To"
                                    color="#3C4043"
                                    fontSize="14px"
                                    lineHeight="18px"
                                    fontWeight="400"
                                    fontFamily="Graphik"
                                    margin="0"
                                />
                                <CustomDateTimePicker 
                                    value={formData.ending_time} 
                                    onChange={(date) => handleDateTimeChange('ending_time', date)} 
                                />
                            </div>
                        </div>
                        {/* <Row className='mt-4'>
                            <Col lg={1} xs={1} className='d-flex align-items-center'>
                                <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={UserAdd} />
                            </Col>
                            <Col lg={11} xs={11}>
                                <Form.Group className="">
                                    <Form.Control
                                        id="participant"
                                        name="participant"
                                        type="text"
                                        placeholder="Add Participants"
                                        value={formData.participant}
                                        onChange={handleChange}
                                        required
                                        style={EventInputBorder2}
                                        className='border-bottom'
                                    />
                                </Form.Group>
                            </Col>
                        </Row> */}
                        <Row className='mt-4 d-flex align-items-center'>
                                <Col lg={1} xs={1}>
                                    <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={UserAdd} />
                                </Col>
                                <Col lg={11} xs={11}>
                                    <H1
                                        children="Participant"
                                        color="#3C4043"
                                        fontSize="14px"
                                        lineHeight="18px"
                                        fontWeight="500"
                                        fontFamily="Graphik"
                                        margin="0"
                                    />
                                </Col>
                            </Row>
                            <ResponsiveInputField>
                                <Row className='mt-3 ml-5 gap-1'>
                                    <Participant getparticipant={getparticipant}></Participant>
                                </Row>
                            </ResponsiveInputField>
                        <Row className='mt-4'>
                            <Col lg={1} xs={1} className='d-flex align-items-center'>
                                <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={link} />
                            </Col>
                            <Col lg={11} xs={11}>
                                <Form.Group className="">
                                    <Form.Control
                                        id="meeting_link"
                                        name="meeting_link"
                                        type="text"
                                        placeholder="Add Meeting Link"
                                        value={formData.meeting_link}
                                        onChange={handleChange}
                                        required
                                        style={EventInputBorder2}
                                        className='border-bottom'
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        {/* <Row className='mt-4'>
                            <Col lg={1} xs={1}>
                                <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={notebook} />
                            </Col>
                            <Col lg={11} xs={11}>
                                <Form.Group className="">
                                    <JoditEditor
                                        ref={editor}
                                        value={agenda}
                                        onBlur={handleAgendaChange}
                                        onChange={newContent => {}}
                                    />
                                </Form.Group>
                            </Col>
                        </Row> */}
                            <Row className='mt-4 d-flex align-items-center'>
                                <Col lg={1} xs={1}>
                                    <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={notebook} />
                                </Col>
                                <Col lg={11} xs={11}>
                                    <H1
                                        children="Agenda"
                                        color="#3C4043"
                                        fontSize="14px"
                                        lineHeight="18px"
                                        fontWeight="500"
                                        fontFamily="Graphik"
                                        margin="0"
                                    />
                                </Col>
                            </Row>
                            {/* <ResponsiveInputField>
                                <Row className='mt-3 gap-1'>
                                    <Agenda getAgenda={getAgenda}></Agenda>
                                </Row>
                            </ResponsiveInputField> */}
                            <ResponsiveInputField>
                                <Form.Group className="mt-2">
                                    <Form.Control
                                        as="textarea"
                                        id="agenda"
                                        name="agenda"
                                        placeholder="Add Meeting Agenda"
                                        value={formData.agenda}
                                        onChange={handleChange}
                                        required
                                        style={EventInputBorder2}
                                        className='border-bottom'
                                        rows={3} // You can adjust the number of rows as needed
                                    />
                                </Form.Group>
                            </ResponsiveInputField>
                            <Form.Group className="my-3" controlId="formShowPassword">
                                <Form.Check type="checkbox">
                                    <Form.Check.Input
                                        type="checkbox"
                                        id="add_to_calendar"
                                        name="add_to_calendar"
                                        value={formData.add_to_calendar}
                                        onChange={handleChange}
                                        style={{border:'1px solid #49454F',borderRadius:'3px'}}
                                    />
                                    <Form.Check.Label style={{color:'#49454F',fontWeight:'300', fontSize:'14px',fontFamily:'Graphik'}}>
                                        If you want to add the meeting in your Participant calendar then Chacked
                                    </Form.Check.Label>
                                </Form.Check>
                            </Form.Group>
                                {formData.add_to_calendar === true && !RefreshToken &&
                            <SocialHome access_token={access_token}></SocialHome>
                            }
                    </ResponsiveCreateEvent>
                    <div className='d-flex gap-2 mt-4'>
                        <Link to='/home'>
                            <Button style={{ background: '#49454F', width: '81px', height: '36px',border:'1px solid #49454F' }}>
                                <H1
                                    children="Back"
                                    color="#FFFFFF"
                                    fontSize="14px"
                                    lineHeight="18px"
                                    fontWeight="500"
                                    fontFamily="Graphik"
                                    margin="0"
                                />
                            </Button>
                        </Link>
                        {/* <Link to='/pre-event'> */}
                        <Button type="submit" style={{ background: '#009975', width: '81px', height: '36px',border:'1px solid #009975' }}>
                            <H1
                                children="Save"
                                color="#FFFFFF"
                                fontSize="14px"
                                lineHeight="18px"
                                fontWeight="500"
                                fontFamily="Graphik"
                                margin="0"
                            />
                        </Button>
                        {/* </Link> */}
                    </div>
                </Form> 
            </Container>
        </div>
    );
};

export default CreateEvent;
