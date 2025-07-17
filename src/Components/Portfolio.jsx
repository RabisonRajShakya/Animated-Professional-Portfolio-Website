import React, { useState } from 'react'
import HTML from '../assets/image/html.png'
import CSS from '../assets/image/css.png'
import JS from '../assets/image/js.png'
import REACT from '../assets/image/react.png'
import NODEJS from '../assets/image/nodejs.png'
import EXPRESSJS from '../assets/image/expressjs.png'
import NEXTJS from '../assets/image/nextjs.png'
import JSP from '../assets/image/jsp.png'
import SERVLET from '../assets/image/servlet.png'
import '../css/style.css';
import '../css/Portfolio.css';

function Portfolio() {
  const [showHtmlDetails, setShowHtmlDetails] = useState(false);
  const [showCssDetails, setShowCssDetails] = useState(false);
  const [showJsDetails, setShowJsDetails] = useState(false);
  const [showReactDetails, setShowReactDetails] = useState(false);
  const [showNodeDetails, setShowNodeDetails] = useState(false);
  const [showExpressDetails, setShowExpressDetails] = useState(false);
  const [showNextDetails, setShowNextDetails] = useState(false);
  const [showJspDetails, setShowJspDetails] = useState(false);
  const [showServletDetails, setShowServletDetails] = useState(false);

  return (
    <section className='portfolio'>
      <h1 className='text-center my-5 py-5 fw-bold '>Portfolio</h1>
      <div className="container">
        <div className="row my-5 py-5">
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card w-100">
              <img src={HTML} className="card-img-top" alt="HTML" />
              <div className="card-body">
                <h5 className="card-title">HTML </h5>
                <p className="card-text">A responsive landing page built using semantic HTML5 elements and best practices.</p>
                <button className="btn btn-primary" onClick={() => setShowHtmlDetails(!showHtmlDetails)}>
                  {showHtmlDetails ? "Hide Details" : "View More"}
                </button>
                {showHtmlDetails && (
                  <div className="mt-3">
                    <p>This project uses semantic tags, accessibility best practices, and is fully mobile responsive.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card w-100">
              <img src={CSS} className="card-img-top" alt="CSS" />
              <div className="card-body">
                <h5 className="card-title">CSS </h5>
                <p className="card-text">A modern, responsive portfolio site with advanced CSS3 layouts, transitions, and effects.</p>
                <button className="btn btn-primary" onClick={() => setShowCssDetails(!showCssDetails)}>
                  {showCssDetails ? "Hide Details" : "View More"}
                </button>
                {showCssDetails && (
                  <div className="mt-3">
                    <p>This project demonstrates the use of Flexbox and Grid for layout, custom transitions, hover effects, and a visually appealing color scheme. It is fully responsive and optimized for mobile devices.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card w-100">
              <img src={JS} className="card-img-top" alt="JavaScript" />
              <div className="card-body">
                <h5 className="card-title">JavaScript</h5>
                <p className="card-text">An interactive to-do list application with dynamic DOM manipulation and local storage.</p>
                <button className="btn btn-primary" onClick={() => setShowJsDetails(!showJsDetails)}>
                  {showJsDetails ? "Hide Details" : "View More"}
                </button>
                {showJsDetails && (
                  <div className="mt-3">
                    <p>This app allows users to add, edit, and delete tasks, with data saved in the browser's local storage for persistence.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12 my-5">
            <div className="card w-100">
              <img src={REACT} className="card-img-top" alt="ReactJS" />
              <div className="card-body">
                <h5 className="card-title">ReactJS Web App</h5>
                <p className="card-text">A single-page dashboard app using ReactJS, featuring reusable components and hooks.</p>
                <button className="btn btn-primary" onClick={() => setShowReactDetails(!showReactDetails)}>
                  {showReactDetails ? "Hide Details" : "View More"}
                </button>
                {showReactDetails && (
                  <div className="mt-3">
                    <p>This dashboard includes charts, tables, and user authentication, all built with React functional components and hooks.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12 my-5">
            <div className="card w-100">
              <img src={NODEJS} className="card-img-top" alt="NodeJS" />
              <div className="card-body">
                <h5 className="card-title">NodeJS Backend</h5>
                <p className="card-text">A RESTful API built with NodeJS and Express, handling CRUD operations and authentication.</p>
                <button className="btn btn-primary" onClick={() => setShowNodeDetails(!showNodeDetails)}>
                  {showNodeDetails ? "Hide Details" : "View More"}
                </button>
                {showNodeDetails && (
                  <div className="mt-3">
                    <p>This API supports user registration, login, and CRUD operations for resources, with JWT authentication and MongoDB integration.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12 my-5">
            <div className="card w-100">
              <img src={EXPRESSJS} className="card-img-top" alt="ExpressJS" />
              <div className="card-body">
                <h5 className="card-title">ExpressJS Backend</h5>
                <p className="card-text">A simple blog platform using ExpressJS, EJS templating, and MongoDB for storage.</p>
                <button className="btn btn-primary" onClick={() => setShowExpressDetails(!showExpressDetails)}>
                  {showExpressDetails ? "Hide Details" : "View More"}
                </button>
                {showExpressDetails && (
                  <div className="mt-3">
                    <p>This blog allows users to create, edit, and delete posts, with server-side rendering and MongoDB for persistent storage.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card w-100">
              <img src={NEXTJS} className="card-img-top" alt="NextJS" />
              <div className="card-body">
                <h5 className="card-title">NextJS Web App</h5>
                <p className="card-text">A fast, SEO-friendly portfolio site built with NextJS and server-side rendering.</p>
                <button className="btn btn-primary" onClick={() => setShowNextDetails(!showNextDetails)}>
                  {showNextDetails ? "Hide Details" : "View More"}
                </button>
                {showNextDetails && (
                  <div className="mt-3">
                    <p>This portfolio leverages NextJS for static site generation, dynamic routing, and optimized image loading for performance.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card w-100">
              <img src={JSP} className="card-img-top" alt="JSP" />
              <div className="card-body">
                <h5 className="card-title">JSP Web App</h5>
                <p className="card-text">A Java web application using JSP for dynamic content and MVC architecture.</p>
                <button className="btn btn-primary" onClick={() => setShowJspDetails(!showJspDetails)}>
                  {showJspDetails ? "Hide Details" : "View More"}
                </button>
                {showJspDetails && (
                  <div className="mt-3">
                    <p>This app demonstrates MVC design, session management, and dynamic content rendering using JSP and Servlets.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card w-100">
              <img src={SERVLET} className="card-img-top" alt="Servlet" />
              <div className="card-body">
                <h5 className="card-title">Servlet Project</h5>
                <p className="card-text">A backend project using Java Servlets to handle HTTP requests and responses.</p>
                <button className="btn btn-primary" onClick={() => setShowServletDetails(!showServletDetails)}>
                  {showServletDetails ? "Hide Details" : "View More"}
                </button>
                {showServletDetails && (
                  <div className="mt-3">
                    <p>This project covers request handling, response generation, and integration with JSP for a complete Java web solution.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio