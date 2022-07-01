import React from 'react'
import Header from "../components/Header.js";
import Banner from "../components/Homepage/BannerSection.js";
import "../index.css";

import ReactFullpage from "@fullpage/react-fullpage";
import MasterplanSection from "../components/Homepage/MasterplanSection";
import LocationSection from "../components/Homepage/LocationSection";
import Footer from "../components/Footer";
import Features from "../components/Homepage/Features.js";

function Home() {
  return (
    <>
    <ReactFullpage
    autoScrolling={true}
    navigation={true}
    navigationTooltips={[
      "The Sustainable City Yiti",
      "Sustainable Features",
      "Master Plan",
      // "Newsroom",
      "Location",
    ]}
    anchors={[
      "TheSustainableCityYiti",
      "SustainableFeatures",
      "MasterPlan",
      // "Newsroom",
      "Location",
      ""
    ]}
    showActiveTooltip={true}
    scrollingSpeed={1000}
    navigationPosition={"left"}
    fadingEffect={"slides"}
    scrollHorizontally={true}
    onLeave ={ function(index, nextIndex, direction) {
        // var leavingSection = $(this);

        // //after leaving section 2
        // if (direction == 'down') {
        //     $('.header').addClass("hdr-white");
        // } else if (direction == 'up') {
        //     $('.header').removeClass("hdr-white");
        // }

        console.log(direction)
        if (direction === 'down') {
            document.header.classList.add("hdr-white");
          } else {
            document.body.classList.remove("hdr-white");
          }
    }
}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>

            <Banner />
            {/* <SustainableFeaturesSection></SustainableFeaturesSection> */}
            <Features />
            <MasterplanSection state={state}/>
            {/* <NewsroomSection /> */}
            <LocationSection></LocationSection>

        </ReactFullpage.Wrapper>
      );
    }}
  />


    </>
  )
}

export default Home