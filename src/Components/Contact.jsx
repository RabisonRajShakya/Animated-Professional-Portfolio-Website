import React, { useState } from "react"; // ✅ Fixed: added useState
import NewProfile from "../assets/image/newProfile.jpeg";
import "../assets/css/style.css";
import { MdEmail } from "react-icons/md";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.toLowerCase()]: value,
    }));
    // Do not clear errors on change, only on submit
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        email: "",
        phone: "",
        password: "",
      });
      setErrors({});
      setSubmitted(false);
      setShowPopup(false);
    } else {
      setErrors(newErrors);
      setShowPopup(true);
    }
  };

  return (
    <div className="contact">
      <h1 className="text-capitalize text-center fw-bold my-5 py-5">
        feel free to contact
      </h1>
      <div className="container">
        <div className="row my-5 py-5">
          <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label text-white fs-4">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control text-start"
                  id="Email"
                  aria-describedby="emailHelp"
                  placeholder={submitted && !formData.email ? "Please fill the input field" : "Enter your email"}
                  value={formData.email}
                  onChange={handleInputChange}
                  style={submitted && errors.email ? { borderColor: '#a94442', color: '#a94442' } : {}}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Phone" className="form-label text-white fs-4">
                  Phone Number:
                </label>
                <input
                  type="Phone"
                  className="form-control text-start"
                  id="Phone"
                  placeholder={submitted && !formData.phone ? "Please fill the input field" : "Enter your phone number"}
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={submitted && errors.phone ? { borderColor: '#a94442', color: '#a94442' } : {}}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="Password"
                  className="form-label text-white fs-4"
                >
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control text-start"
                  id="Password"
                  placeholder={submitted && !formData.password ? "Please fill the input field" : "Enter your password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  style={submitted && errors.password ? { borderColor: '#a94442', color: '#a94442' } : {}}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ animation: "none", transition: "none" }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-12">
            <img
              src={NewProfile}
              alt=""
              className="img-fluid img-thumbnail rounded-circle my-4"
            />
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
  );
}

export default Contact;
