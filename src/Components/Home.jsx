import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Projects from './Projects';
import Experience from './Experience';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import { SiMedium } from 'react-icons/si';
import './Home.css';

const Home = ({ toggleTheme }) => {
    return (
        <div className="home-wrapper">
            <section className="hero-section" id="home">
                <div className="hero-content">
                    <h1 className="hero-greeting">Hi, I am <span className="highlight-name">Soumyajit</span></h1>
                    <h2 className="hero-subtitle">
                        A  <span className="highlight-role">Frontend Developer</span> transforming ideas into stunning <br />
                        digital experiences. Let’s create something amazing!
                    </h2>

                    <div className="social-icons-row">
                        <a href="https://github.com/4soumya9" className="social-circle"><FaGithub /></a>
                        {/* <a href="https://medium.com" className="social-circle"><SiMedium /></a> */}
                        <a href="https://www.linkedin.com/in/soumyajit-saha-9b4186191/" className="social-circle"><FaLinkedinIn /></a>
                        <a href="https://wa.me/917003569197" className="social-circle" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                        {/* <a href="https://twitter.com" className="social-circle"><FaTwitter /></a> */}
                    </div>
                </div>

                {/* Background Skills Cloud */}
                <div className="bg-skills-container">
                    <div className="bg-skill-badge pill">HTML5</div>
                    <div className="bg-skill-badge rect">JAVASCRIPT</div>
                    <div className="bg-skill-badge circle">CSS3</div>
                    <div className="bg-skill-badge pill">REACT</div>
                    <div className="bg-skill-badge rect">TAILWIND</div>
                    <div className="bg-skill-badge rect">NEXT.JS</div>
                    <div className="bg-skill-badge pill">TYPESCRIPT</div>
                    <div className="bg-skill-badge circle">REDUX</div>
                    <div className="bg-skill-badge pill">FIREBASE</div>
                    <div className="bg-skill-badge rect">GIT</div>
                    <div className="bg-skill-badge pill">AZURE</div>
                </div>

                {/* Background decorative elements could go here */}
                <div className="bg-gradient-orb"></div>
            </section>

            {/* Projects Section */}
            <div id="projects">
                <Projects />
            </div>

            {/* Experience Section */}
            <div id="experience">
                <Experience />
            </div>

            {/* About Section */}
            <div id="about">
                <About />
            </div>

            {/* Skills Section */}
            <div id="skills">
                <Skills />
            </div>

            {/* Contact Section */}
            <div id="contact">
                <Contact />
            </div>

        </div>
    );
};

export default Home;
