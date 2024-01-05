import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const isContactPage = true;
function Contact() {
  const navigate = useNavigate();
  const formRef = useRef(); // Create a ref for the form
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the appropriate EmailJS template, service, and user ID
    emailjs
      .sendForm(
        "service_rl9e4x9",
        "template_974g5lq",
        formRef.current, // Use the ref here
        "o0rmbvpLvdPPViphx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
          // You can also clear the form here if needed
          setFormData({
            email: "",
            message: "",
          });
          //   // Optionally, navigate to a different page after the email is sent
          //   navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className={`sticky-icons ${isContactPage ? "contact-page" : "work-page"}`}
    >
      <h3 className="text-center inquiry">
        Please send me the following information in your inquiry
      </h3>

      {isEmailSent && (
        <div className="alert alert-success" role="alert">
          Email sent successfully!
        </div>
      )}
      {/* <Form ref={formRef} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <label>Email:</label>
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Name:</label>
            <input
              className="input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <label>Design Idea:</label>
            <input
              type="text"
              className="input"
              name="designIdea"
              value={formData.designIdea}
              onChange={handleChange}
              required
            />

            <label>Placement:</label>
            <input
              className="input"
              type="text"
              name="placement"
              value={formData.placement}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <label>Size:</label>
            <input
              className="input"
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
            />

            <label>Budget:</label>
            <input
              className="input"
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>

        <label>Black and Grey/Color:</label>
        <input
          className="input"
          type="text"
          name="colorPreference"
          value={formData.colorPreference}
          onChange={handleChange}
          required
        />

        <label>Any other details:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="button">
          Send Message
        </button>
      </Form> */}

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} sm={12} controlId="">
            <Form.Label>Design Idea</Form.Label>
            <Form.Control type="text" name="designIdea" placeholder="" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="">
            <Form.Label>Placement</Form.Label>
            <Form.Control type="text" name="placement" placeholder="" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Size</Form.Label>
            <Form.Control type="text" name="size" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Budget</Form.Label>
            <Form.Control type="text" name="budget" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Black and Grey/Color</Form.Label>
            <Form.Control type="text" name="colorPreference" />
          </Form.Group>
        </Row>

        <Button variant="dark" className="btn" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
