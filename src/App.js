import "./App.css";
import Header from "./components/Header.js";
import Banner from "./components/Homepage/BannerSection.js";
import SustainableFeatures from "./components/Homepage/SustainableFeaturesSection";
import ReactFullpage from "@fullpage/react-fullpage";
import MasterplanSection from "./components/Homepage/MasterplanSection";
import LocationSection from "./components/Homepage/LocationSection";
import Footer from "./components/Footer";

const App = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <>
          <Header></Header>
          <ReactFullpage.Wrapper>
            <Banner></Banner>
            <SustainableFeatures></SustainableFeatures>
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
