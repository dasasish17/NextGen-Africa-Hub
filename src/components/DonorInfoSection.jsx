import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const DonorInfoSection = () => {
  return (
    <section id="donor-info">
      <Container>
        <Row>
          <Col>
            <h2>Donor Information Form</h2>
            <Form id="donor-form">
              <Form.Group>
                <Form.Label htmlFor="full-name">Full Name:</Form.Label>
                <Form.Control type="text" id="full-name" name="full-name" required />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email">Email Address:</Form.Label>
                <Form.Control type="email" id="email" name="email" required />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="mailing-address">Mailing Address:</Form.Label>
                <Form.Control type="text" id="mailing-address" name="mailing-address" required />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="phone-number">Phone Number:</Form.Label>
                <Form.Control type="tel" id="phone-number" name="phone-number" required />
              </Form.Group>
              <Form.Check type="checkbox" name="newsletter" value="subscribe" label="Subscribe to our newsletter" />
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DonorInfoSection;
