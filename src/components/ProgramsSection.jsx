import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image2 from '../assets/images/Image2.png';

const ProgramsSection = () => {
  return (
    <section id="programs">
      <Container>
        <Row>
          <Col>
            <h2 style={{ color: '#e28743' }}>Programs & Services</h2>
            <br></br>
            <Image src={image2} alt="Programs image" className="center" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%' }} />
            <br></br>
            <p><strong>High School:</strong></p>
            <h3 style={{ color: '#e28743' }}>1. Explore Program (Freshman & Sophomore)</h3>
            <p>Our Explore program is tailored to high school students in their freshman and sophomore years. It will focus on career exploration and guidance, coupled with mentorship, to help students advance in their career literacy and have an advantage in pursuing their goals.</p>
            <ul>
              <li>Personal Development</li>
              <li>Leadership Development</li>
              <li>Mentorship</li>
              <li>Financial literacy</li>
              <li>Academic Guidance</li>
              <li>Courses introduction</li>
            </ul>
            <h3 style={{ color: '#e28743' }}>2. Group 2 (Junior & Seniors) & Individual Program</h3>
            <ul>
              <li>Personal Development</li>
              <li>Leadership Development</li>
              <li>Mentorship</li>
              <li>Financial literacy</li>
              <li>Academic Guidance</li>
              <li>Workshops for SAT</li>
              <li>Transition to college guidance</li>
              <li>Courses introduction</li>
            </ul>
            <br></br>
            <br></br>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProgramsSection;
