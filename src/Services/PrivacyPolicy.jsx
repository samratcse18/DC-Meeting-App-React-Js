import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const PrivacyPolicy = () => {
    return (
        <Container>
            <Row className='mx-5 my-2'>
                <Col>
                <div>
                    <p style={{ fontSize: '24px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>Privacy Policy</strong></p>
                    <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        This Privacy Policy outlines our practices and guidelines for collecting, using, and disclosing your information when you use our Service. It also informs you about your privacy rights and how the law safeguards your data.
                    </p>
                    <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        We use your personal information to deliver and enhance our Service. By utilizing the Service, you consent to the collection and use of your information as detailed in this Privacy Policy.
                    </p>
                </div>

                <p style={{ fontSize: '20px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>Definitions and Interpretations</strong></p>
                <ListGroup as="ul">
                    <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        In this privacy and policy the following terms shall carry the following meanings:
                    </p>
                    <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        <strong>Website & application:</strong> The website refers to the website known as DC Meeting App and application refers to the application known as ‘DC Meeting App’ that you are currently using. Your data is only internally used in our company.
                    </ListGroup.Item>
                    <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        <strong>Data:</strong> ‘Data’ refers to all the collective information that you provide to us by the means of the website & application.
                    </ListGroup.Item>
                    <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        <strong>Personal information:</strong> Any information regarding an identified individual or identifiable individual
                    </ListGroup.Item>
                    <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        <strong>Service:</strong> refer to the features, and functions that we provide to you through our website and application. These include any features or functionalities that allow you to interact with our platform and achieve the intended purposes of our application.
                    </ListGroup.Item>
                </ListGroup>

                <p style={{ fontSize: '20px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>Types of data collected</strong></p>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        Email address
                    </ListGroup.Item>
                    <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        We allow you to create an account using normal sign up and google sign up and login using normal sign in or our services with a third-party social media service known as Google. We may collect your information associated with your Normal sign in email or Google account such as your email address.
                    </ListGroup.Item>
                    <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        Event information which includes event title, event dates and times, Agenda, Meeting link, Participants or attendees email addresses.
                    </ListGroup.Item>
                </ListGroup>

                <p style={{ fontSize: '20px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>Use of your personal data</strong></p>
                <ListGroup as="ul">
                    <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        We shall use your personal data for the following purposes:
                    </p>
                    <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        To manage your registration using Normal sign up or Google Sign up as a user of our service.
                    </ListGroup.Item>
                    <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        To provide you access to your event information outside of our website and application on third-party social media services known as Google Calendar.
                    </ListGroup.Item>
                    <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        Google Calendar uses only View and edit events on all your calendars.
                    </ListGroup.Item>
                </ListGroup>
                <div>
                    <p style={{ fontSize: '24px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>Retention of your personal data</strong></p>
                    <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        Your Personal Data will be kept by the Company for internal usage, only for the duration required to achieve the goals mentioned in this Privacy Policy. Additionally, we may retain and use your data to meet legal obligations, resolve conflicts, and enforce our legal agreements.
                    </p>
                </div>
                <div>
                    <p style={{ fontSize: '24px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>Security of your personal data</strong></p>
                    <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        The security of your personal data is important to Us. We maintain reasonable physical, electronic and procedural safeguards to protect your information. When we collect data through the Site, we collect your personal details on a secure server. Once your information is in our possession, we adhere to our security guidelines to protect it against unauthorized access. However, by using the website and application, the users accept the inherent security implications of data transmission over the internet and the World Wide Web which cannot always be guaranteed as completely secure, and therefore, there would always remain certain inherent risks regarding use of the Platform. Users are responsible for ensuring the protection of Email address records for their account.
                    </p>
                    <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        Our service may contain links that may redirect you to other websites which are not operated by us. We urge you to review the privacy policies of those websites.
                    </p>
                </div>
                <div>
                    <p style={{ fontSize: '24px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>Changes to this privacy policy</strong></p>
                    <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        We may change our privacy policies from time to time. The changes shall be reflected on this page and you will be deemed to have accepted the terms of the Privacy Policy on your first use of the website & application following the alterations. It is strongly recommended to check this page often to ensure you are up-to date with the current privacy policies.
                    </p>
                </div>
                <div>
                    <p style={{ fontSize: '24px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>Contacting us</strong></p>
                    <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
                        If you have any questions about our Site or this Privacy Policy, please contact us by email at <span style={{color:'blue'}}>tarun@dcastalia.com</span>, or by post at Dcastalia Limited; house 91, Road 4, Block B, Banani, Dhaka. Please ensure that your query is clear, particularly if it is a request for information about the data we hold about you.
                    </p>
                </div>
                
                </Col>
            </Row>
        </Container>
    );
};

export default PrivacyPolicy;
