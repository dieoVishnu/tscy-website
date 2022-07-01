import React from 'react'
import Banner from "../components/Homepage/BannerSection.js";
import "../index.css";

import ReactFullpage from "@fullpage/react-fullpage";
import MasterplanSection from "../components/Homepage/MasterplanSection";
import LocationSection from "../components/Homepage/LocationSection";
import Footer from "../components/Footer";
import Features from "../components/Homepage/Features.js";
import NewsroomSection from '../components/Homepage/NewsroomSection.js';

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
      "Newsroom",
      "Location"
    ]}
    // anchors={[
    //   "TheSustainableCityYiti",
    //   "SustainableFeatures",
    //   "MasterPlan",
    //   "Newsroom",
    //   "Location"
    // ]}
    showActiveTooltip={true}
    scrollingSpeed={1000}
    navigationPosition={"left"}
    fadingEffect={"slides"}
    scrollHorizontally={true}
    onLeave ={ function(index, nextIndex, direction) {
        if (direction === 'down') {
            document.querySelector("header").classList.add("hdr-white");
        } 
        if(direction === 'up'){
            document.querySelector("header").classList.remove("hdr-white");
          }
    }
}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>

            <Banner />
            <Features />
            <MasterplanSection state={state}/>
            <NewsroomSection />
            <LocationSection />
            <Footer />

        </ReactFullpage.Wrapper>
      );
    }}
  />


    </>
  )
}

export default Home