import React, { useState } from "react";
import "../index.css";
import logo from "../assets/svg/logo/tsc-logo.svg";
import logow from "../assets/svg/logo/tsc-logo-white.svg";

function Header() {
  const [isActive, setActive] = useState("false");
  const [isMenuActive, setMenuActive] = useState("false");
  const [isPopupActive, setPopupActive] = useState("false");

  // document.body.classList.add("popup-open");

  const toggleClass = () => {
    setActive(!isActive);
  };

  // const toggleMenuClass = () => {
  //   setMenuActive(!isMenuActive);
  //   if (document.body.classList.contains("open-menu")) {
  //     document.body.classList.remove("open-menu");
  //   } else {
  //     document.body.classList.add("open-menu");
  //   }
  // };
  const toggleMenuClass = () => {
    setMenuActive(!isMenuActive);
    document.querySelector("body").classList.toggle("open-menu");
  };

  const togglePopup = () => {
    setPopupActive(!isPopupActive);
    document.querySelector("body").classList.toggle("popup-open");
  };

  return (
    <header
      id="header"
      style={{ animationDuration: "1000ms" }}
      // className={`${
      //   isActive
      //     ? "header animate__animated animate__fadeInUp header-light"
      //     : "header animate__animated animate__fadeInUp dark-light"
      // } ${isMenuActive ? "" : "open-menu"}`}
      className={
        isActive
          ? "header animate__animated animate__fadeInUp header-light"
          : "header animate__animated animate__fadeInUp dark-light"
      }
      // data-animation="fadeInUp"
      // data-duration="100"
    >
      <div className="header__wrapper">
        <div className="header__left">
          <a href="/">
            <div
              style={{ animationDuration: "100ms" }}
              className="brand-logo animate__animated animate__fadeInUp"

              // data-animation="fadeInUp"
              // data-duration="100"
            >
              <img src={logo} alt="brand-logo" id="brand-logo" />
              <img src={logow} alt="brand-logo" id="w-brand-logo" />
            </div>
          </a>
        </div>
        <div className="mobile-navigation-wrapper">
          <div className="header__middle">
            <div className="header__lists">
              <ul className="h-service-list appartment-list">
                <li
                  className="h-service-item appartment-item haschildren hasMenu"
                  onMouseEnter={toggleClass}
                  onMouseLeave={toggleClass}
                >
                  <a
                    href="/#MasterPlan"
                    className="h-service-cta appartment-cta"
                  >
                    <p> Find Your Villa </p>
                  </a>
                  <div className="inner-megamenu">
                    <div className="menu-list">
                      <div
                        // className="menu-card animate"
                        className="menu-card animate__animated animate__zoomIn"
                        // data-animation="zoomIn"
                        // data-duration="400"
                      >
                        <p
                          className="animate__animated animate__fadeInUp"
                          // data-animation="fadeInUp"
                          // data-duration="300"
                        >
                          Courtyard Villa
                        </p>
                        <p
                          className="animate__animated animate__fadeInUp"
                          // data-animation="fadeInUp"
                          // data-duration="400"
                        >
                          3 Bedroom Unit
                          <span>West Villas</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/unit-feature/bedroom.svg"
                              alt=""
                              className="animate__animated animate__fadeInUp"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate__animated animate__fadeInUp"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              3 Bedroom
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate__animated animate__fadeInU"
                              // data-animation="fadeInUp"
                              // data-duration="700"
                            />
                            <span
                              className="animate__animated animate__fadeInU"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Built Up Area 256 m2
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="/3-bedroom-detail.php"
                            // className="common-anchor animate"
                            className="common-anchor"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        // className="menu-card animate"
                        className="menu-card"
                        data-animation="zoomIn"
                        data-duration="600"
                      >
                        <p
                          // className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          Courtyard Villa
                        </p>
                        <p
                          // className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          4 Bedroom Unit
                          <span>West Villas</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/unit-feature/bedroom.svg"
                              alt=""
                              // className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              // className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              4 Bedroom
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              // className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              // className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Built Up Area 285 m2
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="/4-bedroom-courtyard-villa-detail.php"
                            // className="common-anchor animate"
                            className="common-anchor"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        // className="menu-card animate"
                        className="menu-card"
                        data-animation="zoomIn"
                        data-duration="800"
                      >
                        <p
                          // className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          Garden Villa
                        </p>
                        <p
                          // className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          4 Bedroom Unit
                          <span>East Villas</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/unit-feature/bedroom.svg"
                              alt=""
                              // className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              // className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              4 Bedroom{" "}
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              // className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              // className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Built Up Area 459 m2
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="/4-bedroom-garden-villa-detail.php"
                            className="common-anchor"
                            // className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      {/*{" "}
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="1000"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE D
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 5,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              9 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 45,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="1200"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE E
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 3,200 PER MONTH
                          <span>Built Up Area 4,250 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              4 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 45,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="1400"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          END UNIT- TYPE E FARM
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 5,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              9 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 45,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>{" "}
                      */}
                    </div>
                  </div>
                </li>
                <li className="h-service-item appartment-item haschildren">
                  <a
                    href="floor-plan.php"
                    className="h-service-cta appartment-cta"
                  >
                    <p>Floor Plans</p>
                  </a>
                  {/*{" "}
                  <div className="inner-megamenu">
                    <div className="menu-list">
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="400"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE A
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="600"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE B
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="800"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE C
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="1000"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE D
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 5,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              9 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 45,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  */}
                </li>
                <li className="h-service-item appartment-item haschildren">
                  <a href="/news.php" className="h-service-cta appartment-cta">
                    <p>News</p>
                  </a>
                  {/*{" "}
                  <div className="inner-megamenu">
                    <div className="menu-list">
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="400"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE A
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="600"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE B
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="800"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE C
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="1000"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE D
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 5,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              9 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 45,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  */}
                </li>
              </ul>
              {/*{" "}
              <ul className="h-service-list town-house-list">
                <li className="h-service-item town-house-item">
                  <div className="tile-icon">
                    <img
                      src="/assets/svg/header/town-house-icon.svg"
                      width="45"
                      height="30"
                      alt=""
                      className="svg-convert"
                    />
                  </div>
                </li>
                <li className="h-service-item townhouse-item haschildren">
                  <a href="javascript:" className="h-service-cta appartment-cta">
                    <p>
                      3 Bedroom <span>Townhouse</span>
                    </p>
                  </a>
                  <div className="inner-megamenu">
                    <div className="menu-list">
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="400"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE C1
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 3,154 PER MONTH
                          <span>Built Up Area 6,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              3 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="600"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE C2
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="800"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE C
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="1000"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE D
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 5,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              9 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 45,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="h-service-item appartment-item haschildren">
                  <a href="javascript:" className="h-service-cta appartment-cta">
                    <p>
                      4 Bedroom <span>Apartment</span>
                    </p>
                  </a>
                  <div className="inner-megamenu">
                    <div className="menu-list">
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="400"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE D2
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 9,574 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              4 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,300 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="600"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          END UNIT - TYPE D3
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 3,674 PER MONTH
                          <span>Built Up Area 1,650 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,150 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="800"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE C3
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,474 PER MONTH
                          <span>Built Up Area 2,450 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        className="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="1000"
                      >
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE D5
                        </p>
                        <p
                          className="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 7,541 PER MONTH
                          <span>Built Up Area 3,958 Sq.ft</span>
                        </p>
                        <div className="mega-footer">
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              4 Bathrooms
                            </span>
                          </div>
                          <div className="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              className="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 45,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div className="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            className="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>{" "}
              */}
            </div>
          </div>
        </div>
        <div className="find-villa">
          <span
            id="find-your-villa"
            className="animate"
            data-animation="fadeInUp"
            data-duration="300"
          >
            Find Your Villa
          </span>
        </div>

        <div className="header-villa-cross">
          <span></span>
          <span></span>
        </div>
        <div className="header__menu-mbl">
          <div className="mobile-unit">
            <div className="mobile-menu-card">
              <div className="bs-example">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                        >
                          MID UNIT - TYPE D
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="menu-card">
                          <p
                            className="animate"
                            data-animation="fadeInUp"
                            data-duration="300"
                          >
                            MID UNIT - TYPE D
                          </p>
                          <p
                            className="animate"
                            data-animation="fadeInUp"
                            data-duration="400"
                          >
                            STARTING FROM OMR 5,674 PER MONTH
                            <span>Built Up Area 2,650 Sq.ft</span>
                          </p>
                          <div className="mega-footer">
                            <div className="bathrooms">
                              <img
                                src="/assets/svg/header/bathroom.svg"
                                alt=""
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="500"
                              />
                              <span
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="600"
                              >
                                5 Bathrooms
                              </span>
                            </div>
                            <div className="bathrooms">
                              <img
                                src="/assets/svg/header/plot.svg"
                                alt=""
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="700"
                              />
                              <span
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="800"
                              >
                                Plot Area 2,800 Sq.Ft.
                              </span>
                            </div>
                          </div>
                          <div className="learn-more">
                            <a
                              href="3-bedroom-detail.php"
                              className="common-anchor animate"
                              data-animation="fadeInUp"
                              data-duration="900"
                            >
                              LEARN MORE
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                        >
                          MID UNIT - TYPE D
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse show"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="menu-card">
                          <p
                            className="animate"
                            data-animation="fadeInUp"
                            data-duration="300"
                          >
                            MID UNIT - TYPE D
                          </p>
                          <p
                            className="animate"
                            data-animation="fadeInUp"
                            data-duration="400"
                          >
                            STARTING FROM OMR 5,674 PER MONTH
                            <span>Built Up Area 2,650 Sq.ft</span>
                          </p>
                          <div className="mega-footer">
                            <div className="bathrooms">
                              <img
                                src="/assets/svg/header/bathroom.svg"
                                alt=""
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="500"
                              />
                              <span
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="600"
                              >
                                5 Bathrooms
                              </span>
                            </div>
                            <div className="bathrooms">
                              <img
                                src="/assets/svg/header/plot.svg"
                                alt=""
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="700"
                              />
                              <span
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="800"
                              >
                                Plot Area 2,800 Sq.Ft.
                              </span>
                            </div>
                          </div>
                          <div className="learn-more">
                            <a
                              href="3-bedroom-detail.php"
                              className="common-anchor animate"
                              data-animation="fadeInUp"
                              data-duration="900"
                            >
                              LEARN MORE
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                        >
                          MID UNIT - TYPE D
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="menu-card">
                          <p
                            className="animate"
                            data-animation="fadeInUp"
                            data-duration="300"
                          >
                            MID UNIT - TYPE D
                          </p>
                          <p
                            className="animate"
                            data-animation="fadeInUp"
                            data-duration="400"
                          >
                            STARTING FROM OMR 5,674 PER MONTH
                            <span>Built Up Area 2,650 Sq.ft</span>
                          </p>
                          <div className="mega-footer">
                            <div className="bathrooms">
                              <img
                                src="/assets/svg/header/bathroom.svg"
                                alt=""
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="500"
                              />
                              <span
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="600"
                              >
                                5 Bathrooms
                              </span>
                            </div>
                            <div className="bathrooms">
                              <img
                                src="/assets/svg/header/plot.svg"
                                alt=""
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="700"
                              />
                              <span
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="800"
                              >
                                Plot Area 2,800 Sq.Ft.
                              </span>
                            </div>
                          </div>
                          <div className="learn-more">
                            <a
                              href="3-bedroom-detail.php"
                              className="common-anchor animate"
                              data-animation="fadeInUp"
                              data-duration="900"
                            >
                              LEARN MORE
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <h2 className="mb-0">
                        <button
                          type="button"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                        >
                          MID UNIT - TYPE D
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="menu-card">
                          <p
                            className="animate"
                            data-animation="fadeInUp"
                            data-duration="300"
                          >
                            MID UNIT - TYPE D
                          </p>
                          <p
                            className="animate"
                            data-animation="fadeInUp"
                            data-duration="400"
                          >
                            STARTING FROM OMR 5,674 PER MONTH
                            <span>Built Up Area 2,650 Sq.ft</span>
                          </p>
                          <div className="mega-footer">
                            <div className="bathrooms">
                              <img
                                src="/assets/svg/header/bathroom.svg"
                                alt=""
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="500"
                              />
                              <span
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="600"
                              >
                                5 Bathrooms
                              </span>
                            </div>
                            <div className="bathrooms">
                              <img
                                src="/assets/svg/header/plot.svg"
                                alt=""
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="700"
                              />
                              <span
                                className="animate"
                                data-animation="fadeInUp"
                                data-duration="800"
                              >
                                Plot Area 2,800 Sq.Ft.
                              </span>
                            </div>
                          </div>
                          <div className="learn-more">
                            <a
                              href="3-bedroom-detail.php"
                              className="common-anchor animate"
                              data-animation="fadeInUp"
                              data-duration="900"
                            >
                              LEARN MORE
                            </a>
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
        <div className="header__right">
          <div className="header-right-wrapper">
            <div className="h-right-segment__btn register-popup-open">
              <button onClick={togglePopup}>Register Interest</button>
            </div>
            <div className="h-right-segment">
              {/*
                    <div className="lang-switcher">
                        <ul className="lang-list animate" data-animation="fadeInUp" data-duration="300">
                            <li className="lang-item active">
                                <a href="/"> ENG</a>
                            </li>
                             <li className="lang-item">
                                <a href="/ar/"> AR </a>
                            </li>
                        </ul>
                    </div>
                     */}
              {/* <div className="register-btn animate" data-animation="fadeInUp" data-duration="400">
                        <a href="register.php">
                            <img src="/assets/svg/header/register-btn.svg" className="svg-convert" alt="">
                        </a>
                    </div> */}
            </div>
            {/* <div className="adjust-vol-wrap">
                    <div className="vol-img animate" data-animation="fadeInUp" data-duration="500">
                        <img src="/assets/svg/header/volume-icon.svg" className="svg-convert" alt="">
                    </div>
                </div> */}
          </div>
        </div>
        <div className="toogle-wrap">
          <div
            className={isMenuActive ? "toggle-menu" : "toggle-menu open"}
            // className="toggle-menu"
            onClick={toggleMenuClass}
          >
            {/* find solution for this */}
            <a href="javascript:">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
