import React from 'react'
import '../assets/css/style.css';
function Services() {
  return (
    <div className="services">
      <div className="container py-5">
        <h1 className="mb-4 text-center  my-5 fw-bold">My Services</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  Responsive websites using HTML, CSS, Bootstrap, ReactJS. I can build modern, user-friendly web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Backend & Full Stack</h5>
                <p className="card-text">
                  REST APIs, database integration, and full stack solutions using Node.js, Express, Java, JSP, and MongoDB/MySQL.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">UI/UX & Academic Projects</h5>
                <p className="card-text">
                  UI/UX prototyping, group project collaboration, and help with academic coding assignments or research.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Database Design</h5>
                <p className="card-text">
                  Designing and managing relational and NoSQL databases, including ER diagrams, normalization, and query optimization.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Version Control & Collaboration</h5>
                <p className="card-text">
                  Using Git and GitHub for version control, team collaboration, and open-source contributions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Cloud & Deployment</h5>
                <p className="card-text">
                  Deploying web applications to cloud platforms like Vercel, Netlify, and basic AWS services for hosting and scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;