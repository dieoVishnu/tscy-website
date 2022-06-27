import React from "react";
import "../../index.css";
import homeIcon from "../../assets/svg/sustainable-feature/home-icon.svg";
import recycleIcon from "../../assets/svg/sustainable-feature/recycle-icon.svg";
import timerHand from "../../assets/svg/sustainable-feature/timer-hand.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import Social from "../../assets/images/sustainable-feature/SOCIAL-min.jpeg";
import Environment from "../../assets/images/sustainable-feature/ENVIRONMENT-min.jpeg";
import Economic from "../../assets/images/sustainable-feature/ECONOMIC-min.jpeg";

function SustainableFeaturesSection() {
  return (
    <div className="section sustainable-features-section">
      <div className="container">
        <div className="twocol-row align-items-center">
          <div className="col-10">
            <Swiper
              className="swiper feature-navigation"
              slidesPerView={3}
              watchSlidesProgress={true}
              direction={"horizontal"}
              autoplay={true}
              speed={1000}
              breakpoints={{ 1199: { direction: "vertical" } }}
            >
              <div className="swiper-wrapper align-items-center">
                <SwiperSlide className="feature-navigation__item swiper-slide">
                  <div className="feature-navigation__image">
                    {/* <svg height="150" width="150">
                                        <circle id='yellow' cx="70" cy="70" r="66" stroke="black" stroke-width="3" fill="none" stroke-dasharray='1000' stroke-dashoffset='1000' />
                                    </svg> */}
                    <img
                      className="svg-convert"
                      src={homeIcon}
                      alt="feature-nav-icon"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="feature-navigation__item swiper-slide">
                  <div className="feature-navigation__image">
                    {/* <svg height="150" width="150">
                                        <circle id='yellow' cx="70" cy="70" r="66" stroke="black" stroke-width="3" fill="none" stroke-dasharray='1000' stroke-dashoffset='1000' />
                                    </svg> */}
                    <img
                      className="svg-convert"
                      src={recycleIcon}
                      alt="feature-nav-icon"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="feature-navigation__item swiper-slide">
                  <div className="feature-navigation__image">
                    {/* <svg height="150" width="150">
                                        <circle id='yellow' cx="70" cy="70" r="66" stroke="black" stroke-width="3" fill="none" stroke-dasharray='1000' stroke-dashoffset='1000' />
                                    </svg> */}
                    <img
                      className="svg-convert"
                      src={timerHand}
                      alt="feature-nav-icon"
                    />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="col-90">
            <div className="feature-box">
              <div className="swiper feature-wrap-content">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="twocol-row">
                      <div className="col-50">
                        <div className="feature-content-wrapper">
                          <div className="feature-content">
                            <div className="feature-content__card">
                              <h4 className="feature-content-main-heading">
                                Sustainable Features
                              </h4>
                              <h1 className="feature-content__title yellow-color">
                                Social <span> SUSTAINABIlitY</span>
                              </h1>
                              <p className="feature-content__content">
                                Through amenities and community outreach
                                programs
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-50">
                        <div className="feature-images-wrapper">
                          <div className="swiper feature-img-wrapper">
                            <div className="swiper-wrapper">
                              <div className="feature-small-img swiper-slide">
                                <img src={Social} alt="feature0-small-img " />
                              </div>
                              <div className="feature-small-img swiper-slide">
                                <img
                                  src={Environment}
                                  alt="feature0-small-img "
                                />
                              </div>
                              <div className="feature-small-img swiper-slide">
                                <img src={Economic} alt="feature0-small-img " />
                              </div>
                            </div>
                            {/* <div className="swiper-pagination"></div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="twocol-row">
                      <div className="col-50">
                        <div className="feature-content-wrapper">
                          <div className="feature-content">
                            <div className="feature-content__card">
                              <h4 className="feature-content-main-heading">
                                Sustainable Features
                              </h4>
                              <h1 className="feature-content__title green-color">
                                Environmental <span> SUSTAINABIlitY</span>
                              </h1>
                              <p className="feature-content__content">
                                Maintained through passive and active design
                                strategies
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-50">
                        <div className="feature-images-wrapper">
                          <div className="swiper feature-img-wrapper">
                            <div className="swiper-wrapper">
                              <div className="feature-small-img swiper-slide">
                                <img src={Social} alt="feature0-small-img " />
                              </div>
                              <div className="feature-small-img swiper-slide">
                                <img
                                  src={Environment}
                                  alt="feature0-small-img "
                                />
                              </div>
                              <div className="feature-small-img swiper-slide">
                                <img src={Economic} alt="feature0-small-img " />
                              </div>
                            </div>
                            {/* <div className="swiper-pagination"></div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="twocol-row">
                      <div className="col-50">
                        <div className="feature-content-wrapper">
                          <div className="feature-content">
                            <div className="feature-content__card">
                              <h4 className="feature-content-main-heading">
                                Sustainable Features
                              </h4>
                              <h1 className="feature-content__title lightBlue-color">
                                Economic <span> SUSTAINABIlitY</span>
                              </h1>
                              <p className="feature-content__content">
                                Facilitated through operational efficiencies,
                                savings for residents, and contribution to a
                                green economy
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-50">
                        <div className="feature-images-wrapper">
                          <div className="swiper feature-img-wrapper">
                            <div className="swiper-wrapper">
                              <div className="feature-small-img swiper-slide">
                                <img src={Social} alt="feature0-small-img " />
                              </div>
                              <div className="feature-small-img swiper-slide">
                                <img
                                  src={Environment}
                                  alt="feature0-small-img "
                                />
                              </div>
                              <div className="feature-small-img swiper-slide">
                                <img src={Economic} alt="feature0-small-img " />
                              </div>
                            </div>
                            {/* <div className="swiper-pagination"></div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainableFeaturesSection;
