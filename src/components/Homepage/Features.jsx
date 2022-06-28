import React,{useState, useEffect} from 'react'
import '../style/features.css'



function Features() {

    const [active, setActive] = useState(1)


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

          return () => clearInterval(interval);

    },[])

    const data = [
        {
            id:1,
            icons: "assets/svg/sustainable-feature/home-icon.svg",
            heading: "Social SUSTAINABIlitY",
            sub: "Through amenities and community outreach programs",
            img: "/assets/images/sustainable-feature/SOCIAL-min.jpeg"
            
        },
        {
            id:2,
            icons: "assets/svg/sustainable-feature/home-icon.svg",
            heading: "Environmental SUSTAINABIlitY",
            sub: "Maintained through passive and active design strategies",
            img: "assets/images/sustainable-feature/ENVIRONMENT-min.jpeg"

        },
        {
            id:3,
            icons: "assets/svg/sustainable-feature/timer-hand.svg",
            heading: "Economic SUSTAINABIlitY",
            sub: "Facilitated through operational efficiencies, savings for residents, and contribution to a green economy",
            img: "assets/images/sustainable-feature/ECONOMIC-min.jpeg"

        },
    ]
  return (
    <div className='section myfeatures sustainable-features-section'>
        <div className='container'>
            <div className='nav-box'>
            </div>
            <div className="row ml-5">
                <div className="col-10">
                {data.map((e,index)=>(
                    <div  key={index} className="feature-navigation__image">
                        <img onClick={evnt =>setActive(e.id)} className="svg-convert" src={e.icons} alt="feature-nav-icon" />
                    </div>
                ))}
                </div>
                <div className="col-90">
                {data.map((e,index)=>(
<>

                    
        {e.id === active ? (
                    <div className="feature-box" key={index}>
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
                                <img src={e.img} alt="feature0-small-img " />
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

              ): (<></>)}

</>
))}


</div>

            </div>

        </div>

    </div>
  )
}

export default Features