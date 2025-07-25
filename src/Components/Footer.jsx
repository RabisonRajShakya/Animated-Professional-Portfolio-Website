import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
import 'boxicons/css/boxicons.min.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="row align-items-start mt-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled fs-5">
              <li><Link to="/" className="text-white text-decoration-none"><i className='bx bx-home'></i> Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none"><i className='bx bx-user'></i> About</Link></li>
              <li><Link to="/resume" className="text-white text-decoration-none"><i className='bx bx-file'></i> Resume</Link></li>
              <li><Link to="/project" className="text-white text-decoration-none"><i className='bx bx-image'></i> Project</Link></li>
              <li><Link to="/services" className="text-white text-decoration-none"><i className='bx bx-cog'></i> Services</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none"><i className='bx bx-phone'></i> Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4 mb-md-0 fs-5">
            <h5 className="footer-title">About Me</h5>
            <p className="footer-text mb-0 text-capitalize">I am Rabison Raj Shakya, a passionate Islington College student and web developer dedicated to building modern, responsive, and user-friendly web applications.</p>
          </div>
          <div className="col-md-4 fs-5">
            <h5 className="footer-title">Contact</h5>
            <ul className="list-unstyled footer-text mb-0">
              <li>Phone: +977 9861492520</li>
              <li>Address: Kathmandu, Nepal</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3 fs-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <p className="mb-0 text-white">&copy; 2025 Rabison Rajshakya. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer