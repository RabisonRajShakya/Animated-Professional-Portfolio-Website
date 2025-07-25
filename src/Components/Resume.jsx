import React from "react";
import "../assets/css/style.css";
import {Link } from "react-router-dom";
function Resume() {
	return (
		<section className="resume">
			{/* Section Title */}
			<div className="section-title">
				<h2 className="text-center my-5 text-capitalize fw-bold">resume</h2>

				<p> Check out my educational journey and educational background</p>
			</div>

			<div className="container">
				<div className="resume-animation">
					<div className="row">
						{/* Left Column - Summary & Education */}
						<div className="col-lg-6">
							<div className="resume-item mb-4">
								<h3 className="resume-title text-capitalize">
									Personal details
								</h3>
								<div className="resume-content">
									<h3 className="text-white text-uppercase">
										rabison raj shakya
									</h3>
									<h4 className="text-white text-capitalize">
										gyneshwor, ratopul
									</h4>
									<h4 className="text-white">(977) 9861-492520</h4>
									<h4 className="text-white">info@rabisonrajshakya.com.np</h4>
								</div>
							</div>
							<div className="resume-item mb-4">
								<h3 className="resume-title text-capitalize">
									career opportunities
								</h3>
								<div className="resume-content">
									<p>
										To build a career in frontend development by applying and
										enhancing my technical skills through real-world projects,
										contributing effectively within team environments, and
										continuously evolving through hands-on experience,
										learning modern technologies, and delivering user-centric
										solutions that align with current industry trends and best
										practices in frontend development.
									</p>
								</div>
							</div>

							<div className="resume-item mb-4">
								<h3 className="resume-title">Educational Background</h3>
								<div className="resume-content mb-3">
									<h4 className="text-white">BSC Hons Computing</h4>
									<h5 className="text-white">2023 - Present</h5>
									<p>
										Islington College, Kamalphokhari, London Metropolitian University
									</p>
									<p>Pursuing a Bachelor's degree in Computing.</p>
								</div>
								<div className="resume-content mb-3">
									<h4 className="text-white">SLC</h4>
									<h5 className="text-white">2019-2022</h5>
									<p>
										Universal College, Kathmandu, National Examinations Board
									</p>
									<p>Completed +2 degree in Fine Arts stream.</p>
								</div>
								<div className="resume-content">
									<h4 className="text-white">SEE</h4>
									<h5 className="text-white">2019</h5>
									<p>
										New Summit Secondary School, Kathmandu, National Examinations Board
									</p>
									<p>Completed Secondary Education Examination (SEE).</p>
								</div>
							</div>
						</div>

						{/* Right Column - Skills, Training and Certification, Projects */}
						<div className="col-lg-6">
							<div className="resume-item mb-4">
								<h3 className="resume-title">Skills</h3>
								<div className="resume-content">
									<ul>
										<p className="text-capitalize fs-5">
											technical skills: HTML, CSS, JAVASCRIPT, Reactjs,
											expressjs, Nodejs
											<br />
											soft skills:  Communication, Time Management, Team Collaboration, Adaptability, Critical
											Thinking
										</p>
									</ul>
								</div>
							</div>

							<div className="resume-item mb-4">
								<h3 className="resume-title">Projects</h3>
								<div className="resume-content">
									<h3 className="text-capitalize fw-bold text-white">
										Academic Project
									</h3>
									<ul>
										<li className="text-capitalize">
											smart tech ecommerce website
										</li>
										<li className="text-capitalize">
											printer ecommerce website
										</li>
										<li className="text-capitalize">
											GUI using java
										</li>
									</ul>
									<h3 className="text-capitalize fw-bold text-white my-4">
										Personal Project
									</h3>
									<ul>
										<li className="text-capitalize">
											smart traders nepal ecommerce website
										</li>
										<li className="text-capitalize">
											joyti traders nepal ecommerce website
										</li>
									</ul>
								</div>
							</div>

							<div className="resume-item mb-4">
								<h3 className="resume-title">Training and Certification</h3>
								<div className="resume-content mb-3">
									<Link to="https://www.credly.com/badges/63c6c5ea-f335-42ad-a114-86b6d5194223/print" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
										<h4 className="text-white">AWS CERTIFICATION</h4>
									</Link>
									<h5 className="text-white">
										ISLINGTION COLLEGE, KAMALPHOKHARI / 2024
									</h5>
								</div>
								<div className="resume-content mb-3">
									<Link to="https://github.com/RabisonRaj/Mern-Stack-Certification/blob/main/Deerwalk%20Certification.pdf" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
										<h4 className="text-white">MERN STACK</h4>
									</Link>
									<h5 className="text-white">DEER WALK / 2022</h5>
								</div>
								<div className="resume-content">
									<Link to="https://github.com/RabisonRaj/globalIT-certification/blob/main/Global%20IT%20Certification.pdf" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
										<h4 className="text-white">GLOBAL IT</h4>
									</Link>
									<h5 className="text-white">2020</h5>
									<p className="text-white">
										I have completed comprehensive training in HTML, CSS, and
										the Bootstrap framework through Global IT.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Resume;