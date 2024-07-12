import React, { useState, useRef, useEffect } from 'react';
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
import record from '../../assets/image/record.png';
import deadline from '../../assets/image/deadline.png';
import tags from '../../assets/image/tag.png';
// import JoditEditor from 'jodit-react';
import { ResponsiveInputField, ResponsivePreEvent } from '../../StyledComponents/Styled.style';
import Participant from '../../components/Participant';
import Agenda from '../../components/Agenda';
import Tags from '../../components/Tags';

const PreEvent = () => {
    const editor = useRef(null);
    // const [agenda, setAgenda] = useState('');
    const [participant, setparticipant] = useState(['']);
    const [agenda, setAgenda] = useState(['']);
    const [tag, setTag] = useState(['']);

    const [formData, setFormData] = useState({
        event_title: '',
        meeting_link: '',
        record_link: '',
        start_time: new Date(),
        end_time: new Date(),
        deadline_time: new Date()-new Date(),
        Participant: [''],
        agenda: [''],
        tag: [''],
    });
    function getparticipant(data) {
        setparticipant(data);
    }
    function getAgenda(data) {
        setAgenda(data);
    }
    function getTag(data) {
        setTag(data);
    }

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            agenda: agenda
        }));
    }, [agenda]);

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            Participant: participant
        }));
    }, [participant]);

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            tag: tag
        }));
    }, [tag]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDateTimeChange = (name, date) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: date
        }));
    };

    // const handleAgendaChange = (newAgenda) => {
    //     setAgenda(newAgenda);
    //     setFormData(prevState => ({
    //         ...prevState,
    //         agenda: newAgenda
    //     }));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        // console.log('Form submitted with data:', formData);
        // console.log(deadline_time)
    };
    return (
        <>
            <Header></Header>
            <Container className='px-lg-5 px-3' style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <Form onSubmit={handleSubmit}>
                    <div className='d-flex flex-xl-row flex-column justify-content-between align-items-lg-start align-items-center'>
                        <ResponsivePreEvent>
                            <div className=''>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        id="event_title"
                                        name="event_title"
                                        type="text"
                                        placeholder="Add a title"
                                        value={formData.event_title}
                                        onChange={handleChange}
                                        required
                                        style={EventInputBorder}
                                        className='border-bottom'
                                    />
                                </Form.Group>
                            </div>
                            <div className='d-flex flex-lg-row flex-row justify-content-lg-between align-items-lg-center gap-lg-2 gap-4'>
                                <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={Time} roundedCircle />
                                <div className='d-flex flex-lg-row flex-column justify-content-between align-items-center gap-lg-4 gap-2'>
                                    <CustomDateTimePicker 
                                        value={formData.start_time} 
                                        onChange={(date) => handleDateTimeChange('start_time', date)} 
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
                                        value={formData.end_time} 
                                        onChange={(date) => handleDateTimeChange('end_time', date)} 
                                    />
                                </div>
                            </div>
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
                                <Row className='mt-3 gap-1'>
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
                            <ResponsiveInputField>
                                <Row className='mt-3 gap-1'>
                                    <Agenda getAgenda={getAgenda}></Agenda>
                                </Row>
                            </ResponsiveInputField>
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
                        </ResponsivePreEvent>
                        <ResponsivePreEvent>
                            <div className='mt-lg-0 mt-4'>
                                <H1
                                  children="Advance Options"
                                  color="#3C4043"
                                  fontSize="14px"
                                  lineHeight="18px"
                                  fontWeight="600"
                                  fontFamily="Graphik"
                                />
                                <hr />
                            </div>
                            <Row className='mt-4'>
                                <Col lg={1} xs={1} className='d-flex align-items-center'>
                                    <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={record} />
                                </Col>
                                <Col lg={11} xs={11}>
                                    <Form.Group className="">
                                        <Form.Control
                                            id="record_link"
                                            name="record_link"
                                            type="text"
                                            placeholder="Recording Link"
                                            value={formData.record_link}
                                            onChange={handleChange}
                                            required
                                            style={EventInputBorder2}
                                            className='border-bottom'
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col lg={1} xs={1} className='d-flex align-items-center'>
                                    <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={deadline} />
                                </Col>
                                <Col lg={11} xs={11}>
                                    <CustomDateTimePicker
                                        value={formData.deadline_time} 
                                        onChange={(date) => handleDateTimeChange('deadline_time', date)} 
                                    />
                                </Col>
                            </Row>
                            {/* <Row className='mt-4'>
                                <Col lg={1} xs={1} className='d-flex align-items-center'>
                                    <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={tag} />
                                </Col>
                                <Col lg={11} xs={11}>
                                    <Form.Group className="">
                                        <Form.Control
                                            id="meeting_tag"
                                            name="meeting_tag"
                                            type="text"
                                            placeholder="Add Meeting Tags"
                                            value={formData.meeting_tag}
                                            onChange={handleChange}
                                            required
                                            style={EventInputBorder2}
                                            className='border-bottom'
                                        />
                                    </Form.Group>
                                </Col>
                            </Row> */}
                            {/* <div>
                              <div className='mt-4'>
                                <H1
                                  children="Available Tags"
                                  color="#3C4043"
                                  fontSize="12px"
                                  lineHeight="16px"
                                  fontWeight="400"
                                  fontFamily="Graphik"
                                  margin="0"
                                />
                              </div>
                                
                            </div> */}
                            <Row className='mt-4'>
                                <Col lg={1} xs={1} className='d-flex'>
                                    <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={tags} />
                                </Col>
                                <Col lg={11} xs={11}>
                                    <Tags getTag={getTag}></Tags>
                                </Col>
                            </Row>
                        </ResponsivePreEvent>
                    </div>
                    <div className='d-flex gap-2 mt-4'>
                        <Link to='/create-event'>
                            <Button style={{ background: '#49454F', width: '81px', height: '36px' }}>
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
                        <Link to='/update-event/:id'>
                            <Button type="submit" style={{ background: '#009975', width: '130px', height: '36px' }}>
                                <H1
                                    children="Add more data"
                                    color="#FFFFFF"
                                    fontSize="14px"
                                    lineHeight="18px"
                                    fontWeight="500"
                                    fontFamily="Graphik"
                                    margin="0"
                                />
                            </Button>
                        </Link>
                    </div>
                </Form> 
            </Container>
        </>
    );
};

export default PreEvent;