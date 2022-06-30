import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ReactFullpage from '@fullpage/react-fullpage'

function AboutTest() {
  return (

    <>
    
    <div className='career-test'>

            <Header />


            <section className="section career-section">
  <div className="twocol-row h-100">
    <div className="col-35">
      <div
        className="career-img animate__animated animate__fadeInUp"
        data-animation="fadeInLeft"
        data-duration={200}
      >
        <img src="/assets/images/career/career-left-img.png" alt="" />
      </div>
    </div>
    <div className="col-65 content-wrapper">
      <div className="career-content">
        <div
          className="career-head animate__animated animate__fadeInUp"
          data-animation="fadeInUp"
          data-duration={300}
        >
          <h3>WORKING WITH FOR SUSTAINABLE CITY - YITI</h3>
        </div>
        <div
          className="career-text-box scroll-content animate__animated animate__fadeInUp"
          data-animation="fadeInUp"
          data-duration={500}
        >
          <p>
            {" "}
            The Sustainable City in Yiti is to accelerate the world’s transition
            to sustainable energy. We hire the world’s best and brightest people
            to help make this future a reality.
          </p>
          <p>
            The Sustainable City fosters diversity and we are always on the
            lookout for people that embrace different perspectives, encourage
            collaboration and can bring in fresh ideas.
          </p>
          <p>
            If you see yourself as energetic and passionate about what you do,
            we want to hear from you. If you have a team-player mentality, enjoy
            sharing knowledge and expertise and want to be part of a dynamic and
            fast moving company, you will see your career progress and provide
            endless prospects.
          </p>
          <span>
            To find out more about starting a career with The Sustainable City -
            Yiti
          </span>
          <span>
            {" "}
            please contact us at{" "}
            <a href="mailto:info@sharjahsustainablecity.ae">
              info@sharjahsustainablecity.ae
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>





    <Footer />
    </div>


    
    </>
  )
}

export default AboutTest