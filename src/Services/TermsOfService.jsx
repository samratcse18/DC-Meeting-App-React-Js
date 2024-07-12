import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const TermsOfService = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p style={{ fontSize: '24px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>DC Meeting App Terms of Service</strong></p>

          <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>1. Introduction</strong></p>
          <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
            These Terms of Service ("Terms") govern your access to and use of the DC Meeting App website (the "Website"), owned and operated by DC Meeting App ("we," "us," or "our"). By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use the Website.
          </p>

          <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>2. User Accounts</strong></p>
          <ListGroup as="ul">
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              You may be required to create an account to access certain features of the Website.
            </ListGroup.Item>
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              You are responsible for maintaining the confidentiality of your account information and password. You are also responsible for all activities that occur under your account.
            </ListGroup.Item>
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              You agree to notify us immediately of any unauthorized use of your account or any other security breach.
            </ListGroup.Item>
          </ListGroup>

          <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>3. User Conduct</strong></p>
          <ListGroup as="ul">
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              You agree to use the Website in a lawful and respectful manner.
            </ListGroup.Item>
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              You agree not to use the Website for any purpose that is prohibited by these Terms, or that could damage or impair the Website.
            </ListGroup.Item>
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              You agree not to upload any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, obscene, hateful, or racially or ethnically offensive.
            </ListGroup.Item>
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              You agree not to interfere with or disrupt the Website or servers or networks connected to the Website.
            </ListGroup.Item>
          </ListGroup>

          <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>4. Google Sign-In</strong></p>
          <ListGroup as="ul">
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              The Website uses Google Sign-In for user authentication.
            </ListGroup.Item>
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              By using Google Sign-In, you agree to Google's API Terms of Service and Privacy Policy.
            </ListGroup.Item>
          </ListGroup>

          <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>5. Google Calendar API</strong></p>
          <ListGroup as="ul">
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              The Website uses the Google Calendar API to add meetings to participants' calendars with their permission.
            </ListGroup.Item>
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              We will only access calendars for the specific purpose of adding the meeting and will not store any calendar data.
            </ListGroup.Item>
          </ListGroup>

          <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>6. Intellectual Property</strong></p>
          <ListGroup as="ul">
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              The Website and its content, including but not limited to text, graphics, logos, images, and software, are the property of DC Meeting App or its licensors and are protected by copyright and other intellectual property laws.
            </ListGroup.Item>
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              You may not modify, publish, distribute, transmit, reproduce, create derivative works of, or commercially exploit any content from the Website without our prior written consent.
            </ListGroup.Item>
          </ListGroup>

          <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>7. Disclaimer</strong></p>
          <ListGroup as="ul">
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              The Website is provided "as is" and without warranties of any kind, express or implied.
            </ListGroup.Item>
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              We disclaim all warranties, including but not limited to, the warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </ListGroup.Item>
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              We do not warrant that the Website will be uninterrupted or error-free.
            </ListGroup.Item>
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              We do not warrant that the Website will be secure from unauthorized access, viruses, or other harmful components.
            </ListGroup.Item>
          </ListGroup>

          <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>8. Limitation of Liability</strong></p>
          <ListGroup as="ul">
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              We will not be liable for any damages arising out of or related to your use of the Website.
            </ListGroup.Item>
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              This includes, but is not limited to, direct, indirect, incidental, consequential, punitive, and special damages.
            </ListGroup.Item>
          </ListGroup>

          <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>9. Termination</strong></p>
          <ListGroup as="ul">
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              We may terminate your access to the Website for any reason, at any time, without notice.
            </ListGroup.Item>
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              We may also terminate these Terms at any time by posting the revised Terms on the Website.
            </ListGroup.Item>
          </ListGroup>

          <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>10. Governing Law</strong></p>
          <ListGroup as="ul">
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              These Terms will be governed by and construed in accordance with the laws of Dhaka, Bangladesh, without regard to its conflict of law provisions.
            </ListGroup.Item>
          </ListGroup>

          <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>11. Contact Us</strong></p>
          <ListGroup as="ul">
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
              If you have any questions or concerns about these Terms, please contact us at info@bestinbd.com.
            </ListGroup.Item>
          </ListGroup>
          <p style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }} className="mt-4"><strong>Important Note:</strong></p>
          <ListGroup as="ul" style={{marginBottom:'20px'}}>
            <ListGroup.Item as="li" style={{ fontSize: '16px', fontFamily: '"Times New Roman", serif' }}>
            This is a sample Terms of Service document and may not be suitable for all situations. You should consult with a lawyer to ensure that your Terms of Service are appropriate for your specific business needs and comply with all applicable laws.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsOfService;
