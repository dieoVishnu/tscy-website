import React from "react";
import "../../index.css";
import banner from "../../assets/images/banner-img/banner-img-1.png";
import banner2 from "../../assets/images/banner-img/banner-img-2.png";
import banner3 from "../../assets/images/banner-img/banner-img-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

var interleaveOffset = 0.5;

function progressFunction() {
  var hswiper = this;
  for (var i = 0; i < hswiper.slides.length; i++) {
    var slideProgress = hswiper.slides[i].progress;
    var innerOffset = hswiper.width * interleaveOffset;
    var innerTranslate = slideProgress * innerOffset;
    hswiper.slides[i].querySelector(".hero__img").style.transform =
      "translate3d(" + innerTranslate + "px, 0, 0)";
  }
}
function touchStartFunction() {
  var hswiper = this;
  for (var i = 0; i < hswiper.slides.length; i++) {
    hswiper.slides[i].style.transition = "";
  }
}

function setTransitionFunction(speed) {
  var hswiper = this;
  for (var i = 0; i < hswiper.slides.length; i++) {
    hswiper.slides[i].style.transition = speed + "ms";
    hswiper.slides[i].querySelector(".hero__img").style.transition =
      speed + "ms";
  }
}

function Banner() {
  return (
    <div className="section banner-section">
      <Swiper
        className="hero__slider"
        modules={[Navigation, Pagination]}
        loop={true}
        speed={1000}
        autoplay={{ disableOnInteraction: false, delay: 5000 }}
        pagination={{ clickable: true }}
        on={{
          progress: function () {
            var hswiper = this;
            for (var i = 0; i < hswiper.slides.length; i++) {
              var slideProgress = hswiper.slides[i].progress;
              var innerOffset = hswiper.width * interleaveOffset;
              var innerTranslate = slideProgress * innerOffset;
              hswiper.slides[i].querySelector(".hero__img").style.transform =
                "translate3d(" + innerTranslate + "px, 0, 0)";
            }
          },
          touchStart: function () {
            var hswiper = this;
            for (var i = 0; i < hswiper.slides.length; i++) {
              hswiper.slides[i].style.transition = "";
            }
          },
          setTransition: function (speed) {
            var hswiper = this;
            for (var i = 0; i < hswiper.slides.length; i++) {
              hswiper.slides[i].style.transition = speed + "ms";
              hswiper.slides[i].querySelector(".hero__img").style.transition =
                speed + "ms";
            }
          },
        }}
      >
        <SwiperSlide>
          <div className="hero-slide-wrapper">
            <div className="hero__img">
              <img src={banner} alt="banner-img" />
            </div>
            <div className="hero__caption">
              <h1>
                LEAD THE CHANGE
                <span>TODAY FOR A BETTER TOMORROW</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero__img">
            <img src={banner2} alt="banner-img" />
          </div>
          <div className="hero__caption">
            <h1>
              LEAD THE CHANGE
              <span>TODAY FOR A BETTER TOMORROW</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero__img">
            <img src={banner3} alt="banner-img" />
          </div>
          <div className="hero__caption">
            <h1>
              LEAD THE CHANGE
              <span>TODAY FOR A BETTER TOMORROW</span>
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    /*
    <div className="section banner-section">
      <div className="hero__slider js-hero">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="hero-slide-wrapper">
                <div className="hero__img">
                  <img src={banner} alt="banner-img" />
                </div>
                <div className="hero__caption">
                  <h1>
                    LEAD THE CHANGE
                    <span>TODAY FOR A BETTER TOMORROW</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="hero-slide-wrapper">
                <div className="hero__img">
                  <img src={banner2} alt="banner-img" />
                </div>
                <div className="hero__caption">
                  <h1>
                    LEAD THE CHANGE
                    <span>TODAY FOR A BETTER TOMORROW</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="hero-slide-wrapper">
                <div className="hero__img">
                  <img src={banner3} alt="banner-img" />
                </div>
                <div className="hero__caption">
                  <h1>
                    LEAD THE CHANGE
                    <span>TODAY FOR A BETTER TOMORROW</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
    */
  );
}

export default Banner;
