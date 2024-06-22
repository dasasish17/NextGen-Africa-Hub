import React from 'react';
import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';

const DonateSection = () => {
  return (
    <section id="donate">
      <Container>
        <Row>
          <Col>
            <h2 style={{ color: '#e28743' }}>Support Our Cause</h2>
            <p>"Your contributions make a difference"</p>
            <p>Brief Description: A short paragraph explaining the importance of donations and their impact.</p>
            <h3 style={{ color: '#e28743' }}>Consider making a recurring donation to maximize your impact!</h3>
            <div className="donation-options" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1rem' }}>
              <Button variant="outline-secondary" className="donation-frequency">One-time</Button>
              <Button variant="outline-secondary" className="donation-frequency">Monthly</Button>
              <Button variant="outline-secondary" className="donation-frequency">Quarterly</Button>
              <Button variant="outline-secondary" className="donation-frequency">Annually</Button>
            </div>
            <div className="donation-amounts" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1rem' }}>
              <Button variant="outline-secondary" className="donation-amount">$25</Button>
              <Button variant="outline-secondary" className="donation-amount">$50</Button>
              <Button variant="outline-secondary" className="donation-amount">$100</Button>
              <Button variant="outline-secondary" className="donation-amount">$250</Button>
              <FormControl type="text" className="custom-amount" placeholder="$ Custom Amount" />
            </div>
            <h4 style={{ color: '#e28743' }}>Employer Donation Matching</h4>
            <FormControl type="text" className="employer-matching" placeholder="Search for company..." />
            <p>Type in your employer's name to find out if they can match your donations</p>
            <div className="donation-options-extra" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '1rem' }}>
              <Form.Check type="checkbox" label="Dedicate my donation in honor or in memory of someone" />
              <Form.Check type="checkbox" label="Write us a comment" />
              <Form.Check type="checkbox" label="Display your donation & comment on the donor wall" />
            </div>
            <Button className="donate-next">Next →</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DonateSection;
