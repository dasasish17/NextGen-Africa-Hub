import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const PaymentInfoSection = () => {
  return (
    <section id="payment-info">
      <Container>
        <Row>
          <Col>
            <h2>Payment Information</h2>
            <p>Secure Payment Gateway: Options for credit card, PayPal, direct debit, etc.</p>
            <Image src="payment-icons.png" alt="Payment Methods" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%' }} />
            <p>Icons of accepted payment methods for visual reassurance.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PaymentInfoSection;
