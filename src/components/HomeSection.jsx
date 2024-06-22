import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image1 from '../assets/images/Image1.png';

const HomeSection = () => {
  return (
    <section id="home">
      <Container>
        <Row>
          <Col>
            <h1 style={{ color: '#e28743' }}>NextGen Africa Hub</h1>
            <p>At NextGen Africa Hub, we are empowering Africa's Next generation, One student at a time.</p>
            <Image src={image1} alt="Group of African students" className="center" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%' }} />
            <h2 style={{ color: '#e28743' }}>The Need/Problem</h2>
            <p>In Africa, where over 60% of the population is under the age of 25, the potential for growth and development is immense but largely untapped due to critical barriers in education and employment opportunities.</p>
            <p>Currently, youth unemployment rates across the continent are among the highest in the world, with some countries experiencing rates as steep as 30%.</p>
            <p>This is not just a reflection of economic stagnation but also of significant educational disparities that leave millions of young people without the skills or opportunities to advance.</p>
            <p>Rapid technological and economic changes are reshaping the global landscape, and Africa stands at a crossroads. Without access to quality education and career guidance, the next generation may miss the chance to join and positively influence the evolving global economy. Our program is designed to bridge this gap by providing comprehensive education support, career guidance, and mentorship to African youth. By equipping them with the necessary skills and knowledge, we prepare them not just to enter the workforce but to excel and lead.</p>
            <p>Our mission at NextGen Africa Hub is not merely to confront these challenges but to convert them into opportunities for growth, leadership, and innovation. We believe in the power of African youth to change not only their own lives but also to transform their communities and the continent at large into a thriving economic powerhouse.</p>
            <p>Join us as we strive to unlock this potential and foster a brighter future for Africa.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSection;
