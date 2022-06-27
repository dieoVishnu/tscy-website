import React from "react";
import "../../index.css";
import banner from "../../assets/images/banner-img/banner-img-1.png";
import banner2 from "../../assets/images/banner-img/banner-img-2.png";
import banner3 from "../../assets/images/banner-img/banner-img-3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

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
    <div class="section banner-section">
      <Swiper
        class="hero__slider"
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
          <div class="hero-slide-wrapper">
            <div class="hero__img">
              <img src={banner} alt="banner-img" />
            </div>
            <div class="hero__caption">
              <h1>
                LEAD THE CHANGE
                <span>TODAY FOR A BETTER TOMORROW</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="hero__img">
            <img src={banner2} alt="banner-img" />
          </div>
          <div class="hero__caption">
            <h1>
              LEAD THE CHANGE
              <span>TODAY FOR A BETTER TOMORROW</span>
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="hero__img">
            <img src={banner3} alt="banner-img" />
          </div>
          <div class="hero__caption">
            <h1>
              LEAD THE CHANGE
              <span>TODAY FOR A BETTER TOMORROW</span>
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    /*
    <div class="section banner-section">
      <div class="hero__slider js-hero">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="hero-slide-wrapper">
                <div class="hero__img">
                  <img src={banner} alt="banner-img" />
                </div>
                <div class="hero__caption">
                  <h1>
                    LEAD THE CHANGE
                    <span>TODAY FOR A BETTER TOMORROW</span>
                  </h1>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="hero-slide-wrapper">
                <div class="hero__img">
                  <img src={banner2} alt="banner-img" />
                </div>
                <div class="hero__caption">
                  <h1>
                    LEAD THE CHANGE
                    <span>TODAY FOR A BETTER TOMORROW</span>
                  </h1>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="hero-slide-wrapper">
                <div class="hero__img">
                  <img src={banner3} alt="banner-img" />
                </div>
                <div class="hero__caption">
                  <h1>
                    LEAD THE CHANGE
                    <span>TODAY FOR A BETTER TOMORROW</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    */
  );
}

export default Banner;
