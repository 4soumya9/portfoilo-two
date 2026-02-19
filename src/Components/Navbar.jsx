import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Soumyajit.</div>

            <div className={`navbar-center ${isMenuOpen ? 'active' : ''}`}>
                <Link to="#home" onClick={closeMenu}>Home</Link>
                <Link to="#projects" onClick={closeMenu}>Featured projects</Link>
                <Link to="#experience" onClick={closeMenu}>Experience</Link>
                <Link to="#about" onClick={closeMenu}>About me</Link>
                <Link to="#skills" onClick={closeMenu}>Skills</Link>
                <Link to="#contact" onClick={closeMenu}>Contact</Link>
            </div>

            <div className="navbar-right">
                {/* Resume Button */}
                <div className="desktop-resume">
                    <a href="https://drive.google.com/file/d/1yxT4usEa3A_SzvEkMQCpGi3JzETtkM7G/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-resume">
                        View Resume <FaBriefcase size={14} />
                    </a>
                </div>

                {/* Theme Toggle */}
                <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                    {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
                </button>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
