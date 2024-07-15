import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Badge, Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import H1 from '../../components/H1';
import { Link, useLocation, useParams } from 'react-router-dom';
import { EventInputBorder, EventInputBorder2 } from '../../StyledComponents/Login.Style';
import CustomDateTimePicker from '../../components/CustomDateTimePicker';
import Time from '../../assets/image/clock-three.png';
import UserAdd from '../../assets/image/user-add.png';
import link from '../../assets/image/link.png';
import notebook from '../../assets/image/notebook.png';
import record from '../../assets/image/record.png';
import deadline from '../../assets/image/deadline.png';
import tags from '../../assets/image/tag.png';
import list from '../../assets/image/list.png';
import comment from '../../assets/image/comment.png';
import block from '../../assets/image/block.png';
import { ResponsiveUpdateEvent } from '../../StyledComponents/Styled.style';
import Blocker from '../../components/Blocker';
import { baseUrl } from '../../Constant/Constant';


function parseAndFormatDate(dateString) {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date;
}

const ViewEvent = () => {


    const location = useLocation();

    const [token, setToken] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        meeting_link: '',
        recording_link: '',
        starting_time: new Date(),
        ending_time: new Date(),
        deadline: new Date()-new Date(),
        agenda: '',
        tasks: [''],
        notes: '',
        blockers: [''],
        participants: [''],
        tags: [''],
    });

    useEffect(() => {
        const jwtToken = localStorage.getItem('jwt_token');
        setToken(jwtToken);
    }, []);

    const { id } = useParams();
    const [meetingId, setMeetingId] = useState(null);


    useEffect(() => {
        if (id) {
            setMeetingId(parseInt(id));
        }
    }, [id, location?.pathname]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}meeting/get-meetings-by-type/all`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': token
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const result = await response.json();
                if (result.statusCode === 200) {
                    const meeting = result.data.find(meeting => meeting.id === meetingId);
                    if (meeting) {
                        var starting_time = parseAndFormatDate(meeting.starting_time);
                        var ending_time = parseAndFormatDate(meeting.ending_time);
                        var deadline = parseAndFormatDate(meeting.deadline);
                        
                        if(meeting.deadline === 0 || meeting.deadline === null){
                            deadline = deadline - deadline ;
                        }
                        
                        if(meeting.tasks.length !== 0){
                            if(meeting.tasks[0].description === ''){
                                var tasks = [''];
                             }
                             else{
                                var tasks = meeting.tasks;
                             }
                        }
                        else{
                            var tasks = meeting.tasks;
                        }
                        if(meeting.blockers.length !== 0){
                             if(meeting.blockers[0].description === ''){
                                var blockers = [''];
                             }
                             else{
                                var blockers = meeting.blockers;
                             }
                        }
                        else{
                            var blockers = meeting.blockers;
                        }
                        const participants = meeting.participants.map(item => item.email);
                        const tags = meeting.tags.map(item => item.name);
                        var blockers = blockers.map(item => item.description);
                        var tasks = tasks.map(item => item.description);

                            setFormData({
                            title: meeting.title,
                            meeting_link: meeting.meeting_link,
                            recording_link: meeting.recording_link,
                            starting_time: starting_time,
                            ending_time: ending_time,
                            deadline: deadline,
                            agenda: meeting.agenda,
                            tasks: tasks || [''],
                            notes: meeting.notes,
                            blockers: blockers || [''],
                            participants: participants || [''],
                            tags: tags || [''],
                        });
                    } else {
        
                    }
                } else { 
        
                }
            } catch (error) {
               
            } 
        };
    fetchData();
    }, [token, meetingId, location?.pathname]);
    
    return (
        <>
            <Header></Header>
            <Container className='px-lg-5 px-3' style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <Form >
                    <div className='d-flex flex-xl-row flex-column justify-content-between align-items-lg-start align-items-center'>
                        <ResponsiveUpdateEvent>
                            <div style={EventInputBorder} className='mb-3 py-1 px-2'>
                                <span>{formData.title}</span>
                            </div>
                            <div className='d-flex flex-row gap-4'>
                                <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={Time} roundedCircle />
                                <div className='d-flex flex-column justify-content-between align-items-center gap-2'>
                                    <CustomDateTimePicker 
                                        value={formData.starting_time} 
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
                                <Col className='mt-2'>
                                    {formData.participants.map((participant, index) => (
                                    <Badge
                                        key={index}
                                        className="bg-light"
                                        style={{ border: '1px solid #49454F33', margin: '5px', cursor: 'pointer', padding: '6px', borderRadius: '4px' }}
                                    >
                                        <span style={{ color: '#3C4043', fontFamily: 'Graphik', fontWeight: '400', fontSize: '12px', lineHeight: '16px' }}>{participant}</span>
                                    </Badge>
                                    ))}
                                </Col>
                            </Row>
                            <Row className='mt-3 ml-5 gap-1'>
                            </Row>
                            <Row className='mt-4'>
                                <Col lg={1} xs={1} className='d-flex align-items-center'>
                                    <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={link} />
                                </Col>
                                <Col lg={11} xs={11}>
                                    <div style={EventInputBorder2} className='p-2'>
                                        <a href={formData.meeting_link} target="_blank" style={{ wordBreak: "break-all" }}>{formData.meeting_link}</a>
                                    </div>
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
                            <Row className='mt-3 gap-1'>
                                <Form.Group className="">
                                    <Form.Control
                                        as="textarea"
                                        id="agenda"
                                        name="agenda"
                                        placeholder="Add Meeting Agenda"
                                        value={formData.agenda}
                                        required
                                        style={EventInputBorder2}
                                        className='border-bottom'
                                        rows={3} 
                                    />
                                </Form.Group>
                                {/* <div style={EventInputBorder2} className='py-2'>
                                    <span>{formData.agenda}</span>
                                </div> */}
                            </Row>
                        </ResponsiveUpdateEvent>
                        <ResponsiveUpdateEvent>
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
                            <Row className='mt-4 d-flex align-items-center'>
                                <Col lg={1} xs={1}>
                                    <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={list} />
                                </Col>
                                <Col lg={11} xs={11}>
                                    <H1
                                        children="To-Do"
                                        color="#3C4043"
                                        fontSize="14px"
                                        lineHeight="18px"
                                        fontWeight="500"
                                        fontFamily="Graphik"
                                        margin="0"
                                    />
                                </Col>
                                <Col className='mt-2'>
                                    {formData.tasks.map((task, index) => (
                                    <Badge
                                        key={index}
                                        className="bg-light"
                                        style={{ border: '1px solid #49454F33', margin: '5px', cursor: 'pointer', padding: '6px', borderRadius: '4px' }}
                                    >
                                        <span style={{ color: '#3C4043', fontFamily: 'Graphik', fontWeight: '400', fontSize: '12px', lineHeight: '16px' }}>{task}</span>
                                    </Badge>
                                    ))}
                                </Col>
                            </Row>
                            <Row className='mt-3 gap-1'>
                            </Row>
                            <Row className='mt-4 d-flex align-items-center'>
                                <Col lg={1} xs={1}>
                                    <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={comment} />
                                </Col>
                                <Col lg={11} xs={11}>
                                    <H1
                                        children="Notes"
                                        color="#3C4043"
                                        fontSize="14px"
                                        lineHeight="18px"
                                        fontWeight="500"
                                        fontFamily="Graphik"
                                        margin="0"
                                    />
                                </Col>
                            </Row>
                            <Row className='mt-3 gap-1'>
                                <Form.Group className="">
                                    <Form.Control
                                        as="textarea"
                                        id="notes"
                                        name="notes"
                                        placeholder="Add Meeting Notes"
                                        value={formData.notes}
                                        style={EventInputBorder2}
                                        className='border-bottom'
                                        rows={3} 
                                    />
                                </Form.Group>
                                {/* <div style={EventInputBorder2} className='py-2'>
                                    <span>{formData.notes}</span>
                                </div> */}
                            </Row>
                            <Row className='mt-4 d-flex align-items-center'>
                                <Col lg={1} xs={1}>
                                    <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={block} />
                                </Col>
                                <Col lg={11} xs={11}>
                                    <H1
                                        children="Blocker"
                                        color="#3C4043"
                                        fontSize="14px"
                                        lineHeight="18px"
                                        fontWeight="500"
                                        fontFamily="Graphik"
                                        margin="0"
                                    />
                                </Col>
                                <Col className='mt-2'>
                                    {formData.blockers.map((blocker, index) => (
                                    <Badge
                                        key={index}
                                        className="bg-light"
                                        style={{ border: '1px solid #49454F33', margin: '5px', cursor: 'pointer', padding: '6px', borderRadius: '4px' }}
                                    >
                                        <span style={{ color: '#3C4043', fontFamily: 'Graphik', fontWeight: '400', fontSize: '12px', lineHeight: '16px' }}>{blocker}</span>
                                    </Badge>
                                    ))}
                                </Col>
                            </Row>
                            <Row className='mt-3 gap-1'>
                            </Row>
                        </ResponsiveUpdateEvent>
                        <ResponsiveUpdateEvent>
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
                                    <div style={EventInputBorder2} className='p-2'>
                                        <a href={formData.recording_link} target="_blank" style={{ wordBreak: "break-all" }}>{formData.recording_link}</a>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col lg={1} xs={1} className='d-flex align-items-center'>
                                    <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={deadline} />
                                </Col>
                                <Col lg={11} xs={11}>
                                    <CustomDateTimePicker 
                                        value={formData.deadline} 
                                    />
                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col lg={1} xs={1} className='d-flex'>
                                    <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={tags} />
                                </Col>
                                <Col lg={11} xs={11}>
                                    <H1
                                        children="Available Tags"
                                        color="#3C4043"
                                        fontSize="14px"
                                        lineHeight="18px"
                                        fontWeight="500"
                                        fontFamily="Graphik"
                                        margin="0"
                                    />
                                </Col>
                                <Col className='mt-2'>
                                    {formData.tags.map((tag, index) => (
                                    <Badge
                                        key={index}
                                        className="bg-light"
                                        style={{ border: '1px solid #49454F33', margin: '5px', cursor: 'pointer', padding: '9px 8px', borderRadius: '4px' }}
                                    >
                                        <span style={{ color: '#3C4043', fontFamily: 'Graphik', fontWeight: '400', fontSize: '12px', lineHeight: '16px' }}>{tag}</span>
                                    </Badge>
                                    ))}
                                </Col>
                            </Row>
                        </ResponsiveUpdateEvent>
                    </div>
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
                    </div>
                </Form> 
            </Container>
        </>
    );
};

export default ViewEvent;