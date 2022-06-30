import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ReactFullpage from '@fullpage/react-fullpage'

function About() {
  return (
    <>
    <ReactFullpage
    //fullpage options
    // licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
              <Header />
  {/*?php include('includes/header.php'); ?*/}
  <section className="section about-us-section">
    <div className="twocol-row">
      <div className="about-txt-sec bg-darkblue">
        <div className="about-us-wrapper colored-wrapper">
          <div
            className="about-us-head animate__animated animate__fadeInUp"
            data-animation="fadeInUp"
            data-duration={200}
          >
            <h3>Oman’s First </h3>
            <h3> Net-Zero Energy City</h3>
            <h3>OUR STORY</h3>
          </div>
          <div
            className="about-us-text scroll-content animate__animated animate__fadeInUp"
            data-animation="fadeInUp"
            data-duration={500}
          >
            <p>
              Oman Tourism Development Company (Omran) and Diamond Developers
              have joined forces to develop a world-class, mixed use project
              that meets the highest standards of social, environmental, and
              economic sustainability. Perched on the picturesque coastline,
              overlooking the Gulf of Oman, The Sustainable City Yiti (TSC Yiti)
              brings together a pioneering vision of sustainability and an
              unparalleled quality of community living to Oman. The project,
              designed to improve quality of life for residents, makes no
              compromises on the needs of future generations. Directed by some
              of the best thought leaders in the world, TSC Yiti presents
              opportunities for research and learning, empowering residents to
              lead the change towards minimizing our carbon footprint, realizing
              the goals of the future today.
            </p>
            <p>
              Using clean energy, water &amp; waste recycling, food production,
              clean mobility, and better air quality, The Sustainable City is
              the world’s first net-zero energy city and it keeps people at its
              heart. The strength of community spirit endures here as we come
              together with our residents to lead the change towards a brighter
              tomorrow. The Sustainable City Yiti follows the blueprint for low
              carbon living that was pioneered by the first Sustainable City in
              Dubai in 2016.
            </p>
            {/* <h6 class="inner-head">INSPIRING A SUSTAINABLE <span> MOVEMENT FOR A GREENER FUTURE</span></h6>
                      <p>The Sustainable City in Yiti is the first fully-integrated and Net Zero Energy community in Yiti, Oman.</p>
                      <p>The momentous mixed-use project pursues the goal of creating another world-class, sustainable, and happy community in the Middle East and North Africa. We have cultivated an exceptional and sustainable society that provides the highest standards of living without harming the Earth’s resources.</p> */}
          </div>
          <div
            className="about-us-text-footer animate__animated animate__fadeInUp"
            data-animation="fadeInUp"
            data-duration={600}
          >
            <p className="footer-head">
              Join us in inspiring a better and brighter tomorrow.
            </p>
            <div className="about-text-logos">
              <div className="abt-ftr-item">
                <div className="abt-ftr-lgo">
                  <img src="/assets/svg/about/yitti-tourism.svg" alt="" />
                </div>
              </div>
              <div className="abt-ftr-item">
                <div className="abt-ftr-lgo">
                  <img src="/assets/svg/about/seedev.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-img-sec">
        <div className="about-us-right-img img__observe">
          <picture>
            <source
              media="(min-width: 650px)"
              srcSet="/assets/images/about-us/about-us-desktop.png"
            />
            <source
              media="(max-width: 767px)"
              srcSet="/assets/images/about-us/about-us-mobile.png"
            />
            <img
              src="/assets/images/about-us/about-us-desktop.png"
              alt="/assets/images/about-us/about-us-desktop.png"
            />
          </picture>
          
        </div>
      </div>
    </div>
  </section>
  {/*?php include('includes/footer.php'); ?*/}


<Footer />
        </ReactFullpage.Wrapper>
      );
    }}
  />


    </>
  )
}

export default About



