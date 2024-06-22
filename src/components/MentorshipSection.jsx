import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image3 from '../assets/images/Image3.png';
const MentorshipSection = () => {
  return (
    <section id="mentorship">
      <Container>
        <Row>
          <Col>
            <h1 style={{ color: '#e28743' }}>Mentorship</h1>
            <br></br>
            <Image src={image3} alt="Mentorship image" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%' }} />
            <br></br>
            <h2 style={{ color: '#e28743' }}>Empowering African Youth through Guided Mentorship</h2>
            <p>At NextGen Africa Hub, we believe in the power of mentorship to transform lives and communities. Our mentorship program is designed to support high school students as they navigate their educational and career paths, ensuring they are well-equipped for the transition to higher education or the workforce.</p>
            <h3 style={{ color: '#e28743' }}>Looking To Be a Mentor?</h3>
            <br></br>
            <h4 style={{ color: '#e28743' }}>How the Mentorship Program Works</h4>
            <p>Our mentorship program connects students with experienced professionals who provide guidance, support, and insights into various career fields. The program is structured around regular meetings and interactive sessions, allowing mentees to gain valuable advice and develop essential skills for their future.</p>
            <h4 style={{ color: '#e28743' }}>Role of Mentors</h4>
            <ul>
              <li>Help students understand their educational and career options and make informed decisions about their futures.</li>
              <li>Empower youth with the confidence to tackle life’s challenges and opportunities.</li>
              <li>Encourage sound decision-making and foster a positive outlook on life.</li>
              <li>Support educational endeavors and celebrate each step of academic progress.</li>
              <li>Open doors to new ideas and experiences, broadening horizons.</li>
            </ul>
            <h3 style={{ color: '#e28743' }}>Role of Mentee</h3>
            <p>Mentees are proactive participants in their own development, responsible for:</p>
            <ul>
              <li>Engagement and Participation: Actively engaging in meetings and sessions with their mentors</li>
              <li>Feedback and Reflection</li>
              <li>Application of Learning</li>
            </ul>
            <h4 style={{ color: '#e28743' }}>To join NextGen Africa as a mentor or mentee, simply follow these steps:</h4>
            <ol>
              <li>Complete the Application</li>
              <li>Orientation</li>
              <li>Get Matched</li>
              <li>Meet Up</li>
              <li>Regular Engagement</li>
              <li>Feedback</li>
            </ol>
            <p>Start your mentorship journey at NextGen Africa today and make a lasting impact!</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MentorshipSection;
