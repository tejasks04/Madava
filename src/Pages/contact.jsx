import { FaPhone, FaEnvelope } from 'react-icons/fa';
import '../Styles/Contact.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      formRef.current,
      'your_public_key'
    ).then(() => {
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 4000);
    }).catch(err => console.error('Email JS Error:', err));
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Maddy</h1>
      <div className="contact-wrapper">
        <div className="contact-card info">
          <h2>Get in Touch</h2>
          <p><FaPhone className="icon" /> +91 9876543210</p>
          <p><FaEnvelope className="icon" /> maddy@gmail.com</p>
          <div className="map-responsive mt-4">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609870652!2d72.74109983709067!3d19.082197839564906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f1e5f207d%3A0xe25fbeff499fb491!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620989123771!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="contact-card form">
          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
            {sent && <p className="text-success mt-3">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
