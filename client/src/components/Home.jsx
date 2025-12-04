import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <h1>Welcome to World of Steel</h1>
                <p>Your trusted partner in the steel industry.</p>
                <div className="hero-btns">
                    <button className="btn btn-primary">Get Started</button>
                    <button className="btn btn-outline">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
