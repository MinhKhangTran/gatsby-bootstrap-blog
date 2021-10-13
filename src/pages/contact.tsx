import React, { useState } from "react";
import {
  Container,
  FloatingLabel,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

// markup
const ContactPage = ({ location }) => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e: any): void => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <Layout>
      <SEO title="Contact" />
      <Hero
        location={location.pathname}
        title="Contact Me"
        subtitle="Connect with me"
      />
      <section className="contact mt-5">
        <p className="lead">
          Want to get in touch? Fill out the form below and send me a message
          and I will get back to you as soon as possible!
        </p>

        <Row className="">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Col className="mx-auto">
              <FloatingLabel
                className="mb-4"
                controlId="floatingName"
                label="Name"
              >
                <Form.Control required type="text" placeholder="full name" />
                <Form.Control.Feedback type="invalid">
                  Please provide a name
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col className="mx-auto">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-4"
              >
                <Form.Control
                  required
                  type="email"
                  placeholder="name@example.com"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide an email
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col className="mx-auto">
              <FloatingLabel controlId="floatingTextarea" label="Message">
                <Form.Control
                  required
                  as="textarea"
                  placeholder="Leave a message here"
                  style={{ height: "150px" }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a message
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col className="mx-auto">
              <Button type="submit" className="my-5">
                Submit form
              </Button>
            </Col>
          </Form>
        </Row>
      </section>
    </Layout>
  );
};

export default ContactPage;
