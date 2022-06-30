import React from "react";
import "../../index.css";

function MasterplanSection() {
  // console.log(data)



  // useEffect(()=>{
  //     const currentsection = data.destination.anchor
  //     const scrollDirection = data.direction
  //   if(currentsection === "MasterPlan") {
  //       if(scrollDirection === "down"){
  //           setActive(true)
  //       }
  //       if(scrollDirection === "up"){
  //           setActive(false)
  //       }
  //   }
  // },[])


  return (
    <>
      {/* Hello world */}
      {/* <section className="section s1" id="master-plan">
        <div className={active === true ? "slide display-none" : "slide"}>
          <div className="master-plan">
            <div className="img__wrapper">
              <img src="/assets/images/home/map1.jpg" alt="" />
            </div>
            <marquee
              className="clouds__anima clouds__wrapper"
              behavior="scroll"
              scrollamount={3}
              width="100%"
            >
              <img src="/assets/images/home/cloud.png" alt="" />
            </marquee>
            <marquee
              className="clouds__anima clouds__wrapper"
              behavior="scroll"
              scrollamount={3}
              width="100%"
            >
              <img src="/assets/images/home/cloud.png" alt="" />
            </marquee>
            <marquee
              className="clouds__anima-2 clouds__wrapper"
              width="100%"
              scrollamount={3}
            >
              <img src="/assets/images/home/cloud-2.png" alt="" />
            </marquee>
            <marquee
              className="clouds__anima-3 clouds__wrapper"
              width="100%"
              scrollamount={3}
            >
              <img src="/assets/images/home/cloud-3.png" alt="" />
            </marquee>
            <marquee
              className="clouds__anima-4 clouds__wrapper"
              width="100%"
              scrollamount={3}
            >
              <img src="/assets/images/home/cloud-4.png" alt="" />
            </marquee>
            <marquee
              className="clouds__anima-5 clouds__wrapper"
              width="100%"
              scrollamount={3}
            >
              <img src="/assets/images/home/cloud-5.png" alt="" />
            </marquee>
          </div>
        </div>
        <div className={active === true ? "slide active " : "slide display-none"}>
          <div className="master-plan ">
            <ul className="runing__wrapper">
              <li className="one-map">
                <div className="map__wrapper">
                  <img
                    className="svg-convert"
                    src="/assets/images/home/run1.svg"
                  />
                </div>
                <p>Walkability</p>
              </li>
              <li className="two-map">
                <div className="map__wrapper">
                  <img
                    className="svg-convert"
                    src="/assets/images/home/run2.svg"
                  />
                </div>
                <p>
                  {" "}
                  Jogging <br />
                  Track
                </p>
              </li>
              <li className="three-map">
                <div className="map__wrapper">
                  <img
                    className="svg-convert"
                    src="/assets/images/home/run3.svg"
                  />
                </div>
                <p>
                  {" "}
                  Cycling
                  <br />
                  Track
                </p>
              </li>
              <li className="four-map">
                <div className="map__wrapper">
                  <img
                    className="svg-convert"
                    src="/assets/images/home/run4.svg"
                  />
                </div>
                <p>
                  {" "}
                  Equestrian
                  <br />
                  Track
                </p>
              </li>
              <li className="five-map">
                <div className="map__wrapper">
                  <img
                    className="svg-convert"
                    src="/assets/images/home/run5.svg"
                  />
                </div>
                <p>
                  {" "}
                  Buggy
                  <br />
                  Circulation
                </p>
              </li>
              <li className="six-map">
                <div className="map__wrapper">
                  <img
                    className="svg-convert"
                    src="/assets/images/home/run7.svg"
                  />
                </div>
                <p>
                  {" "}
                  EV Shuttle and
                  <br />
                  Autonomous Vehicle
                </p>
              </li>
              <li className="seven-map">
                <div className="map__wrapper">
                  <img
                    className="svg-convert"
                    src="/assets/images/home/run6.svg"
                  />
                </div>
                <p> Public Transportation</p>
              </li>
            </ul>
            <div className="img__wrapper ">
              <img
                src="/assets/images/home/map2.jpg"
                alt=""
                className="default-img"
              />
              <img
                src="/assets/images/home/map-1.jpg"
                className="one-map-wrap d-none"
                alt="map-image"
              />
              <img
                src="/assets/images/home/map-2.jpg"
                className="two-map-wrap d-none"
                alt="map-image"
              />
              <img
                src="/assets/images/home/map-3.jpg"
                className="three-map-wrap d-none"
                alt="map-image"
              />
              <img
                src="/assets/images/home/map-4.jpg"
                className="four-map-wrap d-none"
                alt="map-image"
              />
              <img
                src="/assets/images/home/map-5.jpg"
                className="five-map-wrap d-none"
                alt="map-image"
              />
              <img
                src="/assets/images/home/map-6.jpg"
                className="six-map-wrap d-none"
                alt="map-image"
              />
              <img
                src="/assets/images/home/map-7.jpg"
                className="seven-map-wrap d-none"
                alt="map-image"
              />
            </div>
            <div className="close-icon cross">
              <img src="/assets/images/home/times-solid.svg" alt="cross-icon" />
            </div>
          </div>
        </div>
        <div className="master-plan-card ml-5">
          <div className="master-plan-card--main-wrapper">
            <div className="master-plan-card__title-wrapper">
              <h2>Master Plan</h2>
              <p>
                The project is designed to improve the quality of life for
                residents without compromising the needs of future generations.
              </p>
            </div>
            <div className="master-plan-card__title-wrapper master-plan-card__title-wrapper--fields">
              <h2>FIND YOUR VILLA</h2>
              <form action="">
                <select name="nationality">
                  <option value="" disabled="">
                    Select a Villas
                  </option>
                  <option value="/3-bedroom-detail.php">
                    {" "}
                    Courtyard Villa – 3 Bedroom Unit
                  </option>
                  <option value="/4-bedroom-courtyard-villa-detail.php">
                    {" "}
                    Courtyard Villa – 4 Bedroom Unit
                  </option>
                  <option value="/4-bedroom-garden-villa-detail.php">
                    {" "}
                    Garden Villa – 4 Bedroom Unit{" "}
                  </option>
                </select>
              </form>
            </div>
          </div>
          <div className="master-plan-card__pdf">
            <img src="/assets/svg/downloadarrow-blue.svg" alt="download icon" />
            <a
              href="/assets/images/pdfs/YITI_floorplan_Layout.pdf"
              target="_blank"
            >
              Download Brochure
            </a>
          </div>
          <div className="master-plan-card__btns">
            <a href="javascript:;" className="c-btn common-anchor">
              Find Your Villa
            </a>
            <a
              href="javascript:;"
              id="villas-submit"
              className="c-btn common-anchor master-plan-card__btns--submit"
            >
              submit
            </a>
          </div>
        </div>
      </section> */}

<section className="section s1" id="master-plan">
  <div className="slide">
    <div className="master-plan">
      <div className="img__wrapper">
        <img src="/assets/images/home/map1.jpg" alt="" />
      </div>
      <marquee
        className="clouds__anima clouds__wrapper"
        behavior="scroll"
        scrollamount={3}
        width="100%"
      >
        <img src="/assets/images/home/cloud.png" alt="" />
      </marquee>
      <marquee
        className="clouds__anima clouds__wrapper"
        behavior="scroll"
        scrollamount={3}
        width="100%"
      >
        <img src="/assets/images/home/cloud.png" alt="" />
      </marquee>
      <marquee
        className="clouds__anima-2 clouds__wrapper"
        width="100%"
        scrollamount={3}
      >
        <img src="/assets/images/home/cloud-2.png" alt="" />
      </marquee>
      <marquee
        className="clouds__anima-3 clouds__wrapper"
        width="100%"
        scrollamount={3}
      >
        <img src="/assets/images/home/cloud-3.png" alt="" />
      </marquee>
      <marquee
        className="clouds__anima-4 clouds__wrapper"
        width="100%"
        scrollamount={3}
      >
        <img src="/assets/images/home/cloud-4.png" alt="" />
      </marquee>
      <marquee
        className="clouds__anima-5 clouds__wrapper"
        width="100%"
        scrollamount={3}
      >
        <img src="/assets/images/home/cloud-5.png" alt="" />
      </marquee>
    </div>
  </div>
  <div className="slide">
    <div className="master-plan ">
      <ul className="runing__wrapper">
        <li className="one-map">
          <div className="map__wrapper">
            <img className="svg-convert" src="/assets/images/home/run1.svg" />
          </div>
          <p>Walkability</p>
        </li>
        <li className="two-map">
          <div className="map__wrapper">
            <img className="svg-convert" src="/assets/images/home/run2.svg" />
          </div>
          <p>
            {" "}
            Jogging <br />
            Track
          </p>
        </li>
        <li className="three-map">
          <div className="map__wrapper">
            <img className="svg-convert" src="/assets/images/home/run3.svg" />
          </div>
          <p>
            {" "}
            Cycling
            <br />
            Track
          </p>
        </li>
        <li className="four-map">
          <div className="map__wrapper">
            <img className="svg-convert" src="/assets/images/home/run4.svg" />
          </div>
          <p>
            {" "}
            Equestrian
            <br />
            Track
          </p>
        </li>
        <li className="five-map">
          <div className="map__wrapper">
            <img className="svg-convert" src="/assets/images/home/run5.svg" />
          </div>
          <p>
            {" "}
            Buggy
            <br />
            Circulation
          </p>
        </li>
        <li className="six-map">
          <div className="map__wrapper">
            <img className="svg-convert" src="/assets/images/home/run7.svg" />
          </div>
          <p>
            {" "}
            EV Shuttle and
            <br />
            Autonomous Vehicle
          </p>
        </li>
        <li className="seven-map">
          <div className="map__wrapper">
            <img className="svg-convert" src="/assets/images/home/run6.svg" />
          </div>
          <p> Public Transportation</p>
        </li>
      </ul>
      <div className="img__wrapper ">
        <img
          src="/assets/images/home/map2.jpg"
          alt=""
          className="default-img"
        />
        <img
          src="/assets/images/home/map-1.jpg"
          className="one-map-wrap d-none"
          alt="map-image"
        />
        <img
          src="/assets/images/home/map-2.jpg"
          className="two-map-wrap d-none"
          alt="map-image"
        />
        <img
          src="/assets/images/home/map-3.jpg"
          className="three-map-wrap d-none"
          alt="map-image"
        />
        <img
          src="/assets/images/home/map-4.jpg"
          className="four-map-wrap d-none"
          alt="map-image"
        />
        <img
          src="/assets/images/home/map-5.jpg"
          className="five-map-wrap d-none"
          alt="map-image"
        />
        <img
          src="/assets/images/home/map-6.jpg"
          className="six-map-wrap d-none"
          alt="map-image"
        />
        <img
          src="/assets/images/home/map-7.jpg"
          className="seven-map-wrap d-none"
          alt="map-image"
        />
      </div>
      <div className="close-icon cross">
        <img src="/assets/images/home/times-solid.svg" alt="cross-icon" />
      </div>
    </div>
  </div>
  <div className="master-plan-card">
    <div className="master-plan-card--main-wrapper">
      <div className="master-plan-card__title-wrapper">
        <h2>Master Plan</h2>
        <p>
          The project is designed to improve the quality of life for residents
          without compromising the needs of future generations.
        </p>
      </div>
      <div className="master-plan-card__title-wrapper master-plan-card__title-wrapper--fields">
        <h2>FIND YOUR VILLA</h2>
        <form action="">
          <select name="nationality">
            <option value="" disabled="">
              Select a Villas
            </option>
            <option value="/3-bedroom-detail.php">
              {" "}
              Courtyard Villa – 3 Bedroom Unit
            </option>
            <option value="/4-bedroom-courtyard-villa-detail.php">
              {" "}
              Courtyard Villa – 4 Bedroom Unit
            </option>
            <option value="/4-bedroom-garden-villa-detail.php">
              {" "}
              Garden Villa – 4 Bedroom Unit{" "}
            </option>
          </select>
        </form>
      </div>
    </div>
    {/* <div class="master-plan-card__pdf">
                  <img src="/assets/svg/downloadarrow-blue.svg" alt="download icon">
                  <a href="/assets/images/pdfs/YITI_floorplan_Layout.pdf" target="_blank">Download Brochure</a>
              </div> */}
    {/* <div class="master-plan-card__btns">
                  <a href="javascript:;" class="c-btn common-anchor">Find Your Villa</a>
                  <a href="javascript:;" id="villas-submit" class="c-btn common-anchor master-plan-card__btns--submit">submit</a>
              </div> */}
  </div>
</section>

    </>
  );
}

export default MasterplanSection;
