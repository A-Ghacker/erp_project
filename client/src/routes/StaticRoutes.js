import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/static_pages/Home';
import About from '../pages/static_pages/About';
import Contact from '../pages/static_pages/Contact';


function StaticRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>

    )
}

export default StaticRoutes