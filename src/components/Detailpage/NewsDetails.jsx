import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

function NewsDetails() {
  return (
    <div className='news-details-test'>
        <Header />
        <section className="section news-detail">
  <div className="twocol-row h-100">
    <div className="left-bar colored-wrapper">
      <ul>
        <li className="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration={100}>
          <a href="javascript:">PREV</a>
        </li>
        <li className="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration={200}>
          <a href="javascript:">NEXT</a>
        </li>
      </ul>
      {/* <div class="cross-btn">
              <a href="javscript:">
                  <span class="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="300"><img src="/assets/svg/cross-icon.svg" alt=""></span>
              </a>
          </div> */}
    </div>
    <div className="right-bar">
      <div className="date-img">
        <h5 className="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration={400}>
          Dubai – <br /> 13th January 2022{" "}
        </h5>
        <div className="img-wrapper">
          <img
            src="/assets/images/news-detail/mountain-view.png"
            alt=""
            className="animate__animated animate__fadeInUp"
            data-animation="fadeInUp"
            data-duration={500}
          />
        </div>
        <div className="img-wrapper">
          <img
            src="/assets/images/news-detail/city-view.png"
            alt=""
            className="animate__animated animate__fadeInUp"
            data-animation="fadeInUp"
            data-duration={600}
          />
        </div>
      </div>
      <div className="news-content">
        <p className="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration={600}>
          As part of its ongoing efforts to expand sustainable projects in the
          region
        </p>
        <h4 className="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration={700}>
          Diamond Developers signs partnership with The Oman Tourism Development
          Company (OMRAN Group)
        </h4>
        <div className="scroll-content">
          <p className="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration={700}>
            OMRAN group, the Sultanate of Oman’s executive arm for tourism
            development signed an agreement with Diamond Developers, the
            Dubai–based company specialized in developing sustainable
            environmental projects
          </p>
          <p className="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration={700}>
            The new agreement will underline the company’s commitment towards
            building carbon-neutral and resilient communities
          </p>
          <p className="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration={800}>
            Diamond Developers, the mastermind behind The Sustainable City
            brand, the first fully operational sustainable community in the
            Middle East has entered into a development partnership agreement
            with the Oman Tourism Development Company (OMRAN Group), the
            executive arm of the Sultanate for tourism development. The
            agreement entails the development of first phase of the Yiti Tourism
            masterplan with an investment value of approximately AED 3.7 billion
            (approximately USD 1 billion). In conjunction with this partnership,
            a joint venture called Sustainable Development and Investment
            Company (SDIC) S.A.O.C has been established to carry out the
            execution of this phase.
          </p>
          <p className="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration={900}>
            “OMRAN Group’s partnership with Diamond Developers marks a major
            milestone in Yiti Development as we together begin the first phase
            of this integrated urban destination in Muscat. The signing further
            attests to OMRAN Group’s strategic vision in expanding the nation’s
            tourism sector and continuing to play a pivotal role as a catalyst
            and enabler of multi-fold, lucrative investment opportunities in the
            country in line with Oman Investment Authority’s directions in
            realising the ambitious goals of Oman Vision 2040 and supporting the
            delivery of the National Tourism Strategy,” said Hashil Bin Obaid Al
            Mahrouqi, CEO of OMRAN Group.
          </p>
          <p className="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration={1000}>
            “We are delighted to collaborate with Diamond Developers as they are
            one of the leading and reputable companies in building sustainable
            cities in the region. Their approach is in line with our vision of
            adopting the foundations of placemaking and harnessing
            sustainability in all aspects of the development.” Al Mahrouqi
            added.
          </p>
          <p className="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration={1000}>
            The first phase of the Yiti project, which covers 900,000 square
            meters, will focus on constructing a fully sustainable mixed-use
            project, the Sultanate's first of its kind community that promotes
            sustainable living. The first phase will include green public
            spaces, residences, tourism, commercial, and educational facilities,
            all with well-balanced and integrated components. Visitors and
            residents alike will enjoy a variety of unique lifestyle
            experiences, including restaurants, cafés, shops, and an equestrian
            center, a farm along with other distinctive components that create a
            meaningful green-living environment. The two sides announced that
            full details of the project will be revealed at the official launch
            ceremony later this year.
          </p>
          <p className="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration={1000}>
            Commenting on the occasion, Engineer Faris Saeed, Chairman of
            Diamond Developers said, “We are very excited to join hands with
            OMRAN to execute our first project in Oman, and to work together on
            preserving the Sultanate’s rich natural environmental resources in
            accordance with the best global green practices. Over the past
            decade, we have gained and harnessed invaluable knowledge from our
            working proof-of-concept, which we are leveraging to set new
            standards for building sustainable and resilient cities with the
            highest sustainable standards to achieve a carbon-neutral future
            that also suits the local culture, environment, and economy.”
          </p>
          <p className="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration={1000}>
            Founded in 2003, Diamond Developers embodies a fundamental change in
            the concept of future cities; building, and maintaining sustainable,
            evidence-driven and intelligent, live-work-and-thrive cities. Their
            replicable &amp; scalable cities bring forward the 2050 Paris
            Agreement targets, enhance quality of life, and bring significant
            in-country value. The company is committed to enabling, empowering,
            and supporting partners around the world to realise the cities of
            tomorrow, today.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />
    </div>
  )
}

export default NewsDetails