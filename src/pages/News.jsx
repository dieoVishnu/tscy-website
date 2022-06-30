import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ReactFullpage from '@fullpage/react-fullpage'

function News() {
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

            <section className="section news-listing">
  <div className="container">
    <h3 className="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration={100}>
      THE SUSTAINABLE CITY - YITI NEWS
    </h3>
    {/* <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a class="nav-item nav-link animate__animated animate__fadeInUp active" data-animation="fadeInUp" data-duration="100" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">CORPORATE</a>
                  <span class="animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="150"></span>
                  <a class="nav-item nav-link animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="200" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">CONSTRUCTION</a>
              </div>
          </nav> */}
    <div className="tab-content" id="nav-tabContent">
      <div
        className="tab-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div className="twocol-row newsroom-slider-wrapper">
          <div className="col-25">
            <a href="news-detail.php">
              <div className="news-wrapper">
                <div
                  className="newsroom-card animate__animated animate__fadeInUp"
                  data-animation="zoomIn"
                  data-duration={300}
                >
                  <div className="newsroom-inner">
                    <div className="newsroom-img">
                      <img
                        src="/assets/images/newsroom/newsroom-1.png"
                        alt="newsroom-image"
                      />
                    </div>
                    <div className="newsroom-content">
                      <h4
                        className="title animate__animated animate__fadeInUp"
                        data-animation="fadeInUp"
                        data-duration={800}
                      >
                        Diamond Developers signs partnership with The Oman
                        Tourism Development Company (OMRAN Group)
                      </h4>
                      <p
                        className="description animate__animated animate__fadeInUp"
                        data-animation="fadeInUp"
                        data-duration={900}
                      >
                        OMRAN group, the Sultanate of Oman’s executive arm for
                        tourism development signed an agreement with Diamond
                        Developers, the Dubai–based company specialized in
                        developing sustainable environmental projects...
                      </p>
                    </div>
                    <div className="newsroom-footer">
                      <div
                        className="date animate__animated animate__fadeInUp"
                        data-animation="fadeInUp"
                        data-duration={1000}
                      >
                        Dubai – 13th January 2022
                      </div>
                      <div
                        className="next-cta animate__animated animate__fadeInUp"
                        data-animation="fadeInUp"
                        data-duration={1200}
                      >
                        <img src="/assets/svg/arrow.svg" alt="arrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          {/* <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate__animated animate__fadeInUp" data-animation="zoomIn" data-duration="500">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-2.png    " alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div> */}
          {/* <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate__animated animate__fadeInUp" data-animation="zoomIn" data-duration="700">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-1.png" alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate__animated animate__fadeInUp" data-animation="zoomIn" data-duration="900">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-1.png" alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate__animated animate__fadeInUp" data-animation="zoomIn" data-duration="1100">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-1.png" alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate__animated animate__fadeInUp" data-animation="zoomIn" data-duration="1300">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-1.png" alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate__animated animate__fadeInUp" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate" data-animation="zoomIn" data-duration="1500">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-1.png" alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate" data-animation="zoomIn" data-duration="1800">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-1.png" alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div> */}
        </div>
        <div id="pagination-container" className="pagination" />
      </div>
      {/* <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <div class="twocol-row newsroom-slider-wrapper">
                      <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate" data-animation="zoomIn" data-duration="300">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-1.png" alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate" data-animation="zoomIn" data-duration="500">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-1.png" alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate" data-animation="zoomIn" data-duration="700">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-1.png" alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate" data-animation="zoomIn" data-duration="900">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-1.png" alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate" data-animation="zoomIn" data-duration="1100">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-1.png" alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate" data-animation="zoomIn" data-duration="1300">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-1.png" alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate" data-animation="zoomIn" data-duration="1500">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-1.png" alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                      <div class="col-25">
                          <a href="news-detail.php">
                              <div class="news-wrapper">
                                  <div class="newsroom-card animate" data-animation="zoomIn" data-duration="1800">
                                      <div class="newsroom-inner">
                                          <div class="newsroom-img">
                                              <img src="/assets/images/newsroom/newsroom-1.png" alt="newsroom-image">
                                          </div>
                                          <div class="newsroom-content">
                                              <h4 class="title animate" data-animation="fadeInUp" data-duration="800">25% Of The Sustainable City Yiti First Phase Accomplished</h4>
                                              <p class="description animate" data-animation="fadeInUp" data-duration="900">According to Yousif Ahmed Al Mutawa, Chief Executive Officer of Oman about 60% of the residential villas sold...</p>
                                          </div>
                                          <div class="newsroom-footer">
                                              <div class="date animate" data-animation="fadeInUp" data-duration="1000">
                                                  May 24, 2021
                                              </div>
                                              <div class="next-cta animate" data-animation="fadeInUp" data-duration="1200">
                                                  <img src="/assets/svg/arrow.svg" alt="arrow">
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </a>
                      </div>
                  </div>
                  <div id="pagination-container1" class="pagination"></div>
              </div> */}
    </div>
  </div>
</section>






            <Footer />
        </ReactFullpage.Wrapper>
      );
    }}
  />


    </>
  )
}

export default News