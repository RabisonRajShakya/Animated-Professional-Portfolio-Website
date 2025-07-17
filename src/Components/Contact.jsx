import React from 'react'
import NewProfile from '../assets/image/newProfile.jpeg';
import '../css/style.css';
function Contact() {
  return (
    <div className="contact">
      <h1 className='text-capitalize text-center fw-bold my-5 py-5'>feel free to contact</h1>
      <div className="container">
        <div className="row my-5 py-5">
          <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
            <form>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label text-white fs-4">Email address</label>
                <input type="email" className="form-control text-start" id="Email" aria-describedby="emailHelp" placeholder='Enter your email'/>
              </div>
              <div className="mb-3">
                <label htmlFor="Phone" className="form-label text-white fs-4">Phone Number</label>
                <input type="Phone" className="form-control text-start" id="Phone" placeholder='Enter your phone number'/>
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label text-white fs-4">Password</label>
                <input type="password" className="form-control text-start" id="Password" placeholder='Enter your password'/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
            <img src={NewProfile} alt="" className='img-fluid img-thumbnail rounded-circle'/>
          </div>
        </div>
        {/* Dynamic Google Map */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-10">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps?q=Kathmandu%2C%20Nepal&output=embed"
                title="Google Map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 