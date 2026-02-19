import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "IntelliCredence",
            role: "Frontend Developer",
            duration: "Dec 2025 - Present",
            location: "Bengaluru",
            description: [
                "Optimized application performance by implementing strategic code splitting, reducing bundle size by 15% and improving Lighthouse load time metrics by 12%.",
                <span>Developed and enhanced production features for <a href="https://intelliconvene.com" target="_blank" rel="noopener noreferrer" className="highlight-name">intelliconvene.com</a> using React.js and Next.js, improving UI responsiveness and Core Web Vitals performance.</span>,
                "Increased page speed scores by 20%+ through performance optimization techniques including lazy loading, memoization, and image optimization.",
                "Built reusable, responsive UI components using Tailwind CSS and resolved critical production issues, reducing UI-related support tickets by 40% while accelerating feature delivery by 30%."
            ]
        },
        {
            company: "TCS",
            role: "Frontend Developer",
            duration: "Aug 2023 - Aug 2025",
            location: "Bengaluru",
            description: [
                "Contributed to the development and enhancement of the WBA application as part of the frontend team, utilizing React.js, ES6, RESTful APIs, HTML, CSS, JavaScript, and Jest for unit testing, while implementing SEO best practices to improve discoverability.",
                "Delivered new features and functional improvements that contributed to a 25% increase in user satisfaction, as measured through customer feedback surveys.",
                "Proactively identified and resolved production defects, reducing ticket volume by 90% within two months through systematic debugging and performance improvements.",
                "Collaborated within an Agile Scrum framework, actively participating in sprint planning, code reviews, and cross-functional coordination to ensure timely delivery of high-quality, well-tested software solutions."
            ]
        }
    ];

    return (
        <section className="experience-section" id="experience">
            <h2 className="section-title">Experience<span className="dot">.</span></h2>
            <div className="experience-container">
                {experiences.map((exp, index) => (
                    <div className="experience-card" key={index}>
                        <div className="experience-header">
                            <span className="experience-duration">{exp.duration}</span>
                            <h3 className="experience-role">
                                {exp.company} | {exp.role}
                                <span className="location">  {exp.location}</span>
                            </h3>
                        </div>
                        <div className="experience-details">
                            {exp.description.map((item, i) => (
                                <p key={i} className="experience-desc-item">{item}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
