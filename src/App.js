import Header from "./components/Header.js";
import Banner from "./components/Homepage/BannerSection.js";

import ReactFullpage from "@fullpage/react-fullpage";
import MasterplanSection from "./components/Homepage/MasterplanSection";
import LocationSection from "./components/Homepage/LocationSection";
import Footer from "./components/Footer";
import SustainableFeaturesSection from "./components/Homepage/SustainableFeaturesSection";
import Swiper from "swiper";

const App = () => (
  <ReactFullpage
    autoScrolling={true}
    navigation={true}
    navigationTooltips={[
      "The Sustainable City Yiti",
      "Sustainable Features",
      "Master Plan",
      "Newsroom",
      "Location",
    ]}
    anchors={[
      "TheSustainableCityYiti",
      "SustainableFeatures",
      "MasterPlan",
      "Newsroom",
      "Location",
    ]}
    showActiveTooltip={true}
    scrollingSpeed={1000}
    navigationPosition={"left"}
    fadingEffect={"slides"}
    scrollHorizontally={true}
    onLeave={(origin, destination, direction) => {}}
    //fadingEffect={"slides"}
    /* onLeave={function (index, nextIndex, direction) {
      var leavingSection = this;

      //after leaving section 2
      if (direction == "down") {
        ".header".addClass("hdr-white");
      } else if (direction == "up") {
        ".header".removeClass("hdr-white");
      }
    }}*/
    //fullpage options
    //licenseKey={"YOUR_KEY_HERE"}
    //scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <>
          <ReactFullpage.Wrapper>
            <Header></Header>

            <Banner></Banner>
            <SustainableFeaturesSection></SustainableFeaturesSection>
            <MasterplanSection></MasterplanSection>
            <LocationSection></LocationSection>

            <Footer></Footer>
          </ReactFullpage.Wrapper>
        </>
      );
    }}
  />
);

export default App;
