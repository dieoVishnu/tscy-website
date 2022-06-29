import React,{useState, useEffect} from 'react'
import '../style/features.css'
import { ReactComponent as BrandIcon } from "../../assets/svg/sustainable-feature/home-icon.svg";
import { ReactComponent as Recycle } from "../../assets/svg/sustainable-feature/recycle-icon.svg";
import { ReactComponent as TimerHand } from "../../assets/svg/sustainable-feature/timer-hand.svg";



function Features() {

    const [active, setActive] = useState(1)
    // reset the setintrevell function 
    const [reset, setRest] = useState(true)


    // onclick icon set changes
    const handelClick = (id)=>{
        setRest(reset => !reset);
        setActive(id);
    }


    // check the active state
    if(active > 3 ){
        setActive(1)
    }
      
    useEffect(()=>{


        let a = 1;
        const interval = setInterval(() => {
            if(a >= 3){
                a = 1
                setActive(1)
            }else{
                a = a+1
                setActive(active => active + 1);
            }
            // console.log('This will run every second!', active, a);
          }, 5000);

          return () => {
            clearInterval(interval);
        }


    },[reset])



    

    const data = [
        {
            id:1,
            // icons: "/assets/svg/sustainable-feature/home-icon.svg",
            icons: <BrandIcon />,
            heading: "Social SUSTAINABIlitY",
            sub: "Through amenities and community outreach programs",
            img: "/assets/images/sustainable-feature/SOCIAL-min.jpeg"
            
        },
        {
            id:2,
            // icons: "/assets/svg/sustainable-feature/home-icon.svg",
            icons: <Recycle />,
            heading: "Environmental SUSTAINABIlitY",
            sub: "Maintained through passive and active design strategies",
            img: "assets/images/sustainable-feature/ENVIRONMENT-min.jpeg"

        },
        {
            id:3,
            // icons: "/assets/svg/sustainable-feature/timer-hand.svg",
            icons: <TimerHand />,
            heading: "Economic SUSTAINABIlitY",
            sub: "Facilitated through operational efficiencies, savings for residents, and contribution to a green economy",
            img: "assets/images/sustainable-feature/ECONOMIC-min.jpeg"

        },
    ]
  return (
    <div className='section myfeatures sustainable-features-section'>
        <div className='container featur-margin'>
            <div className='nav-box'>
            </div>
            <div className="row align-items-center">
                <div className="col-10">
                    <div className='feature-navigation swiper-wrapper1'>

                    {data.map((e,index)=>(

                        <div className={e.id === active ? "swiper-slide-thumb-active feature-navigation__item item-width" : "feature-navigation__item item-width" }>
                            <div  key={index} className="feature-navigation__image m-0" onClick={event => handelClick(e.id)}  >
                                {/* <img onClick={evnt =>setActive(e.id)} className="svg-convert .svg" src={e.icons} alt="feature-nav-icon" /> */}
                                {e.icons}
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                <div className="col-90">
                {data.map((e,index)=>(
<>

                    
        {/* {e.id === active ? ( */}
                    <div className={e.id === active ? "feature-box active-display" : "feature-box display-none"} key={index}>
              <div className="swiper feature-wrap-content">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="twocol-row">
                      <div className="col-50">
                        <div className="feature-content-wrapper">
                          <div className="feature-content">
                            <div className="feature-content__card">
                              <h4 className="feature-content-main-heading">
                                Sustainable Features
                              </h4>
                              <h1 className="feature-content__title yellow-color">
                                {e.heading} <span> </span>
                              </h1>
                              <p className="feature-content__content">
{e.sub}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-50">
                        <div className="feature-images-wrapper">
                          <div className="swiper feature-img-wrapper">
                            <div className="swiper-wrapper">
                              <div className="feature-small-img swiper-slide">
                                <img src={e.img} className="feature-img-anim" alt="feature0-small-img " />
                              </div>
                            </div>
                            {/* <div className="swiper-pagination"></div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* //   ): (<></>)} */}

</>
))}


</div>

            </div>

        </div>

    </div>
  )
}

export default Features