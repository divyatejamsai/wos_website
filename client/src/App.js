import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={() => <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h1>About Page</h1></div>} />
                <Route path="/products" component={() => <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h1>Products Page</h1></div>} />
                <Route path="/buyer" component={() => <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h1>Buyer Page</h1></div>} />
                <Route path="/sellers" component={() => <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h1>Sellers Page</h1></div>} />
                <Route path="/faq" component={() => <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h1>FAQ Page</h1></div>} />
                <Route path="/contact" component={() => <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h1>Contact Page</h1></div>} />
                <Route path="/blogs" component={() => <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h1>Blogs Page</h1></div>} />
                <Route path="/resources" component={() => <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h1>Resources Page</h1></div>} />
                <Route path="/tracking" component={() => <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h1>Tracking Page</h1></div>} />
                <Route path="/login" component={() => <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h1>Login / Sign Up Page</h1></div>} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
