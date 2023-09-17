import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Contact.css';
import TrackVisibility from 'react-on-screen';
import axios from 'axios';


export const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
  const sendEmail = async (event) => {
    event.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await axios.post(
        // 'https://lucyporfoliobackend-a266447ba206.herokuapp.com/send-email',
        'http://localhost:5000/send-email',
        formDetails
      );
      console.log(formDetails);
    } catch (error) {
      // setMessage('An error occurred while sending the email.');
      console.error(error);
    }
    setButtonText("Send");
  };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={sendEmail}>
                  <Row>
                  <Col size={12} sm={6} className="px-1">
                      <input value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input value={formDetails.subject} placeholder="Subject" onChange={(e) => onFormUpdate('subject', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                    </Col>
                    <Col size={12} className="px-1">
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}