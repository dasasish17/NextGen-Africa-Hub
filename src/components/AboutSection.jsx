import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col>
            <h1 style={{ color: '#e28743' }}>About Us</h1>
            <p><strong>Our mission</strong> is to empower African youth through comprehensive transition guidance, bridging the gap to higher education or careers via our hybrid platform. We offer innovative digital solutions, personalized mentorship, and local community engagement to foster student success and advance African society.</p>
            <p><strong>Our vision</strong> is to see a future where every African youth has access to the support and resources they need to successfully transition to higher education or the workforce.</p>
            <h2 style={{ color: '#e28743' }}>The Team</h2>
            <div className="team">
              <div className="team-member">
                <div className="profile-pic" style={{ width: '100px', height: '100px', backgroundColor: '#ccc', borderRadius: '50%', marginBottom: '0.5rem' }}></div>
                <p>Mildred Sifa Chome</p>
              </div>
              <div className="team-member">
                <div className="profile-pic" style={{ width: '100px', height: '100px', backgroundColor: '#ccc', borderRadius: '50%', marginBottom: '0.5rem' }}></div>
                <p>Belise Kunda Teta</p>
              </div>
              <div className="team-member">
                <div className="profile-pic" style={{ width: '100px', height: '100px', backgroundColor: '#ccc', borderRadius: '50%', marginBottom: '0.5rem' }}></div>
                <p>Lavender Awour Onditi</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
