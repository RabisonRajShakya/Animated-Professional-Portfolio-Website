import React from 'react'
import '../assets/css/style.css'
import { NavLink } from 'react-router-dom'
import 'boxicons/css/boxicons.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top text-center">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-uppercase fw-bold fs-4 d-flex align-items-center" to="#">
          <span style={{
            display: 'inline-block',
            padding: '4px 16px',
            borderRadius: '18px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.4rem',
            letterSpacing: '1px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
            whiteSpace: 'nowrap',
            lineHeight: 1,
          }}>
            rabisonrajshakya
          </span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <NavLink className="nav-link  fw-bold fs-4" aria-current="page" to="/">
                <i className='bx bx-home'></i> Home
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link text-capitalize fw-bold fs-4" to="/about">
                <i className='bx bx-user'></i> about
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link text-capitalize fw-bold fs-4" to="/resume">
                <i className='bx bx-file'></i> resume
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link text-capitalize fw-bold fs-4" to="/project">
                <i className='bx bx-image'></i> project
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link text-capitalize fw-bold fs-4" to="/services">
                <i className='bx bx-cog'></i> services
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link text-capitalize fw-bold fs-4" to="/contact">
                <i className='bx bx-phone'></i> contact
              </NavLink>
            </li>
          </ul>
          {/* Social Media Icons */}
          <div className="d-flex align-items-center gap-2 ms-lg-3 mt-3 mt-lg-0 ">
            <NavLink to="https://www.instagram.com/rabisonshakya6/" target="_blank" rel="noopener noreferrer" className="text-white fs-3 px-2"><i className='bx bxl-instagram'></i></NavLink>
            <NavLink to="https://github.com/RabisonRajShakya/Animated-Professional-Portfolio-Website" target="_blank" rel="noopener noreferrer" className="text-white fs-3 px-2"><i className='bx bxl-github'></i></NavLink>
            <NavLink to="https://www.linkedin.com/in/rabison-raj-shakya-7521a7370/" target="_blank" rel="noopener noreferrer" className="text-white fs-3 px-2"><i className='bx bxl-linkedin'></i></NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar