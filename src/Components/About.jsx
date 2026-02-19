import React from 'react';
import './About.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBriefcase } from 'react-icons/fa';
// Placeholder image - User should replace this
import profileImg from '../assets/portfoliophoto.png';

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-container">
                <div className="about-header">
                    <span className="sub-heading">MY BIO</span>
                    <h2 className="main-heading">About <span className="highlight">me.</span></h2>
                </div>

                <div className="about-content">
                    {/* Left Side - Image & Orbiting Icons */}
                    <div className="about-image-section">
                        <div className="orbit-container">
                            <div className="profile-circle">
                                <img src={profileImg} alt="Profile" className="profile-img" />
                            </div>

                            {/* Orbiting Icons */}
                            <div className="orbit-item item-1">
                                <FaHtml5 title="HTML5" />
                            </div>
                            <div className="orbit-item item-2">
                                <FaCss3Alt title="CSS3" />
                            </div>
                            <div className="orbit-item item-3">
                                <FaJs title="JavaScript" />
                            </div>
                            <div className="orbit-item item-4">
                                <FaReact title="React" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Bio Text */}
                    <div className="about-text-section">
                        <p>
                            Frontend Developer with 2+ years of experience building scalable, high-performance web applications using React.js, Next.js, and modern JavaScript (ES6+). I focus on developing responsive, user-centric interfaces with clean architecture and production-ready code.
                        </p>
                        <p>
                            Developed Netflix-GPT, an AI-powered movie platform integrating TMDB APIs, Firebase authentication, and optimized search functionality to enhance user experience and performance. Built a Food Ordering App with real-time cart management, secure authentication, and efficient global state handling using Redux Toolkit.
                        </p>
                        <p>
                            Improved application performance through techniques like code splitting, memoization, and optimized API calls, reducing load time and improving responsiveness. I’m passionate about delivering impactful digital products while continuously growing as a frontend engineer.
                        </p>

                        <a href="https://drive.google.com/file/d/1yxT4usEa3A_SzvEkMQCpGi3JzETtkM7G/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-resume-large">
                            View Resume <FaBriefcase />
                        </a>
                    </div>
                </div>

                {/* Technical Skills Section */}

            </div>
        </div>
    );
};

export default About;
