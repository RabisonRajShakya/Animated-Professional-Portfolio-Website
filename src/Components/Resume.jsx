import React from "react";
import "../css/style.css";
function Resume() {
	return (
		<section className="resume">
			{/* Section Title */}
			<div className="section-title">
				<h2 className="text-center my-5 text-capitalize fw-bold">resume</h2>

				<p> Check out  my education journey and educational background</p>
			</div>

			<div className="container">
				<div className="resume-animation">
					<div className="row">
						{/* Left Column - Summary & Education */}
						<div className="col-lg-6">
							<div className="resume-item">
								<h3 className="resume-title text-capitalize">Personal details</h3>
								<div className="resume-content">
									<h3 className="text-white text-uppercase">rabison raj shakya</h3>
									<h4 className="text-white text-capitalize">gyneshwor, ratopul</h4>
									<h4 className="text-white">(977) 9861-492520</h4>
									<h4 className="text-white">info@rabisonrajshakya.com.np</h4>
								</div>
							</div>
							<div className="resume-item">
								<h3 className="resume-title text-capitalize">career opportunities</h3>
								<div className="resume-content">
									<p>
										<em className="text-white">
											To build a career in frontend development by applying and enhancing my technical skills through real-world
											projects, contributing effectively within team environments, and continuously evolving through hands-on
											experience, learning modern technologies, and delivering user-centric solutions that align with current
											industry trends and best practices in frontend development.
										</em>
									</p>
								</div>
							</div>

							<div className="resume-item">
								<h3 className="resume-title">Educational Background</h3>
								<div className="resume-content">
									<h4 className="text-white">BSC Hons Computing</h4>
									<h5 className="text-white">2023 - Present</h5>
									<p>
										<em className="text-white">Islington College, Kamalphokhari, London Metropolitian University </em>
									</p>
									<p>Pursuing a Bachelor's degree in Computing.</p>
								</div>
								<div className="resume-content">
									<h4 className="text-white">SLC</h4>
									<h5 className="text-white">11th June 2022</h5>
									<p>
										<em className="text-white">Universal College, Kathmandu, National Examination Board</em>
									</p>
									<p>Completed +2 degree in Fine Arts stream.</p>
								</div>
								<div className="resume-content">
									<h4 className="text-white">SEE</h4>
									<h5 className="text-white">7th June 2019</h5>
									<p>
										<em className="text-white">New Summit Secondary School, Kathmandu, National Examination Board</em>
									</p>
									<p>Completed Secondary Education Examination (SEE).</p>
								</div>
							</div>
						</div>

						{/* Right Column - Training and Certification, Skills, Languages */}
						<div className="col-lg-6">
							<div className="resume-item">
								<h3 className="resume-title">Training and Certification</h3>
								<div className="resume-content">
									<h4 className="text-white">AWS CERTIFICATION</h4>
									<h5 className="text-white">ISLINGTION COLLEGE, KAMALPHOKHARI / 2024</h5>
								</div>
								<div className="resume-content">
									<h4 className="text-white">MERN STACK</h4>
									<h5 className="text-white">DEER WALK / 2022</h5>
								</div>
								<div className="resume-content">
									<h4 className="text-white">GLOBAL IT</h4>
									<h5 className="text-white">2020</h5>
									<p className="text-white">I have completed comprehensive training in HTML, CSS, and the Bootstrap framework through Global IT.</p>
								</div>
							</div>

							<div className="resume-item">
								<h3 className="resume-title">Skills</h3>
								<div className="resume-content">
									<ul>
										<li>HTML</li>
										<li>CSS</li>
										<li>Javascript</li>
										<li>Servlet and JSP</li>
										<li>ReactJS</li>
										<li>NextJs</li>
									</ul>
								</div>
							</div>

							<div className="resume-item">
								<h3 className="resume-title">Projects</h3>
								<div className="resume-content">
									<h3 className="text-capitalize fw-bold text-white">Academic Project</h3>
									<ul>
										<li className="text-capitalize">smart tech ecommerce website</li>
										<li className="text-capitalize">printer ecommerce website</li>
										<li className="text-capitalize">GUI using java swing and JFrame and JPanel</li>
										<li className="text-capitalize">database normalization and creating database tables</li>
									</ul>
									<h3 className="text-capitalize fw-bold text-white my-4">Personal Project</h3>
									<ul>
										<li className="text-capitalize">smart traders nepal ecommerce website</li>
										<li className="text-capitalize">joyti traders nepal ecommerce website</li>
									</ul>
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
