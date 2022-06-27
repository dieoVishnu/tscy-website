import React from "react";
import "../index.css";
import logo from "../assets/svg/logo/tsc-logo.svg";
import logow from "../assets/svg/logo/tsc-logo-white.svg";

function Header() {
  return (
    <header
      id="header"
      class="header"
      /*      class="header animate"
      data-animation="fadeInUp"
      data-duration="100"
*/
    >
      <div class="header__wrapper">
        <div class="header__left">
          <a href="/">
            <div
              class="brand-logo "
              data-animation="fadeInUp"
              data-duration="100"
            >
              <img src={logo} alt="brand-logo" id="brand-logo" />
              <img src={logow} alt="brand-logo" id="w-brand-logo" />
            </div>
          </a>
        </div>
        <div class="mobile-navigation-wrapper">
          <div class="header__middle">
            <div class="header__lists">
              <ul class="h-service-list appartment-list">
                <li class="h-service-item appartment-item haschildren hasMenu">
                  <a href="/#MasterPlan" class="h-service-cta appartment-cta">
                    <p> Find Your Villa </p>
                  </a>
                  <div class="inner-megamenu">
                    <div class="menu-list">
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="400"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          Courtyard Villa
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          3 Bedroom Unit
                          <span>West Villas</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/unit-feature/bedroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              3 Bedroom
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Built Up Area 256 m2
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="/3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="600"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          Courtyard Villa
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          4 Bedroom Unit
                          <span>West Villas</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/unit-feature/bedroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              4 Bedroom
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Built Up Area 285 m2
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="/4-bedroom-courtyard-villa-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="800"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          Garden Villa
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          4 Bedroom Unit
                          <span>East Villas</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/unit-feature/bedroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              4 Bedroom{" "}
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Built Up Area 459 m2
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="/4-bedroom-garden-villa-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      {/*{" "}
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="1000"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE D
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 5,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              9 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 45,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="1200"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE E
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 3,200 PER MONTH
                          <span>Built Up Area 4,250 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              4 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 45,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="1400"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          END UNIT- TYPE E FARM
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 5,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              9 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 45,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
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
                <li class="h-service-item appartment-item haschildren">
                  <a href="floor-plan.php" class="h-service-cta appartment-cta">
                    <p>Floor Plans</p>
                  </a>
                  {/*{" "}
                  <div class="inner-megamenu">
                    <div class="menu-list">
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="400"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE A
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="600"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE B
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="800"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE C
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="1000"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE D
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 5,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              9 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 45,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
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
                <li class="h-service-item appartment-item haschildren">
                  <a href="/news.php" class="h-service-cta appartment-cta">
                    <p>News</p>
                  </a>
                  {/*{" "}
                  <div class="inner-megamenu">
                    <div class="menu-list">
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="400"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE A
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="600"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE B
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="800"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE C
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="1000"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE D
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 5,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              9 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 45,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
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
              <ul class="h-service-list town-house-list">
                <li class="h-service-item town-house-item">
                  <div class="tile-icon">
                    <img
                      src="/assets/svg/header/town-house-icon.svg"
                      width="45"
                      height="30"
                      alt=""
                      class="svg-convert"
                    />
                  </div>
                </li>
                <li class="h-service-item townhouse-item haschildren">
                  <a href="javascript:" class="h-service-cta appartment-cta">
                    <p>
                      3 Bedroom <span>Townhouse</span>
                    </p>
                  </a>
                  <div class="inner-megamenu">
                    <div class="menu-list">
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="400"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE C1
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 3,154 PER MONTH
                          <span>Built Up Area 6,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              3 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="600"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE C2
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="800"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE C
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="1000"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE D
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,674 PER MONTH
                          <span>Built Up Area 5,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              9 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 45,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
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
                <li class="h-service-item appartment-item haschildren">
                  <a href="javascript:" class="h-service-cta appartment-cta">
                    <p>
                      4 Bedroom <span>Apartment</span>
                    </p>
                  </a>
                  <div class="inner-megamenu">
                    <div class="menu-list">
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="400"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE D2
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 9,574 PER MONTH
                          <span>Built Up Area 2,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              4 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,300 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="600"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          END UNIT - TYPE D3
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 3,674 PER MONTH
                          <span>Built Up Area 1,650 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,150 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="800"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE C3
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 5,474 PER MONTH
                          <span>Built Up Area 2,450 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              5 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 2,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
                            data-animation="fadeInUp"
                            data-duration="900"
                          >
                            LEARN MORE
                          </a>
                        </div>
                      </div>
                      <div
                        class="menu-card animate"
                        data-animation="zoomIn"
                        data-duration="1000"
                      >
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="300"
                        >
                          MID UNIT - TYPE D5
                        </p>
                        <p
                          class="animate"
                          data-animation="fadeInUp"
                          data-duration="400"
                        >
                          STARTING FROM OMR 7,541 PER MONTH
                          <span>Built Up Area 3,958 Sq.ft</span>
                        </p>
                        <div class="mega-footer">
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/bathroom.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="500"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="600"
                            >
                              4 Bathrooms
                            </span>
                          </div>
                          <div class="bathrooms">
                            <img
                              src="/assets/svg/header/plot.svg"
                              alt=""
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="700"
                            />
                            <span
                              class="animate"
                              data-animation="fadeInUp"
                              data-duration="800"
                            >
                              Plot Area 45,800 Sq.Ft.
                            </span>
                          </div>
                        </div>
                        <div class="learn-more">
                          <a
                            href="3-bedroom-detail.php"
                            class="common-anchor animate"
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
        <div class="find-villa">
          <span
            id="find-your-villa"
            class="animate"
            data-animation="fadeInUp"
            data-duration="300"
          >
            Find Your Villa
          </span>
        </div>

        <div class="header-villa-cross">
          <span></span>
          <span></span>
        </div>
        <div class="header__menu-mbl">
          <div class="mobile-unit">
            <div class="mobile-menu-card">
              <div class="bs-example">
                <div class="accordion" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h2 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                        >
                          MID UNIT - TYPE D
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      class="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="menu-card">
                          <p
                            class="animate"
                            data-animation="fadeInUp"
                            data-duration="300"
                          >
                            MID UNIT - TYPE D
                          </p>
                          <p
                            class="animate"
                            data-animation="fadeInUp"
                            data-duration="400"
                          >
                            STARTING FROM OMR 5,674 PER MONTH
                            <span>Built Up Area 2,650 Sq.ft</span>
                          </p>
                          <div class="mega-footer">
                            <div class="bathrooms">
                              <img
                                src="/assets/svg/header/bathroom.svg"
                                alt=""
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="500"
                              />
                              <span
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="600"
                              >
                                5 Bathrooms
                              </span>
                            </div>
                            <div class="bathrooms">
                              <img
                                src="/assets/svg/header/plot.svg"
                                alt=""
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="700"
                              />
                              <span
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="800"
                              >
                                Plot Area 2,800 Sq.Ft.
                              </span>
                            </div>
                          </div>
                          <div class="learn-more">
                            <a
                              href="3-bedroom-detail.php"
                              class="common-anchor animate"
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
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h2 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                        >
                          MID UNIT - TYPE D
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse show"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="menu-card">
                          <p
                            class="animate"
                            data-animation="fadeInUp"
                            data-duration="300"
                          >
                            MID UNIT - TYPE D
                          </p>
                          <p
                            class="animate"
                            data-animation="fadeInUp"
                            data-duration="400"
                          >
                            STARTING FROM OMR 5,674 PER MONTH
                            <span>Built Up Area 2,650 Sq.ft</span>
                          </p>
                          <div class="mega-footer">
                            <div class="bathrooms">
                              <img
                                src="/assets/svg/header/bathroom.svg"
                                alt=""
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="500"
                              />
                              <span
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="600"
                              >
                                5 Bathrooms
                              </span>
                            </div>
                            <div class="bathrooms">
                              <img
                                src="/assets/svg/header/plot.svg"
                                alt=""
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="700"
                              />
                              <span
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="800"
                              >
                                Plot Area 2,800 Sq.Ft.
                              </span>
                            </div>
                          </div>
                          <div class="learn-more">
                            <a
                              href="3-bedroom-detail.php"
                              class="common-anchor animate"
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
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h2 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                        >
                          MID UNIT - TYPE D
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="menu-card">
                          <p
                            class="animate"
                            data-animation="fadeInUp"
                            data-duration="300"
                          >
                            MID UNIT - TYPE D
                          </p>
                          <p
                            class="animate"
                            data-animation="fadeInUp"
                            data-duration="400"
                          >
                            STARTING FROM OMR 5,674 PER MONTH
                            <span>Built Up Area 2,650 Sq.ft</span>
                          </p>
                          <div class="mega-footer">
                            <div class="bathrooms">
                              <img
                                src="/assets/svg/header/bathroom.svg"
                                alt=""
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="500"
                              />
                              <span
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="600"
                              >
                                5 Bathrooms
                              </span>
                            </div>
                            <div class="bathrooms">
                              <img
                                src="/assets/svg/header/plot.svg"
                                alt=""
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="700"
                              />
                              <span
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="800"
                              >
                                Plot Area 2,800 Sq.Ft.
                              </span>
                            </div>
                          </div>
                          <div class="learn-more">
                            <a
                              href="3-bedroom-detail.php"
                              class="common-anchor animate"
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
                  <div class="card">
                    <div class="card-header" id="headingFour">
                      <h2 class="mb-0">
                        <button
                          type="button"
                          class="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                        >
                          MID UNIT - TYPE D
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFour"
                      class="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="menu-card">
                          <p
                            class="animate"
                            data-animation="fadeInUp"
                            data-duration="300"
                          >
                            MID UNIT - TYPE D
                          </p>
                          <p
                            class="animate"
                            data-animation="fadeInUp"
                            data-duration="400"
                          >
                            STARTING FROM OMR 5,674 PER MONTH
                            <span>Built Up Area 2,650 Sq.ft</span>
                          </p>
                          <div class="mega-footer">
                            <div class="bathrooms">
                              <img
                                src="/assets/svg/header/bathroom.svg"
                                alt=""
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="500"
                              />
                              <span
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="600"
                              >
                                5 Bathrooms
                              </span>
                            </div>
                            <div class="bathrooms">
                              <img
                                src="/assets/svg/header/plot.svg"
                                alt=""
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="700"
                              />
                              <span
                                class="animate"
                                data-animation="fadeInUp"
                                data-duration="800"
                              >
                                Plot Area 2,800 Sq.Ft.
                              </span>
                            </div>
                          </div>
                          <div class="learn-more">
                            <a
                              href="3-bedroom-detail.php"
                              class="common-anchor animate"
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
        <div class="header__right">
          <div class="header-right-wrapper">
            <div class="h-right-segment__btn register-popup-open">
              <a href="javascript:;">Register Interest</a>
            </div>
            <div class="h-right-segment">
              {/*
                    <div class="lang-switcher">
                        <ul class="lang-list animate" data-animation="fadeInUp" data-duration="300">
                            <li class="lang-item active">
                                <a href="/"> ENG</a>
                            </li>
                             <li class="lang-item">
                                <a href="/ar/"> AR </a>
                            </li>
                        </ul>
                    </div>
                     */}
              {/* <div class="register-btn animate" data-animation="fadeInUp" data-duration="400">
                        <a href="register.php">
                            <img src="/assets/svg/header/register-btn.svg" class="svg-convert" alt="">
                        </a>
                    </div> */}
            </div>
            {/* <div class="adjust-vol-wrap">
                    <div class="vol-img animate" data-animation="fadeInUp" data-duration="500">
                        <img src="/assets/svg/header/volume-icon.svg" class="svg-convert" alt="">
                    </div>
                </div> */}
          </div>
        </div>
        <div class="toogle-wrap">
          <div class="toggle-menu">
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
