import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaPhoneAlt, FaEnvelope, FaSearch, FaFacebookF, FaLinkedinIn, FaCaretDown } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsMicrosoftTeams } from 'react-icons/bs';
import logo from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Buyer', path: '/buyer' },
        { name: 'Sellers', path: '/sellers' },
        { name: 'Faq', path: '/faq' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Resources', path: '/resources' },
        { name: 'Tracking', path: '/tracking' },
    ];

    return (
        <header className="header-section">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="top-bar-container">
                    <div className="top-bar-left">
                        <span className="top-bar-item"><FaPhoneAlt className="icon-small" /> +91-22-6631 7270 / 71</span>
                        <span className="top-bar-item"><FaEnvelope className="icon-small" /> sales@worldofsteel.com</span>
                    </div>
                    <div className="top-bar-right">
                        <div className="search-icon-box"><FaSearch /></div>
                        <div className="top-social-icons">
                            <a href="/"><FaFacebookF /></a>
                            <a href="/"><FaXTwitter /></a>
                            <a href="/"><BsMicrosoftTeams /></a>
                            <a href="/"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="World of Steel" />
                    </Link>

                    <div className="menu-icon" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>

                    <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={toggleMenu}>
                                <FaHome size={20} className="home-icon" />
                            </Link>
                        </li>
                        {navLinks.map((link, index) => (
                            <li key={index} className="nav-item">
                                <Link to={link.path} className="nav-links" onClick={toggleMenu}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}

                        {/* Account Button (Mobile) */}
                        <li className="nav-item mobile-only">
                            <Link to="/login" className="nav-links" onClick={toggleMenu}>Log In</Link>
                        </li>
                        <li className="nav-item mobile-only">
                            <Link to="/signup" className="nav-links" onClick={toggleMenu}>Sign Up</Link>
                        </li>
                    </ul>

                    {/* Account Button (Desktop) */}
                    <div className="nav-btn-container">
                        <div className="account-dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                            <button className="btn-account">
                                ACCOUNT <FaCaretDown />
                            </button>
                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    <Link to="/login" className="dropdown-link">Log In</Link>
                                    <Link to="/signup" className="dropdown-link">Sign Up</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
