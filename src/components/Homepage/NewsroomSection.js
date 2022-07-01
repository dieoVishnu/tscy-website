import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

import { Pagination } from "swiper";

function NewsroomSection() {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<div class="' + className + '">' + (index + 1) + "</span>";
        },
      };
  return (

        <section className="section newsroom-feature">
  <div className="container">
    <div className="section-wrapper">
      <div
        className="sec-header animate__animated animate__fadeInUp text-left d-flex justify-content-start"
        data-animation="fadeInUp"
        data-duration={600}
      >
        <h2>NewsRoom</h2>
      </div>
      <div className="newsroom-slider-wrapper">
        <div className="newsroom-body">

        <Swiper
      spaceBetween={30}
      slidesPerView={4}
      pagination= {{
        el:".news-pagination",
        clickable: true
    }}
      // pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      breakpoints= {{
        1024: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
    >

        <SwiperSlide>
        <div className="swiper-slide">
    <div
      className="newsroom-card animate__animated animate__fadeInUp"
      data-animation="fadeInUp"
      data-duration={700}
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
            25% Of The Sustainable City Yiti First Phase
            Accomplished
          </h4>
          <p
            className="description animate__animated animate__fadeInUp"
            data-animation="fadeInUp"
            data-duration={900}
          >
            According to Yousif Ahmed Al Mutawa, Chief Executive
            Officer of Oman about 60% of the residential villas
            sold...
          </p>
        </div>
        <div className="newsroom-footer">
          <a href="news-detail.php" className="c-btn common-anchor">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide">
    <div
      className="newsroom-card animate__animated animate__fadeInUp"
      data-animation="fadeInUp"
      data-duration={700}
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
            25% Of The Sustainable City Yiti First Phase
            Accomplished
          </h4>
          <p
            className="description animate__animated animate__fadeInUp"
            data-animation="fadeInUp"
            data-duration={900}
          >
            According to Yousif Ahmed Al Mutawa, Chief Executive
            Officer of Oman about 60% of the residential villas
            sold...
          </p>
        </div>
        <div className="newsroom-footer">
          <a href="news-detail.php" className="c-btn common-anchor">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide">
    <div
      className="newsroom-card animate__animated animate__fadeInUp"
      data-animation="fadeInUp"
      data-duration={700}
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
            25% Of The Sustainable City Yiti First Phase
            Accomplished
          </h4>
          <p
            className="description animate__animated animate__fadeInUp"
            data-animation="fadeInUp"
            data-duration={900}
          >
            According to Yousif Ahmed Al Mutawa, Chief Executive
            Officer of Oman about 60% of the residential villas
            sold...
          </p>
        </div>
        <div className="newsroom-footer">
          <a href="news-detail.php" className="c-btn common-anchor">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide">
    <div
      className="newsroom-card animate__animated animate__fadeInUp"
      data-animation="fadeInUp"
      data-duration={700}
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
            25% Of The Sustainable City Yiti First Phase
            Accomplished
          </h4>
          <p
            className="description animate__animated animate__fadeInUp"
            data-animation="fadeInUp"
            data-duration={900}
          >
            According to Yousif Ahmed Al Mutawa, Chief Executive
            Officer of Oman about 60% of the residential villas
            sold...
          </p>
        </div>
        <div className="newsroom-footer">
          <a href="news-detail.php" className="c-btn common-anchor">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide">
    <div
      className="newsroom-card animate__animated animate__fadeInUp"
      data-animation="fadeInUp"
      data-duration={700}
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
            25% Of The Sustainable City Yiti First Phase
            Accomplished
          </h4>
          <p
            className="description animate__animated animate__fadeInUp"
            data-animation="fadeInUp"
            data-duration={900}
          >
            According to Yousif Ahmed Al Mutawa, Chief Executive
            Officer of Oman about 60% of the residential villas
            sold...
          </p>
        </div>
        <div className="newsroom-footer">
          <a href="news-detail.php" className="c-btn common-anchor">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-slide">
    <div
      className="newsroom-card animate__animated animate__fadeInUp"
      data-animation="fadeInUp"
      data-duration={700}
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
            25% Of The Sustainable City Yiti First Phase
            Accomplished
          </h4>
          <p
            className="description animate__animated animate__fadeInUp"
            data-animation="fadeInUp"
            data-duration={900}
          >
            According to Yousif Ahmed Al Mutawa, Chief Executive
            Officer of Oman about 60% of the residential villas
            sold...
          </p>
        </div>
        <div className="newsroom-footer">
          <a href="news-detail.php" className="c-btn common-anchor">
            Learn More
          </a>
        </div>
      </div>
    </div>
  </div>
        </SwiperSlide>

    </Swiper>

    <div class="news-pagination"></div>


        
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default NewsroomSection


