import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [notification, setNotification] = React.useState(null);
    const [state, setState] = React.useState({
        submitting: false,
        succeeded: false,
        errors: []
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setState({ ...state, submitting: true });

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xqedlrrr", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.reset();
                setState({ submitting: false, succeeded: true, errors: [] });
            } else {
                const data = await response.json();
                setState({ submitting: false, succeeded: false, errors: data.errors });
            }
        } catch (error) {
            setState({ submitting: false, succeeded: false, errors: [{ message: "Something went wrong. Please try again." }] });
        }
    };

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
                    {state.succeeded ? (
                        <div className="success-message">
                            <h3>Your message is sent to Soumyajit!</h3>
                            <p>Thanks for reaching out. I'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
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

                            <button type="submit" className="btn-send" disabled={state.submitting}>
                                {state.submitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
                            </button>
                            {state.errors && state.errors.length > 0 && (
                                <div className="error-message">
                                    {state.errors.map((error, index) => (
                                        <p key={index}>{error.message}</p>
                                    ))}
                                </div>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
