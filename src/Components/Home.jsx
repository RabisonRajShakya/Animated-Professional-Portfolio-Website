import React, { useState, useEffect } from 'react';
import NewProfile from '../assets/image/newProfile.jpeg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Home() {
  const [skillsAnimation, setSkillsAnimation] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.skills-animation');
      setSkillsAnimation(Array.from(elements));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (skillsAnimation.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Add a small delay to ensure smooth animation
            setTimeout(() => {
              let progress = entry.target.querySelectorAll('.progress .progress-bar');
              progress.forEach(el => {
                el.style.width = el.getAttribute('aria-valuenow') + '%';
              });
            }, 200);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    skillsAnimation.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      skillsAnimation.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [skillsAnimation]);

  const [typewriter] = useTypewriter({
    words: ['frontend', 'backend', 'fullstack', 'NextJS', 'ReactJS', 'JSP', 'Servlet'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
    delaySpeed: 2000,
  });

  return (
    <>
      <section className="home">
        <div className="container">
          <div className="row my-5 py-5">
            <div className="col-sm-12 col-md-6 col-lg-6 col-12 ">
              <h1>
                Hello, I'm <span>Rabison Rajshakya</span>
              </h1>
              <p className='fs-3'>I am studying <span>{typewriter}</span><Cursor /></p>
              <button type="button">Download CV</button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-12">
              <img src={NewProfile} alt="Rabison Rajshakya Profile" className="img-fluid rounded-circle img-thumbnail" />
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="skills section my-5 py-5">

        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>I know how to use HTML and Bootstrap to make web pages that are responsive and look good. I know a lot about JavaScript and how to use it to make apps that are dynamic and interactive. I use ReactJS to make user interfaces that are fast and based on components. I also use NextJS to make web apps that are fast and rendered on the server. I also know how to use JSP and Servlet to make strong, scalable Java-based backend systems.</p>
        </div>{/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row skills-content skills-animation">

            <div className="col-lg-6">

              <div className="progress">
                <span className="skill"><span>HTML and Bootstrap</span> <i className="val">95%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>{/* End Skills Item */}

              <div className="progress">
                <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>{/* End Skills Item */}

              <div className="progress">
                <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>{/* End Skills Item */}

            </div>

            <div className="col-lg-6">

              <div className="progress">
                <span className="skill"><span>reactjs</span> <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>{/* End Skills Item */}

              <div className="progress">
                <span className="skill"><span>nextjs</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>{/* End Skills Item */}

              <div className="progress">
                <span className="skill"><span>jsp and servlet</span> <i className="val">55%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>{/* End Skills Item */}

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;