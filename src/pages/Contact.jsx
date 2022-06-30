import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ReactFullpage from '@fullpage/react-fullpage'

function Contact() {
  return (
    <>
    <ReactFullpage
    //fullpage options
    // licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
            <Header />

            <section className="section about-us-section contact-us">
  <div className="twocol-row">
    <div className="col-35 bg-darkblue">
      <div className="about-us-wrapper colored-wrapper">
        <div
          className="about-us-head animate__animated animate__fadeInUpgi"
          data-animation="fadeInUp"
          data-duration={200}
        >
          <h3>ADDRESS US</h3>
        </div>
        <div
          className="about-us-text animate__animated animate__fadeInUpgi"
          data-animation="fadeInUp"
          data-duration={300}
        >
          <h6 className="inner-head">Sales Office</h6>
          <p>
            Mina Al Sultan Qaboos Centre
            <br />
            Yiti, Sultanate of Oman
          </p>
          <h6 className="inner-head">Toll - Free</h6>
          <p>
            <a href="tel:800 00 000">8000 33 33</a>
          </p>
          {/* <h6 class="inner-head">International</h6> */}
          {/* <p><a href="tel:+968 0 000 0000">+968 0 000 0000</a></p> */}
          <h6 className="inner-head">Email Address</h6>
          <p>
            <a href="mailto:hello@thesustainablecity-yiti.com">
              hello@thesustainablecity-yiti.com
            </a>
          </p>
          <h6 className="inner-head">Working Hours</h6>
          <p>
            Sunday - Thursday: 09:00AM - 07:00PM
            <br />
            Saturday: 10:00AM - 7:00PM{" "}
          </p>
        </div>
      </div>
    </div>
    <div className="col-65 bg-grey-color">
      <div className="about-us-right-img">
        <div
          className="about-us-head animate__animated animate__fadeInUpgi"
          data-animation="fadeInUp"
          data-duration={200}
        >
          <h3>CONTACT US</h3>
        </div>
        <div className="contact-success-message" />
        <form action="" id="contact-form">
          <div className="twocol-row">
            <div className="col-50">
              <div className="form-group">
                <label
                  htmlFor="first-name"
                  className="animate__animated animate__fadeInUpgi"
                  data-animation="fadeInUp"
                  data-duration={300}
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="animate__animated animate__fadeInUpgi"
                  data-animation="fadeInUp"
                  data-duration={400}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="first-name"
                  className="animate__animated animate__fadeInUpgi"
                  data-animation="fadeInUp"
                  data-duration={500}
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="animate__animated animate__fadeInUpgi"
                  data-animation="fadeInUp"
                  data-duration={600}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="first-name"
                  className="animate__animated animate__fadeInUpgi"
                  data-animation="fadeInUp"
                  data-duration={700}
                >
                  Nationality*
                </label>
                <select
                  name="nationality"
                  id="nationality"
                  className="animate__animated animate__fadeInUpgi"
                  data-animation="fadeInUp"
                  data-duration={800}
                >
                  <option value="" />
                  <option value="afghan">Afghan</option>
                  <option value="albanian">Albanian</option>
                  <option value="algerian">Algerian</option>
                  <option value="american">American</option>
                  <option value="andorran">Andorran</option>
                  <option value="angolan">Angolan</option>
                  <option value="antiguans">Antiguans</option>
                  <option value="argentinean">Argentinean</option>
                  <option value="armenian">Armenian</option>
                  <option value="australian">Australian</option>
                  <option value="austrian">Austrian</option>
                  <option value="azerbaijani">Azerbaijani</option>
                  <option value="bahamian">Bahamian</option>
                  <option value="bahraini">Bahraini</option>
                  <option value="bangladeshi">Bangladeshi</option>
                  <option value="barbadian">Barbadian</option>
                  <option value="barbudans">Barbudans</option>
                  <option value="batswana">Batswana</option>
                  <option value="belarusian">Belarusian</option>
                  <option value="belgian">Belgian</option>
                  <option value="belizean">Belizean</option>
                  <option value="beninese">Beninese</option>
                  <option value="bhutanese">Bhutanese</option>
                  <option value="bolivian">Bolivian</option>
                  <option value="bosnian">Bosnian</option>
                  <option value="brazilian">Brazilian</option>
                  <option value="british">British</option>
                  <option value="bruneian">Bruneian</option>
                  <option value="bulgarian">Bulgarian</option>
                  <option value="burkinabe">Burkinabe</option>
                  <option value="burmese">Burmese</option>
                  <option value="burundian">Burundian</option>
                  <option value="cambodian">Cambodian</option>
                  <option value="cameroonian">Cameroonian</option>
                  <option value="canadian">Canadian</option>
                  <option value="cape verdean">Cape Verdean</option>
                  <option value="central african">Central African</option>
                  <option value="chadian">Chadian</option>
                  <option value="chilean">Chilean</option>
                  <option value="chinese">Chinese</option>
                  <option value="colombian">Colombian</option>
                  <option value="comoran">Comoran</option>
                  <option value="congolese">Congolese</option>
                  <option value="costa rican">Costa Rican</option>
                  <option value="croatian">Croatian</option>
                  <option value="cuban">Cuban</option>
                  <option value="cypriot">Cypriot</option>
                  <option value="czech">Czech</option>
                  <option value="danish">Danish</option>
                  <option value="djibouti">Djibouti</option>
                  <option value="dominican">Dominican</option>
                  <option value="dutch">Dutch</option>
                  <option value="east timorese">East Timorese</option>
                  <option value="ecuadorean">Ecuadorean</option>
                  <option value="egyptian">Egyptian</option>
                  <option value="emirian">Emirian</option>
                  <option value="equatorial guinean">Equatorial Guinean</option>
                  <option value="eritrean">Eritrean</option>
                  <option value="estonian">Estonian</option>
                  <option value="ethiopian">Ethiopian</option>
                  <option value="fijian">Fijian</option>
                  <option value="filipino">Filipino</option>
                  <option value="finnish">Finnish</option>
                  <option value="french">French</option>
                  <option value="gabonese">Gabonese</option>
                  <option value="gambian">Gambian</option>
                  <option value="georgian">Georgian</option>
                  <option value="german">German</option>
                  <option value="ghanaian">Ghanaian</option>
                  <option value="greek">Greek</option>
                  <option value="grenadian">Grenadian</option>
                  <option value="guatemalan">Guatemalan</option>
                  <option value="guinea-bissauan">Guinea-Bissauan</option>
                  <option value="guinean">Guinean</option>
                  <option value="guyanese">Guyanese</option>
                  <option value="haitian">Haitian</option>
                  <option value="herzegovinian">Herzegovinian</option>
                  <option value="honduran">Honduran</option>
                  <option value="hungarian">Hungarian</option>
                  <option value="icelander">Icelander</option>
                  <option value="indian">Indian</option>
                  <option value="indonesian">Indonesian</option>
                  <option value="iranian">Iranian</option>
                  <option value="iraqi">Iraqi</option>
                  <option value="irish">Irish</option>
                  <option value="israeli">Israeli</option>
                  <option value="italian">Italian</option>
                  <option value="ivorian">Ivorian</option>
                  <option value="jamaican">Jamaican</option>
                  <option value="japanese">Japanese</option>
                  <option value="jordanian">Jordanian</option>
                  <option value="kazakhstani">Kazakhstani</option>
                  <option value="kenyan">Kenyan</option>
                  <option value="kittian and nevisian">
                    Kittian and Nevisian
                  </option>
                  <option value="kuwaiti">Kuwaiti</option>
                  <option value="kyrgyz">Kyrgyz</option>
                  <option value="laotian">Laotian</option>
                  <option value="latvian">Latvian</option>
                  <option value="lebanese">Lebanese</option>
                  <option value="liberian">Liberian</option>
                  <option value="libyan">Libyan</option>
                  <option value="liechtensteiner">Liechtensteiner</option>
                  <option value="lithuanian">Lithuanian</option>
                  <option value="luxembourger">Luxembourger</option>
                  <option value="macedonian">Macedonian</option>
                  <option value="malagasy">Malagasy</option>
                  <option value="malawian">Malawian</option>
                  <option value="malaysian">Malaysian</option>
                  <option value="maldivan">Maldivan</option>
                  <option value="malian">Malian</option>
                  <option value="maltese">Maltese</option>
                  <option value="marshallese">Marshallese</option>
                  <option value="mauritanian">Mauritanian</option>
                  <option value="mauritian">Mauritian</option>
                  <option value="mexican">Mexican</option>
                  <option value="micronesian">Micronesian</option>
                  <option value="moldovan">Moldovan</option>
                  <option value="monacan">Monacan</option>
                  <option value="mongolian">Mongolian</option>
                  <option value="moroccan">Moroccan</option>
                  <option value="mosotho">Mosotho</option>
                  <option value="motswana">Motswana</option>
                  <option value="mozambican">Mozambican</option>
                  <option value="namibian">Namibian</option>
                  <option value="nauruan">Nauruan</option>
                  <option value="nepalese">Nepalese</option>
                  <option value="new zealander">New Zealander</option>
                  <option value="ni-vanuatu">Ni-Vanuatu</option>
                  <option value="nicaraguan">Nicaraguan</option>
                  <option value="nigerien">Nigerien</option>
                  <option value="north korean">North Korean</option>
                  <option value="northern irish">Northern Irish</option>
                  <option value="norwegian">Norwegian</option>
                  <option value="omani">Omani</option>
                  <option value="pakistani">Pakistani</option>
                  <option value="palauan">Palauan</option>
                  <option value="panamanian">Panamanian</option>
                  <option value="papua new guinean">Papua New Guinean</option>
                  <option value="paraguayan">Paraguayan</option>
                  <option value="peruvian">Peruvian</option>
                  <option value="polish">Polish</option>
                  <option value="portuguese">Portuguese</option>
                  <option value="qatari">Qatari</option>
                  <option value="romanian">Romanian</option>
                  <option value="russian">Russian</option>
                  <option value="rwandan">Rwandan</option>
                  <option value="saint lucian">Saint Lucian</option>
                  <option value="salvadoran">Salvadoran</option>
                  <option value="samoan">Samoan</option>
                  <option value="san marinese">San Marinese</option>
                  <option value="sao tomean">Sao Tomean</option>
                  <option value="saudi">Saudi</option>
                  <option value="scottish">Scottish</option>
                  <option value="senegalese">Senegalese</option>
                  <option value="serbian">Serbian</option>
                  <option value="seychellois">Seychellois</option>
                  <option value="sierra leonean">Sierra Leonean</option>
                  <option value="singaporean">Singaporean</option>
                  <option value="slovakian">Slovakian</option>
                  <option value="slovenian">Slovenian</option>
                  <option value="solomon islander">Solomon Islander</option>
                  <option value="somali">Somali</option>
                  <option value="south african">South African</option>
                  <option value="south korean">South Korean</option>
                  <option value="spanish">Spanish</option>
                  <option value="sri lankan">Sri Lankan</option>
                  <option value="sudanese">Sudanese</option>
                  <option value="surinamer">Surinamer</option>
                  <option value="swazi">Swazi</option>
                  <option value="swedish">Swedish</option>
                  <option value="swiss">Swiss</option>
                  <option value="syrian">Syrian</option>
                  <option value="taiwanese">Taiwanese</option>
                  <option value="tajik">Tajik</option>
                  <option value="tanzanian">Tanzanian</option>
                  <option value="thai">Thai</option>
                  <option value="togolese">Togolese</option>
                  <option value="tongan">Tongan</option>
                  <option value="trinidadian or tobagonian">
                    Trinidadian or Tobagonian
                  </option>
                  <option value="tunisian">Tunisian</option>
                  <option value="turkish">Turkish</option>
                  <option value="tuvaluan">Tuvaluan</option>
                  <option value="ugandan">Ugandan</option>
                  <option value="ukrainian">Ukrainian</option>
                  <option value="uruguayan">Uruguayan</option>
                  <option value="uzbekistani">Uzbekistani</option>
                  <option value="venezuelan">Venezuelan</option>
                  <option value="vietnamese">Vietnamese</option>
                  <option value="welsh">Welsh</option>
                  <option value="yemenite">Yemenite</option>
                  <option value="zambian">Zambian</option>
                  <option value="zimbabwean">Zimbabwean</option>
                </select>
              </div>
            </div>
            <div className="col-50">
              <div className="form-group">
                <label
                  htmlFor="first-name"
                  className="animate__animated animate__fadeInUpgi"
                  data-animation="fadeInUp"
                  data-duration={900}
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="animate__animated animate__fadeInUpgi"
                  data-animation="fadeInUp"
                  data-duration={1000}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="first-name"
                  className="animate__animated animate__fadeInUpgi"
                  data-animation="fadeInUp"
                  data-duration={1100}
                >
                  Phone Number*
                </label>
                <div className="country-input">
                  <select
                    name="country_code"
                    id="country_code"
                    className="animate__animated animate__fadeInUpgi"
                    data-animation="fadeInUp"
                    data-duration={1200}
                  >
                    <option data-countrycode="GB" value={44} selected="">
                      +44
                    </option>
                    <option data-countrycode="US" value={1}>
                      +1
                    </option>
                    <optgroup label="Other countries">
                      <option data-countrycode="DZ" value={213}>
                        +213
                      </option>
                      <option data-countrycode="AD" value={376}>
                        +376
                      </option>
                      <option data-countrycode="AO" value={244}>
                        +244
                      </option>
                      <option data-countrycode="AI" value={1264}>
                        +1264
                      </option>
                      <option data-countrycode="AG" value={1268}>
                        +1268
                      </option>
                      <option data-countrycode="AR" value={54}>
                        +54
                      </option>
                      <option data-countrycode="AM" value={374}>
                        +374
                      </option>
                      <option data-countrycode="AW" value={297}>
                        +297
                      </option>
                      <option data-countrycode="AU" value={61}>
                        +61
                      </option>
                      <option data-countrycode="AT" value={43}>
                        +43
                      </option>
                      <option data-countrycode="AZ" value={994}>
                        +994
                      </option>
                      <option data-countrycode="BS" value={1242}>
                        +1242
                      </option>
                      <option data-countrycode="BH" value={973}>
                        +973
                      </option>
                      <option data-countrycode="BD" value={880}>
                        +880
                      </option>
                      <option data-countrycode="BB" value={1246}>
                        +1246
                      </option>
                      <option data-countrycode="BY" value={375}>
                        +375
                      </option>
                      <option data-countrycode="BE" value={32}>
                        +32
                      </option>
                      <option data-countrycode="BZ" value={501}>
                        +501
                      </option>
                      <option data-countrycode="BJ" value={229}>
                        +229
                      </option>
                      <option data-countrycode="BM" value={1441}>
                        +1441
                      </option>
                      <option data-countrycode="BT" value={975}>
                        +975
                      </option>
                      <option data-countrycode="BO" value={591}>
                        +591
                      </option>
                      <option data-countrycode="BA" value={387}>
                        +387
                      </option>
                      <option data-countrycode="BW" value={267}>
                        +267
                      </option>
                      <option data-countrycode="BR" value={55}>
                        +55
                      </option>
                      <option data-countrycode="BN" value={673}>
                        +673
                      </option>
                      <option data-countrycode="BG" value={359}>
                        +359
                      </option>
                      <option data-countrycode="BF" value={226}>
                        +226
                      </option>
                      <option data-countrycode="BI" value={257}>
                        +257
                      </option>
                      <option data-countrycode="KH" value={855}>
                        +855
                      </option>
                      <option data-countrycode="CM" value={237}>
                        +237
                      </option>
                      <option data-countrycode="CA" value={1}>
                        +1
                      </option>
                      <option data-countrycode="CV" value={238}>
                        +238
                      </option>
                      <option data-countrycode="KY" value={1345}>
                        +1345
                      </option>
                      <option data-countrycode="CF" value={236}>
                        +236
                      </option>
                      <option data-countrycode="CL" value={56}>
                        +56
                      </option>
                      <option data-countrycode="CN" value={86}>
                        +86
                      </option>
                      <option data-countrycode="CO" value={57}>
                        +57
                      </option>
                      <option data-countrycode="KM" value={269}>
                        +269
                      </option>
                      <option data-countrycode="CG" value={242}>
                        +242
                      </option>
                      <option data-countrycode="CK" value={682}>
                        +682
                      </option>
                      <option data-countrycode="CR" value={506}>
                        +506
                      </option>
                      <option data-countrycode="HR" value={385}>
                        +385
                      </option>
                      <option data-countrycode="CU" value={53}>
                        +53
                      </option>
                      <option data-countrycode="CY" value={357}>
                        +357
                      </option>
                      <option data-countrycode="CZ" value={42}>
                        +42
                      </option>
                      <option data-countrycode="DK" value={45}>
                        +45
                      </option>
                      <option data-countrycode="DJ" value={253}>
                        +253
                      </option>
                      <option data-countrycode="DM" value={1809}>
                        +1809
                      </option>
                      <option data-countrycode="DO" value={1809}>
                        +1809
                      </option>
                      <option data-countrycode="EC" value={593}>
                        +593
                      </option>
                      <option data-countrycode="EG" value={20}>
                        +20
                      </option>
                      <option data-countrycode="SV" value={503}>
                        +503
                      </option>
                      <option data-countrycode="GQ" value={240}>
                        +240
                      </option>
                      <option data-countrycode="ER" value={291}>
                        +291
                      </option>
                      <option data-countrycode="EE" value={372}>
                        +372
                      </option>
                      <option data-countrycode="ET" value={251}>
                        +251
                      </option>
                      <option data-countrycode="FK" value={500}>
                        +500
                      </option>
                      <option data-countrycode="FO" value={298}>
                        +298
                      </option>
                      <option data-countrycode="FJ" value={679}>
                        +679
                      </option>
                      <option data-countrycode="FI" value={358}>
                        +358
                      </option>
                      <option data-countrycode="FR" value={33}>
                        +33
                      </option>
                      <option data-countrycode="GF" value={594}>
                        +594
                      </option>
                      <option data-countrycode="PF" value={689}>
                        +689
                      </option>
                      <option data-countrycode="GA" value={241}>
                        +241
                      </option>
                      <option data-countrycode="YE" value={969}>
                        +969
                      </option>
                      <option data-countrycode="YE" value={967}>
                        +967
                      </option>
                      <option data-countrycode="ZM" value={260}>
                        +260
                      </option>
                      <option data-countrycode="ZW" value={263}>
                        +263
                      </option>
                    </optgroup>
                  </select>
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    className="animate__animated animate__fadeInUpgi"
                    data-animation="fadeInUp"
                    data-duration={1300}
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="first-name"
                  className="animate__animated animate__fadeInUpgi"
                  data-animation="fadeInUp"
                  data-duration={1400}
                >
                  How did you hear about us?*
                </label>
                <input
                  name="about_us"
                  id="about_us"
                  type="text"
                  className="animate__animated animate__fadeInUpgi"
                  data-animation="fadeInUp"
                  data-duration={1500}
                />
              </div>
            </div>
          </div>
          <div className="btn-validate">
            <div
              className="submit-btn animate__animated animate__fadeInUpgi"
              data-animation="fadeInUp"
              data-duration={1600}
            >
              <button type="submit" className="common-anchor">
                SUBMIT{" "}
                <i className="fa fa-circle-o-notch fa-spin c-spinner d-none" />
              </button>
            </div>
            <div
              className="validate animate__animated animate__fadeInUpgi"
              data-animation="fadeInUp"
              data-duration={1700}
            >
              <p>All fields are mandatory</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>





            <Footer />
        </ReactFullpage.Wrapper>
      );
    }}
  />


    </>
  )
}

export default Contact
