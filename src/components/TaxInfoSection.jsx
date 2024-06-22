import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

const TaxInfoSection = () => {
  return (
    <section id="tax-info">
      <Container>
        <Row>
          <Col>
            <h2>Tax Deductibility</h2>
            <p>Text on the tax benefits of donating.</p>
            <Form.Check type="checkbox" label="Request a tax receipt" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TaxInfoSection;
