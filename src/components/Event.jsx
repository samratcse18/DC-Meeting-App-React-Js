import React, { useEffect, useState } from 'react';
import { Button, Col, Dropdown, Row } from 'react-bootstrap';
import H1 from './H1';
import { AddTag } from '../StyledComponents/Home.style';
import { format, isValid, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Event = ({ data, EventType }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    useEffect(() => {
        const jwtToken = localStorage.getItem('jwt_token');
        setToken(jwtToken);
    }, []);


    const handleDeleteWithAlert = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this Event ?");
        if (confirmed) {
          handleDelete(id);
        }
      };
    
    const handleDelete = async (id) => {
        try {
          const response = await fetch(`https://meetingapp.bestinbd.com/meeting/delete-meeting-by-user/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'authorization': token
            },
          });
    
          const Data = await response.json();
          const responseData = Data.data;
    
          if (response.ok) {
            // navigate('/');
            location.reload();
            toast.success(`${Data.message}`);
            // console.log('Edit event successfully:', responseData);
          } else {
            toast.error(Data.message || 'Something Went Wrong');
          }
        } catch (error) {
        }
      };


    const [userId, setUserId] = useState(null);
    useEffect(() => {
        const id = localStorage.getItem('id');
        setUserId(id);
    }, []);
        
    var startingTimeStr = data.starting_time; // replace with your actual data.starting_time
    var endingTimeStr = data.ending_time; // replace with your actual data.starting_time

    try {
        var starting_date = parseISO(startingTimeStr);
        var ending_date = parseISO(endingTimeStr);

        const customstarting_DateTimeFormat = 'EEE - dd MMM, yyyy hh:mm aa';
        var starting_time = format(starting_date, customstarting_DateTimeFormat);

        var starting_day = format(starting_date, 'EEE');
        var starting_numberOfDay = format(starting_date, 'dd');
        var starting_month = format(starting_date, 'MMM');
        var starting_time_hour = format(starting_date, 'hh:mm'); 

        var ending_time_hour = format(ending_date, 'hh:mm aa'); 
        
    } catch (error) {
        
    }
    return (
        <div className='mt-4' style={{border:'1px solid #49454F40',borderRadius:'4px'}}>
                    <div className='m-3'>
                        <Row>
                            <Col lg={1} xs={3}>
                                <div className='d-flex flex-column justify-content-center align-items-center text-center rounded h-100' style={{background:'#F0F4F9'}}>
                                    <h2 className='text-wrap mb-0' style={{color:'#3C4043',fontSize:'24px',lineHeight:'26.4px',fontFamily:'Graphik',fontWeight:'500'}}>{starting_numberOfDay}<br/>{starting_month}</h2>
                                </div>
                            </Col>
                            <Col lg={11} xs={9}>
                                <Row>
                                    <Col xs={10}>
                                        <Link style={{textDecoration:'none'}} to={'/view-event/'+data.id}>
                                        <H1
                                            children={data.title}
                                            color="#49454F"
                                            fontSize="20px"
                                            lineHeight="25px"
                                            fontWeight="500"
                                            fontFamily="Graphik"
                                        /></Link>
                                        <H1
                                            children={`${starting_time_hour} - ${ending_time_hour} `}
                                            color="#444444"
                                            fontSize="16px"
                                            lineHeight="17.6px"
                                            fontWeight="400"
                                            fontFamily="Graphik"
                                        />
                                        <div className='d-flex flex-row gap-2'>
                                            <H1
                                                children="Tags:"
                                                color="#49454FCC"
                                                fontSize="14px"
                                                lineHeight="21px"
                                                fontWeight="400"
                                                fontFamily="Graphik"
                                                margin="0px"
                                            />
                                            {data?.tags?.map((tag, index) => (
                                                <H1
                                                    key={index}
                                                    children={`#${tag.name}`}
                                                    color="#49454F"
                                                    fontSize="14px"
                                                    lineHeight="21px"
                                                    fontWeight="400"
                                                    fontFamily="Graphik"
                                                    margin="0px"
                                                />
                                            ))}
                                            {EventType === "myEvents" &&
                                                <Button style={AddTag} as={Link} to={'/update-event/'+data.id}>Add Tag</Button>
                                            }
                                        </div>
                                    </Col>
                                    <Col xs={2} className='d-flex justify-content-end' style={{fontFamily:'Graphik', fontWeight:'500',color:'#5F6368'}}>
                                        <style type="text/css">
                                            {`
                                            .custom-dropdown .dropdown-toggle::after {
                                                display: none;
                                            }
                                            `}
                                        </style>
                                        <Dropdown className="custom-dropdown">
                                            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{background:'none',border:'none',color:'#5F6368'}}>
                                                ┇
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {/* <Dropdown.Item as={Link} to={{
                                                        pathname: `/update-event/${data.id}`
                                                    }}>
                                                    View
                                                </Dropdown.Item> */}
                                                <Dropdown.Item  as={Link} to={'/view-event/'+data.id} style={{color:'#2323cc'}}>View</Dropdown.Item>
                                                {EventType === "myEvents" &&
                                                    <div>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item  as={Link} to={'/update-event/'+data.id} style={{color:'#f1c40f'}}>Edit</Dropdown.Item>
                                                        <Dropdown.Divider/>
                                                        <Dropdown.Item onClick={() => handleDeleteWithAlert(data.id)} style={{color:'#d61608'}} alart>Delete</Dropdown.Item>
                                                    </div>
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
    );
};

export default Event;