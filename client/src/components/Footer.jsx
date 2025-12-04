import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsMicrosoftTeams } from 'react-icons/bs';
import isoCert from '../assets/iso_cert.png';
import fieoCert from '../assets/fieo_cert.png';
import mraiCert from '../assets/mrai_cert.png';
import mapIndia from '../assets/map_india.png';
import mapChina from '../assets/map_china.png';
import mapKorea from '../assets/map_korea.png';
import mapJapan from '../assets/map_japan.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Certification & Membership Section */}
                    <div className="footer-section">
                        <h3>Certification & Membership</h3>
                        <div className="underline"></div>
                        <div className="logos-container">
                            <img src={isoCert} alt="ISO Certification" className="cert-logo" />
                            <img src={fieoCert} alt="FIEO Certification" className="cert-logo" />
                            <img src={mraiCert} alt="MRAI Certification" className="cert-logo" />
                        </div>
                    </div>

                    {/* Source From Regions Section */}
                    <div className="footer-section">
                        <h3>Source From Regions</h3>
                        <div className="underline"></div>
                        <div className="regions-container">
                            <div className="region-item">
                                <img src={mapIndia} alt="India" className="region-map" />
                            </div>
                            <div className="region-item">
                                <img src={mapChina} alt="China" className="region-map" />
                            </div>
                            <div className="region-item">
                                <img src={mapKorea} alt="Korea" className="region-map" />
                            </div>
                            <div className="region-item">
                                <img src={mapJapan} alt="Japan" className="region-map" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Contact & Legal Section */}
                <div className="footer-bottom">
                    <div className="footer-contact-row">
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Use</a>
                        <span className="contact-item"><FaPhoneAlt className="icon-small" /> +91-22-6631 7270 / 71</span>
                        <span className="contact-item"><FaEnvelope className="icon-small" /> sales@worldofsteel.com</span>
                    </div>

                    <div className="footer-copyright-row">
                        <p>World of Steel ® is a Registered Trademark in USA, China, India and EU</p>
                    </div>

                    <div className="footer-social-row">
                        <a href="/" className="social-icon"><FaFacebookF /></a>
                        <a href="/" className="social-icon"><FaXTwitter /></a>
                        <a href="/" className="social-icon"><BsMicrosoftTeams /></a>
                        <a href="/" className="social-icon"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
