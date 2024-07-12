import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PrivacyPolicy = () => {
    return (
        <Container style={{marginTop:'20px',marginBottom:'20px'}}>
            <Row>
                <Col>
                    <h1 style={{ fontSize: '24px',marginBottom:'20px', fontFamily: 'Times New Roman, serif' }}>
                        <strong>DC Meeting App Privacy Policy</strong>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 style={{ fontSize: '16px', fontFamily: 'Times New Roman, serif' }}>
                        <strong>Introduction</strong>
                    </h2>
                    <p>
                        This Privacy Policy describes how DC Meeting App ("we," "us," or "our") collects,
                        uses, and discloses your information in connection with your use of our website,
                        DC Meeting App (the "Website").
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 style={{ fontSize: '16px', fontFamily: 'Times New Roman, serif' }}>
                        <strong>Information We Collect</strong>
                    </h2>
                    <ul>
                        <li>
                            <strong>User Accounts:</strong> When you sign in using Google Sign-In, we collect
                            your name, email address, and profile picture (if available) from Google. We do not
                            store your Google password.
                        </li>
                        <li>
                            <strong>Meeting Information:</strong> When you create a meeting, we collect
                            information about the meeting, such as title, date, time, and attendees' email
                            addresses.
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 style={{ fontSize: '16px', fontFamily: 'Times New Roman, serif' }}>
                        <strong>How We Use Your Information</strong>
                    </h2>
                    <ul>
                        <li>
                            <strong>User Accounts:</strong> We use your account information to identify you
                            when you use the Website and to provide you with access to certain features.
                        </li>
                        <li>
                            <strong>Meeting Information:</strong> We use meeting information to facilitate the
                            creation and management of meetings, including adding them to participants' Google
                            calendars with their permission.
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 style={{ fontSize: '16px', fontFamily: 'Times New Roman, serif' }}>
                        <strong>Information Sharing and Disclosure</strong>
                    </h2>
                    <ul>
                        <li>
                            <strong>Google Sign-In:</strong> We use Google Sign-In to authenticate users. We
                            adhere to Google's API Terms of Service and Privacy Policy regarding their data
                            practices. You can find more information about
                            <a href="https://policies.google.com/privacy?hl=en-US" target="_blank" rel="noopener noreferrer"> Google's Privacy Policy</a> here.
                        </li>
                        <li>
                            <strong>Google Calendar API:</strong> We use the Google Calendar API to add meetings to participants' calendars only with their permission. We access calendars for the specific purpose of adding the meeting and do not store any calendar data. You can find more information about Google's API Terms of Service and Privacy Policy
                            <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer"> here</a>.
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 style={{ fontSize: '16px', fontFamily: 'Times New Roman, serif' }}>
                        <strong>Data Retention</strong>
                    </h2>
                    <p>
                        We will retain your information for as long as your account is active or as needed to provide you with services. We will also retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 style={{ fontSize: '16px', fontFamily: 'Times New Roman, serif' }}>
                        <strong>Your Choices</strong>
                    </h2>
                    <ul>
                        <li>
                            You can access and update your account information at any time by signing in to your Google account.
                        </li>
                        <li>
                            You can withdraw your permission for us to access your Google Calendar at any time by managing your Google account settings.
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 style={{ fontSize: '16px', fontFamily: 'Times New Roman, serif' }}>
                        <strong>Security</strong>
                    </h2>
                    <p>
                        We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is ever completely secure.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 style={{ fontSize: '16px', fontFamily: 'Times New Roman, serif' }}>
                        <strong>Changes to this Privacy Policy</strong>
                    </h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Website.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 style={{ fontSize: '16px', fontFamily: 'Times New Roman, serif' }}>
                        <strong>Contact Us</strong>
                    </h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at{' '}
                        <strong>info@bestinbd.com</strong>.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 style={{ fontSize: '16px', fontFamily: 'Times New Roman, serif' }}>
                        <strong>Additional Considerations</strong>
                    </h2>
                    <ul>
                        <li>
                            It's important to consult with a lawyer to ensure your policy is compliant with all applicable laws and regulations, especially if you collect data from users in specific regions.
                        </li>
                        <li>
                            You may want to add a section about cookies and other tracking technologies used on your website, if applicable.
                        </li>
                        <li>
                            Consider including a section about children's privacy if your website is intended for or likely to be used by children.
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default PrivacyPolicy;
