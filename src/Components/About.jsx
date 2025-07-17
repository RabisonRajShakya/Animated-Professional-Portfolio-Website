import React from 'react'
import NewProfile from '../assets/image/newProfile.jpeg';
import { Link } from 'react-router-dom';
import '../css/style.css';
function About() {
  return (
    <section className="about">
      <h1 className='text-capitalize text-center fw-bold fs-1  my-5 py-4'>about</h1>
      <p>I am a motivated and passionate IT student at Islington College, where I am working toward a Bachelor's in Computing. I'm very interested in front-end development, and I like making web interfaces that are clean, responsive, and easy to use. I know how to use Java-based backend tools like JSP and Servlet, and I've used HTML, CSS, JavaScript, ReactJS, and NextJS in real life. I'm excited to use my skills on real projects and keep getting better as a developer. I do well in groups and am always willing to learn new technologies that can help me work better as a developer.
      </p>
      <div className="container">
        <div className="row my-5 py-5">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <img src={NewProfile} alt="Rabison Rajshakya Profile" className="img-fluid rounded-circle img-thumbnail" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <h1 className='text-uppercase fw-bold fs-3'>bachelor hons computing student</h1>
            <p>The Bachelor's (Hons) in Computing is a full undergraduate program that gives students a solid background in systems design, software development, databases, networking, and web technologies. It gives students the theoretical and practical skills they need to solve real-world computing problems. The course focuses on project-based learning, programming, and critical thinking. It gets students ready for jobs in software development, IT consulting, cybersecurity, and other fields.
              Students also learn how to use industry-standard tools and frameworks while also improving their soft skills like teamwork, communication, and problem-solving. This degree is a great first step toward both a career in computing and more study in the field.
            </p>
            <div className="row">
              <div className="col-md-6">
                <h2 className='text-capitalize fw-bold fs-4'>Birthday: 30th december 2001</h2>
                <h2 className='fw-bold fs-4'>Website: <Link to="https://rabisonrajshakya.com.np" target="_blank" rel="noopener noreferrer">rabisonrajshakya.com.np</Link></h2>
                <h2 className='text-capitalize fw-bold fs-4'>phone: +977 9861492520</h2>
                <h2 className='text-capitalize fw-bold fs-4'>city: Kathmandu, Nepal</h2>
              </div>
              <div className="col-md-6">
                <h2 className='text-capitalize fw-bold fs-4'>age: 24</h2>
                <h2 className='text-capitalize fw-bold fs-4'>degree: bachelor hons computing</h2>
                <h2 className='fw-bold fs-4' style={{wordBreak: 'break-all'}}>Email: info@rabisonrajshakya.com.np</h2>
                <h2 className='text-capitalize fw-bold fs-4'>internship: available</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 