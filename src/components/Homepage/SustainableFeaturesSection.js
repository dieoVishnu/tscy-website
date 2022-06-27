import React from "react";
import "../../index.css";
import homeIcon from "../../assets/svg/sustainable-feature/home-icon.svg";
import recycleIcon from "../../assets/svg/sustainable-feature/recycle-icon.svg";
import timerHand from "../../assets/svg/sustainable-feature/timer-hand.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.min.css"; //added text underline

import Social from "../../assets/images/sustainable-feature/SOCIAL-min.jpeg";
import Environment from "../../assets/images/sustainable-feature/ENVIRONMENT-min.jpeg";
import Economic from "../../assets/images/sustainable-feature/ECONOMIC-min.jpeg";
function SustainableFeaturesSection() {
  return (
    <div class="section sustainable-features-section">
      <div class="container">
        <div class="twocol-row align-items-center">
          <div class="col-10">
            <Swiper
              class="swiper feature-navigation"
              slidesPerView={3}
              watchSlidesProgress={true}
              direction={"horizontal"}
              autoplay={true}
              speed={1000}
              breakpoints={{ 1199: { direction: "vertical" } }}
            >
              <div class="swiper-wrapper align-items-center">
                <SwiperSlide class="feature-navigation__item">
                  <div class="feature-navigation__image">
                    {/* <svg height="150" width="150">
                                        <circle id='yellow' cx="70" cy="70" r="66" stroke="black" stroke-width="3" fill="none" stroke-dasharray='1000' stroke-dashoffset='1000' />
                                    </svg> */}
                    <img
                      class="svg-convert"
                      src={homeIcon}
                      alt="feature-nav-icon"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide class="feature-navigation__item">
                  <div class="feature-navigation__image">
                    {/* <svg height="150" width="150">
                                        <circle id='yellow' cx="70" cy="70" r="66" stroke="black" stroke-width="3" fill="none" stroke-dasharray='1000' stroke-dashoffset='1000' />
                                    </svg> */}
                    <img
                      class="svg-convert"
                      src={recycleIcon}
                      alt="feature-nav-icon"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide class="feature-navigation__item">
                  <div class="feature-navigation__image">
                    {/* <svg height="150" width="150">
                                        <circle id='yellow' cx="70" cy="70" r="66" stroke="black" stroke-width="3" fill="none" stroke-dasharray='1000' stroke-dashoffset='1000' />
                                    </svg> */}
                    <img
                      class="svg-convert"
                      src={timerHand}
                      alt="feature-nav-icon"
                    />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div class="col-90">
            <div class="feature-box">
              <div class="swiper feature-wrap-content">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="twocol-row">
                      <div class="col-50">
                        <div class="feature-content-wrapper">
                          <div class="feature-content">
                            <div class="feature-content__card">
                              <h4 class="feature-content-main-heading">
                                Sustainable Features
                              </h4>
                              <h1 class="feature-content__title yellow-color">
                                Social <span> SUSTAINABIlitY</span>
                              </h1>
                              <p class="feature-content__content">
                                Through amenities and community outreach
                                programs
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-50">
                        <div class="feature-images-wrapper">
                          <div class="swiper feature-img-wrapper">
                            <div class="swiper-wrapper">
                              <div class="feature-small-img swiper-slide">
                                <img src={Social} alt="feature0-small-img " />
                              </div>
                              <div class="feature-small-img swiper-slide">
                                <img
                                  src={Environment}
                                  alt="feature0-small-img "
                                />
                              </div>
                              <div class="feature-small-img swiper-slide">
                                <img src={Economic} alt="feature0-small-img " />
                              </div>
                            </div>
                            {/* <div class="swiper-pagination"></div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="twocol-row">
                      <div class="col-50">
                        <div class="feature-content-wrapper">
                          <div class="feature-content">
                            <div class="feature-content__card">
                              <h4 class="feature-content-main-heading">
                                Sustainable Features
                              </h4>
                              <h1 class="feature-content__title green-color">
                                Environmental <span> SUSTAINABIlitY</span>
                              </h1>
                              <p class="feature-content__content">
                                Maintained through passive and active design
                                strategies
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-50">
                        <div class="feature-images-wrapper">
                          <div class="swiper feature-img-wrapper">
                            <div class="swiper-wrapper">
                              <div class="feature-small-img swiper-slide">
                                <img src={Social} alt="feature0-small-img " />
                              </div>
                              <div class="feature-small-img swiper-slide">
                                <img
                                  src={Environment}
                                  alt="feature0-small-img "
                                />
                              </div>
                              <div class="feature-small-img swiper-slide">
                                <img src={Economic} alt="feature0-small-img " />
                              </div>
                            </div>
                            {/* <div class="swiper-pagination"></div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="twocol-row">
                      <div class="col-50">
                        <div class="feature-content-wrapper">
                          <div class="feature-content">
                            <div class="feature-content__card">
                              <h4 class="feature-content-main-heading">
                                Sustainable Features
                              </h4>
                              <h1 class="feature-content__title lightBlue-color">
                                Economic <span> SUSTAINABIlitY</span>
                              </h1>
                              <p class="feature-content__content">
                                Facilitated through operational efficiencies,
                                savings for residents, and contribution to a
                                green economy
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-50">
                        <div class="feature-images-wrapper">
                          <div class="swiper feature-img-wrapper">
                            <div class="swiper-wrapper">
                              <div class="feature-small-img swiper-slide">
                                <img src={Social} alt="feature0-small-img " />
                              </div>
                              <div class="feature-small-img swiper-slide">
                                <img
                                  src={Environment}
                                  alt="feature0-small-img "
                                />
                              </div>
                              <div class="feature-small-img swiper-slide">
                                <img src={Economic} alt="feature0-small-img " />
                              </div>
                            </div>
                            {/* <div class="swiper-pagination"></div> */}
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
