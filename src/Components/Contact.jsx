import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [notification, setNotification] = React.useState(null);

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text).then(() => {
            setNotification(`${type} copied to clipboard!`);
            setTimeout(() => {
                setNotification(null);
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div className="contact-wrapper">
            {notification && <div className="copy-notification">{notification}</div>}
            <div className="contact-header">
                <span className="sub-heading">GET IN TOUCH</span>
                <h2 className="main-heading">Contact <span className="highlight">me.</span></h2>
                <p className="contact-subtext">
                    I am currently open to full-time, contract or part-time opportunities in Front End Development.
                </p>
            </div>

            <div className="contact-card">
                {/* Left Side - Info */}
                <div className="contact-info">
                    <div className="contact-invite">
                        <h3 className="invite-heading">Interested in collaborating?</h3>
                        <p className="invite-text">
                            I’m a <span className="highlight-text">performance-focused frontend engineer</span> open to full-time roles, part-time engagements, and freelance projects.
                        </p>
                    </div>
                    <h4 className="info-subtitle">Let's Discuss.</h4>

                    <div
                        className="info-item clickable"
                        onClick={() => copyToClipboard('+91 7003569197', 'Phone Info')}
                        title="Click to copy phone number"
                    >
                        <div className="icon-box"><FaPhoneAlt /></div>
                        <span>+91 7003569197</span>
                    </div>
                    <div
                        className="info-item clickable"
                        onClick={() => copyToClipboard('4soumya19@gmail.com', 'Email')}
                        title="Click to copy email"
                    >
                        <div className="icon-box"><FaEnvelope /></div>
                        <span>4soumya19@gmail.com</span>
                    </div>
                    <div className="info-item">
                        <div className="icon-box"><FaMapMarkerAlt /></div>
                        <span>Bengaluru, India</span>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="contact-form-section">
                    <form
                        action="https://formspree.io/f/xqedlrrr"
                        method="POST"
                        className="contact-form"
                    >
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="Enter email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" placeholder="Enter message" required></textarea>
                        </div>

                        <button type="submit" className="btn-send">
                            Send Message <FaPaperPlane />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
