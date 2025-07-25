import React from 'react'
import NewProfile from '../assets/image/newProfile.jpeg';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';

function About() {
  return (
    <section className="about">
      <h1 className='text-capitalize text-center fw-bold fs-1  my-5 py-4'>about me</h1>
      <p>I am a motivated and passionate IT student at Islington College, where I am working toward a BSC Hons Computing. I'm very interested in front-end development, and I like making web interfaces that are clean, responsive, and easy to use. I know how to use Java-based backend tools like JSP and Servlet, and I've used HTML, CSS, JavaScript, ReactJS in real life. I'm excited to use my skills on real projects and keep getting better as a developer. I do well in groups and am always willing to learn new technologies that can help me work better as a developer.
      </p>
      <div className="container">
        <div className="row my-5 py-5">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <img src={NewProfile} alt="Rabison Rajshakya Profile" className="img-fluid rounded-circle img-thumbnail" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <h1 className='text-uppercase fw-bold fs-3'>bachelor hons computing student</h1>
            <p>I gained a solid foundation in software development, systems design, databases, networking, and web technologies while pursuing my BSc (Hons) in Computing. In addition to helping me solve real-world issues, the course enhanced my programming and critical thinking abilities by fusing theory with hands-on projects. Working on group projects and utilizing industry-standard tools enhanced my problem-solving and communication skills. This degree stoked my desire for lifelong learning in the tech industry and well-prepared me for jobs in ReactJS, Express, and HTML, CSS, and JavaScript.
            </p>
            <div className="row">
              <div className="col-md-6">
                <h2 className='text-capitalize fw-bold fs-4 mb-3'>Birthday: 30th december 2001</h2>
                <h2 className='fw-bold fs-4 mb-3'>Website: <Link to="https://rabisonrajshakya.com.np" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>rabisonrajshakya.com.np</Link></h2>
                <h2 className='text-capitalize fw-bold fs-4 mb-3'>phone: +977 9861492520</h2>
                <h2 className='text-capitalize fw-bold fs-4 mb-3'>city: Kathmandu, Nepal</h2>
              </div>
              <div className="col-md-6">
                <h2 className='text-capitalize fw-bold fs-4 mb-3'>age: 24</h2>
                <h2 className='text-capitalize fw-bold fs-4 mb-3'>degree: bachelor hons computing</h2>
                <h2 className='fw-bold fs-4 mb-3' style={{wordBreak: 'break-all'}}>Email: info@rabisonrajshakya.com.np</h2>
                <h2 className='text-capitalize fw-bold fs-4 mb-3'>internship:searching</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About