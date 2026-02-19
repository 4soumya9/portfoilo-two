import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills-wrapper">
            <div className="skills-container">
                <div className="skills-text-side">
                    <span className="sub-heading">SKILLS</span>
                    <h2 className="main-heading">Technical <span className="highlight">skills.</span></h2>
                    <div className="skills-desc">
                        <p><strong>Frontend:</strong> React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, React Hooks</p>
                        <p><strong>State Management:</strong> Redux Toolkit, Context API</p>
                        <p><strong>Backend & Database:</strong> Firebase (Authentication, Firestore), REST APIs</p>
                        <p><strong>Tools & Platforms:</strong> Git, GitHub, Vercel, Chrome DevTools</p>
                        <p><strong>Core Concepts:</strong> Component Architecture, Performance Optimization, Code Splitting, Memoization, Responsive Design, API Integration.</p>
                    </div>
                </div>

                <div className="skills-cloud-side">
                    <div className="skill-badge pill">HTML5</div>
                    <div className="skill-badge rect">JAVASCRIPT</div>
                    <div className="skill-badge circle">CSS3</div>
                    <div className="skill-badge pill">REACT</div>
                    <div className="skill-badge rect">TAILWIND CSS</div>
                    <div className="skill-badge rect">NEXT.JS</div>
                    <div className="skill-badge pill">TYPESCRIPT</div>
                    <div className="skill-badge circle">REDUX</div>
                    <div className="skill-badge pill">FIREBASE</div>
                    <div className="skill-badge rect">GIT</div>
                    <div className="skill-badge pill">AZURE</div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
