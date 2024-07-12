import React, { useState } from 'react';
import { Col, Container, Nav, Navbar, Row, FormControl, Form, Button, NavDropdown, Offcanvas, Image} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Bird from '../assets/image/bird.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { userInfo } from '../Store/Reducers/userReducer';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState([])

    const handleMenuClose = () => setShowMenu(false);
    const handleMenuShow = () => setShowMenu(true);

    const handleLogout = () => {
        localStorage.removeItem("Loggedin");
        localStorage.removeItem("jwt_token");
        localStorage.removeItem('id');
        localStorage.removeItem('refreshToken');
        dispatch(userInfo(data));
        navigate('/login');
    }

    const {userData} = useSelector(state=>state.userData);

    return (
        <>
            <Navbar expand="lg" style={{height:'70px',background:'#edf3f5'}}>
                <Container style={{fontFamily:'Graphik'}}>
                    <Navbar.Brand as={Link} to='/home' style={{color:'#49454F',fontFamily:'Graphik',fontSize:'28px',fontWeight:'500',lineHeight:'40px'}}>Meeting App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleMenuShow} />
                    <Navbar.Collapse id="basic-navbar-nav" className='d-none d-lg-block'>
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav className="" style={{fontFamily:'Graphik',fontWeight:'500'}}>
                        <Nav.Link type='submit' onClick={handleLogout}>Logout</Nav.Link>
                        <NavDropdown title="Profile" className='dropstart' id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">{userData.email}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Offcanvas show={showMenu} onHide={handleMenuClose}>
                <Offcanvas.Header  style={{fontFamily:'Graphik',fontWeight:'500',fontSize:'20px',background:'#edf3f5'}} closeButton>
                <Offcanvas.Title style={{color:'#49454F',fontFamily:'Graphik',fontSize:'24px',fontWeight:'500',lineHeight:'40px'}}>Meeting App</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="flex-column justify-content-center align-items-center" style={{fontFamily:'Graphik',fontWeight:'500'}}>
                    {/* <Image height={100} width={100} src={Bird} roundedCircle /> */}
                    <Nav.Link as={Link} to="/home" className='mt-2' onClick={handleMenuClose}>Home</Nav.Link>
                    <Nav.Link type='submit' onClick={handleLogout}>Logout</Nav.Link>
                </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
        
    );
};

export default Header;