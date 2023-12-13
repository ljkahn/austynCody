import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

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
    <div>
      <h3 className="text-center">
        Please send me the following information in your inquiry
      </h3>
      <div className="text-center">
        <p>name</p>
        <p>name</p>
        <p>name</p>
        <p>name</p>
        <p>name</p>
      </div>
      {isEmailSent && (
        <div className="alert alert-success" role="alert">
          Email sent successfully!
        </div>
      )}
      <form className="text-center" ref={formRef} onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
