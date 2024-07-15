import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
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
import Todo from '../../components/Todo';
import Blocker from '../../components/Blocker';
import Participant from '../../components/Participant';
import Tags from '../../components/Tags';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import ToDoNew from '../../components/ToDoNew';
import { toast } from 'react-toastify';
import BlockerNew from '../../components/BlockerNew';
import { baseUrl } from '../../Constant/Constant';


function parseAndFormatDate(dateString) {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date;
}

const UpdateEvent = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const [token, setToken] = useState(null);
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
                                var tasks = [];
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
                            
                            setFormData({
                            title: meeting.title,
                            meeting_link: meeting.meeting_link,
                            recording_link: meeting.recording_link,
                            starting_time: starting_time,
                            ending_time: ending_time,
                            deadline: deadline,
                            agenda: meeting.agenda,
                            tasks: tasks,
                            notes: meeting.notes,
                            blockers: blockers,
                            participants: meeting.participants || [''],
                            tags: meeting.tags || [''],
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


    const [ToDo, setToDo] = useState(['']);
    const [blocker, setBlocker] = useState(['']);
    const [participant, setparticipant] = useState(['']);
    const [tag, setTag] = useState(['']);

    const [formData, setFormData] = useState({
        title: '',
        meeting_link: '',
        recording_link: '',
        starting_time: new Date(),
        ending_time: new Date(),
        deadline: new Date()-new Date(),
        agenda: '',
        tasks: [],
        notes: '',
        blockers: [''],
        participants: [''],
        tags: [''],
    });
    

    function getparticipant(data) {
        setparticipant(data);
    }

    function getToDo(data) {
        setToDo(data);
    }

    function getBlocker(data) {
        setBlocker(data);
    }
    function getTag(data) {
        setTag(data);
    }
    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            participants: participant
        }));
    }, [participant]);

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            tasks: ToDo
        }));
    }, [ToDo]);

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            blockers: blocker
        }));
    }, [blocker]);

    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            tags: tag
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
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseUrl}meeting/edit-meeting-by-user/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'authorization': token
              },
              body: JSON.stringify(formData)
            });
            
            var Data = await response.json();
            var data = Data.data;
            if (response.ok) {
              navigate('/home');
              toast.success(`${Data.message}`);
            //   console.log('Edit event successfully:', data);
            } else {
                toast.error(Data.message || 'Something Went Wrong');
            }
          } catch (error) {
          }
        };

    return (
        <>
            <Header></Header>
            <Container className='px-lg-5 px-3' style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <Form onSubmit={handleSubmit}>
                    <div className='d-flex flex-xl-row flex-column justify-content-between align-items-lg-start align-items-center'>
                        <ResponsiveUpdateEvent>
                            <div className=''>
                                <Form.Group className="mb-3">
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
                            <div className='d-flex flex-row gap-4'>
                                <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={Time} roundedCircle />
                                <div className='d-flex flex-column justify-content-between align-items-center gap-2'>
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
                            <Row className='mt-3 ml-5 gap-1'>
                                <Participant data={formData.participants} getparticipant={getparticipant}/>
                            </Row>
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
                            <Row className='mt-3 gap-1'>
                                <Form.Group className="">
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
                                        rows={3} 
                                    />
                                </Form.Group>
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
                            </Row>
                            {/* <Row className='mt-3 gap-1'>
                                <Todo data={formData.tasks} getToDo={getToDo}></Todo>
                            </Row> */}
                            <Row className='mt-3 gap-1'>
                                <ToDoNew  data={formData.tasks} getToDo={getToDo}></ToDoNew>
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
                                        onChange={handleChange}
                                        // required
                                        style={EventInputBorder2}
                                        className='border-bottom'
                                        rows={3} 
                                    />
                                </Form.Group>
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
                            </Row>
                            {/* <Row className='mt-3 gap-1'>
                                <Blocker data={formData.blockers} getBlocker={getBlocker}></Blocker>
                            </Row> */}
                            <Row className='mt-3 gap-1'>
                                <BlockerNew  data={formData.blockers} getBlocker={getBlocker}></BlockerNew>
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
                                    <Form.Group className="">
                                        <Form.Control
                                            id="recording_link"
                                            name="recording_link"
                                            type="text"
                                            placeholder="Recording Link"
                                            value={formData.recording_link}
                                            onChange={handleChange}
                                            // required
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
                                        value={formData.deadline} 
                                        onChange={(date) => handleDateTimeChange('deadline', date)} 
                                    />
                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col lg={1} xs={1} className='d-flex'>
                                    <Image style={{ width: '24px', height: '24px',opacity:'70%' }} src={tags} />
                                </Col>
                                <Col lg={11} xs={11}>
                                    <Tags data={formData.tags} getTag={getTag}></Tags>
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
                        <Button type="submit" style={{ background: '#009975', width: '97px', height: '36px',border:'1px solid #009975' }}>
                            <H1
                                children="Update"
                                color="#FFFFFF"
                                fontSize="14px"
                                lineHeight="18px"
                                fontWeight="500"
                                fontFamily="Graphik"
                                margin="0"
                            />
                        </Button>
                    </div>
                </Form> 
            </Container>
        </>
    );
};

export default UpdateEvent;