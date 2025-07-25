import React, { useState } from 'react'
import HTML from '../assets/image/html.png'
import CSS from '../assets/image/css.png'
import JS from '../assets/image/js.png'
import REACT from '../assets/image/react.png'
import NODEJS from '../assets/image/nodejs.png'
import EXPRESSJS from '../assets/image/expressjs.png'
import JSP from '../assets/image/jsp.png'
import JAVA from '../assets/image/java.png'
import SERVLET from '../assets/image/servlet.png'
import '../assets/css/style.css';
import '../assets/css/Project.css';

function Project() {
  const [showHtmlDetails, setShowHtmlDetails] = useState(false);
  const [showCssDetails, setShowCssDetails] = useState(false);
  const [showJsDetails, setShowJsDetails] = useState(false);
  const [showReactDetails, setShowReactDetails] = useState(false);
  const [showNodeDetails, setShowNodeDetails] = useState(false);
  const [showExpressDetails, setShowExpressDetails] = useState(false);
  const [showJspDetails, setShowJspDetails] = useState(false);
  const [showServletDetails, setShowServletDetails] = useState(false);
  const [showJavaGuiDetails, setShowJavaGuiDetails] = useState(false);

  return (
    <section className='project'>
      <h1 className='text-center my-5 py-5 fw-bold '>Project</h1>
      <div className="container">
        <div className="row my-5 py-5">
          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card w-100 h-100 d-flex flex-column">
              <img src={HTML} className="card-img-top" alt="HTML" style={{ height: '200px', objectFit: 'contain' }} />
              <div className="card-body d-flex flex-column flex-grow-1">
                <h5 className="card-title">HTML </h5>
                <p className="card-text flex-grow-1">I built a responsive static website using semantic HTML5 elements and best practices.</p>
                <button className="btn btn-primary mt-auto" style={{ transition: 'none', animation: 'none' }} onClick={() => setShowHtmlDetails(!showHtmlDetails)}>
                  {showHtmlDetails ? "Hide Details" : "View More"}
                </button>
                {showHtmlDetails && (
                  <div className="mt-3">
                    <p>I used semantic tags, followed accessibility best practices, and ensured full mobile responsiveness.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card w-100 h-100 d-flex flex-column">
              <img src={CSS} className="card-img-top" alt="CSS" style={{ height: '200px', objectFit: 'contain' }} />
              <div className="card-body d-flex flex-column flex-grow-1">
                <h5 className="card-title">CSS </h5>
                <p className="card-text flex-grow-1">I created a modern, responsive portfolio site with advanced CSS3 layouts, transitions, and effects.</p>
                <button className="btn btn-primary mt-auto" style={{ transition: 'none', animation: 'none' }} onClick={() => setShowCssDetails(!showCssDetails)}>
                  {showCssDetails ? "Hide Details" : "View More"}
                </button>
                {showCssDetails && (
                  <div className="mt-3">
                    <p>I used Flexbox and Grid for layout, added custom transitions and hover effects, and ensured full responsiveness across devices.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card w-100 h-100 d-flex flex-column">
              <img src={JS} className="card-img-top" alt="JavaScript" style={{ height: '200px', objectFit: 'contain' }} />
              <div className="card-body d-flex flex-column flex-grow-1">
                <h5 className="card-title">JavaScript</h5>
                <p className="card-text flex-grow-1">I developed an interactive to-do list application with dynamic DOM manipulation and local storage.</p>
                <button className="btn btn-primary mt-auto" style={{ transition: 'none', animation: 'none' }} onClick={() => setShowJsDetails(!showJsDetails)}>
                  {showJsDetails ? "Hide Details" : "View More"}
                </button>
                {showJsDetails && (
                  <div className="mt-3">
                    <p>I enabled users to add, edit, and delete tasks, with persistent data stored in the browser’s local storage.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 col-12 my-5">
            <div className="card w-100 h-100 d-flex flex-column">
              <img src={REACT} className="card-img-top" alt="ReactJS" style={{ height: '200px', objectFit: 'contain' }} />
              <div className="card-body d-flex flex-column flex-grow-1">
                <h5 className="card-title">ReactJS Web App</h5>
                <p className="card-text flex-grow-1">I created a single-page dashboard app using ReactJS, featuring reusable components and hooks.</p>
                <button className="btn btn-primary mt-auto" style={{ transition: 'none', animation: 'none' }} onClick={() => setShowReactDetails(!showReactDetails)}>
                  {showReactDetails ? "Hide Details" : "View More"}
                </button>
                {showReactDetails && (
                  <div className="mt-3">
                    <p>I built charts, tables, and user authentication using React functional components and hooks.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 col-12 my-5">
            <div className="card w-100 h-100 d-flex flex-column">
              <img src={NODEJS} className="card-img-top" alt="NodeJS" style={{ height: '200px', objectFit: 'contain' }} />
              <div className="card-body d-flex flex-column flex-grow-1">
                <h5 className="card-title">NodeJS Backend</h5>
                <p className="card-text flex-grow-1">I developed a RESTful API with NodeJS and Express, handling CRUD operations and authentication.</p>
                <button className="btn btn-primary mt-auto" style={{ transition: 'none', animation: 'none' }} onClick={() => setShowNodeDetails(!showNodeDetails)}>
                  {showNodeDetails ? "Hide Details" : "View More"}
                </button>
                {showNodeDetails && (
                  <div className="mt-3">
                    <p>I implemented user registration, login, JWT authentication, and MongoDB integration for data storage.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 col-12 my-5">
            <div className="card w-100 h-100 d-flex flex-column">
              <img src={EXPRESSJS} className="card-img-top" alt="ExpressJS" style={{ height: '200px', objectFit: 'contain' }} />
              <div className="card-body d-flex flex-column flex-grow-1">
                <h5 className="card-title">ExpressJS Backend</h5>
                <p className="card-text flex-grow-1">I created a blog platform using ExpressJS, EJS templating, and MongoDB for data storage.</p>
                <button className="btn btn-primary mt-auto" style={{ transition: 'none', animation: 'none' }} onClick={() => setShowExpressDetails(!showExpressDetails)}>
                  {showExpressDetails ? "Hide Details" : "View More"}
                </button>
                {showExpressDetails && (
                  <div className="mt-3">
                    <p>I enabled users to create, edit, and delete posts, using server-side rendering with persistent storage in MongoDB.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card w-100 h-100 d-flex flex-column">
              <img src={JSP} className="card-img-top" alt="JSP" style={{ height: '200px', objectFit: 'contain' }} />
              <div className="card-body d-flex flex-column flex-grow-1">
                <h5 className="card-title">JSP Web App</h5>
                <p className="card-text flex-grow-1">I developed a Java web application using JSP for dynamic content and MVC architecture.</p>
                <button className="btn btn-primary mt-auto" style={{ transition: 'none', animation: 'none' }} onClick={() => setShowJspDetails(!showJspDetails)}>
                  {showJspDetails ? "Hide Details" : "View More"}
                </button>
                {showJspDetails && (
                  <div className="mt-3">
                    <p>I implemented MVC design, session management, and dynamic content rendering with JSP and Servlets.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card w-100 h-100 d-flex flex-column">
              <img src={SERVLET} className="card-img-top" alt="Servlet" style={{ height: '200px', objectFit: 'contain' }} />
              <div className="card-body d-flex flex-column flex-grow-1">
                <h5 className="card-title">Servlet Project</h5>
                <p className="card-text flex-grow-1">I created a backend project using Java Servlets to handle HTTP requests and responses.</p>
                <button className="btn btn-primary mt-auto" style={{ transition: 'none', animation: 'none' }} onClick={() => setShowServletDetails(!showServletDetails)}>
                  {showServletDetails ? "Hide Details" : "View More"}
                </button>
                {showServletDetails && (
                  <div className="mt-3">
                    <p>I handled request processing, response generation, and integrated JSP for a complete Java web app.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card w-100 h-100 d-flex flex-column">
              <img src={JAVA} className="card-img-top" alt="Java GUI" style={{ height: '200px', objectFit: 'contain' }} />
              <div className="card-body d-flex flex-column flex-grow-1">
                <h5 className="card-title">Java GUI with Swing</h5>
                <p className="card-text flex-grow-1">I built a desktop application with Java Swing using JPanel and JFrame components.</p>
                <button className="btn btn-primary mt-auto" style={{ transition: 'none', animation: 'none' }} onClick={() => setShowJavaGuiDetails(!showJavaGuiDetails)}>
                  {showJavaGuiDetails ? "Hide Details" : "View More"}
                </button>
                {showJavaGuiDetails && (
                  <div className="mt-3">
                    <p>I designed the user interface with event handling and layout management using Swing components like JPanel and JFrame.</p>
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

export default Project;
