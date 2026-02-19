import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Brand Section */}
                <div className="footer-brand">
                    <h2 className="brand-name">Soumyajit.</h2>
                </div>

                {/* Vertical Divider */}
                <div className="footer-divider"></div>

                {/* Role / Experience Section */}
                <div className="footer-section role-section">
                    <h3>Web Developer</h3>
                    <p>Frontend Developer</p>
                    <p className="exp-text">2+ Years Experience</p>
                </div>

                {/* Vertical Divider */}
                <div className="footer-divider"></div>

                {/* Navigation Links */}
                <div className="footer-section links-section">
                    <Link to="#home">Home</Link>
                    <Link to="#projects">My projects</Link>
                    <Link to="#about">About me</Link>
                    <Link to="#contact">Contact me</Link>
                </div>

                {/* Vertical Divider */}
                <div className="footer-divider"></div>

                {/* Social Media Section */}
                <div className="footer-section social-section">
                    <h3>Social Media Handles</h3>
                    <div className="social-icons">
                        <a href="https://github.com/4soumya9" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/soumyajit-saha-9b4186191/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="https://wa.me/917003569197" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                        {/* <a href="https://twitter.com/soumyajit4419" target="_blank" rel="noopener noreferrer"><FaTwitter /></a> */}
                        {/* <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> */}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p>Developed and Designed by <span className="designer-name">Soumyajit Saha</span></p>
            </div>
        </footer>
    );
};

export default Footer;
