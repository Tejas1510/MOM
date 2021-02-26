import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce'
import '../../assets/css/style.css'
import '../HomePage/style.css'
import headerImage from '../../assets/img/headerImage.svg'
import ZoomLogo from '../../assets/img/zoomLogo.png'
import FeatureZoom from '../../assets/img/featureZoom.png'
import FeatureImage2 from '../../assets/img/featureImage2.svg'
import ColaborationImage from '../../assets/img/colaborationImage.svg'
import Step1 from '../../assets/img/step1.png'
import Step2 from '../../assets/img/step2.svg'
import Step3 from '../../assets/img/step3.svg'
import Step4 from '../../assets/img/step4.png'
import Step5 from '../../assets/img/step5.svg'

function Homepage() {
  
  useEffect(() => {
    console.log("On Load");
    const apiUrl = 'http://127.0.0.1:8000/api/apiOverview';
    let data;
    axios.get(apiUrl).then(response => {
      data = response.data;
      console.log(data);
    });    
  }, []);

    return (
        <div>
            <section id="hero" className="clearfix mt-5">
            <div className="container headerContainer d-flex h-70 mt-5">
                <div className="row justify-content-center align-self-center" >
                    <div className="col-md-6 intro-info order-md-first order-last">
                      <Fade left>
                        <h2 className="heading" ><span className="Empasized" >Automated</span> MEETING NOTES FOR IN-PERSON AND REMOTE CONVERSATIONS</h2>
                        </Fade>  
                        <p>We back you up with automated meeting minutes in every conversation. MOM saves you time in board meetings, team management, and customer support.</p>
                        <p>Focus on the conversation, we'll do the rest automatically.</p>
                        <a className="startNow">Start Now Free</a>
                    </div>

                    <div className="col-md-6 intro-img order-md-last order-first mt-5" >
                        <img src= { headerImage } className="img-fluid"/>
                    </div>
                </div>

            </div>
            </section>
            <section className="pageWidth">
              <div className="container">
                <div className="row feature">
                  <div className="col-sm-6 col-12">
                      <img className="img-fluid zoomLogo" src={ZoomLogo}></img>
                      <h2 className="featureHeading f1"><span class="Empasized">ZOOM</span> video conferencing with Automated Meeting Notes</h2>
                      <a className="startNow ">Learn More</a>
                  </div>
                  <div className="col-sm-6 col-12">
                    <img className="img-fluid featureImage" src={FeatureZoom}></img>
                  </div>
                </div>
                <div className="row feature">
                <div className="col-sm-6 col-12">
                    <img className="img-fluid featureImage" src={FeatureImage2}></img>
                  </div>
                  <div className="col-sm-6 col-12">
                      <h2 className="featureHeading"><span class="Empasized">CREATE & INOVATE</span></h2>
                      <h2 className="featureHeading">Leave the hassle to AI</h2>

                      <p>Your time, your mind, and your experience is unique and precious! In order to succeed, you must <strong>focus</strong> on what matters.</p>
                      <p>That's why MOM created a smart solution for Automated Meeting Minutes, converting conversations into actions, <strong>empowering</strong> your skills, and saving hours of your time.</p>
                  </div>
                </div>
                <div className="row feature">
                  <div className="col-sm-6 col-12">
                      <h2 className="featureHeading f1">A new way to your <span class="Empasized">Remote Convrsation</span></h2>
                      <p>Stay connected to your conversation. Get real-time action items extracted. Grab insights automatically on the fly. Enjoy a live transcript and skyrocket the productivity.</p>
                  </div>
                  <div className="col-sm-6 col-12">
                    <iframe className="video" src="https://www.youtube.com/embed/XhCCNvx0yN8" ></iframe>
                  </div>
                </div>
              </div>
            </section>
            <section className="colaboration">
              <div className="container">
                <div className="row colaborationRow">
                  <div className="col-12">
                    <h2 className="colaborationHeading"><b>Smart remote collaboration with MOM</b></h2>
                  </div>
                  <div className="col-12">
                    <p className="colaborationPara">Stay nimble, stay savvy: use MOM with beloved video conferencing tools. Use MOM for Zoom meetings or use it with Slack. MOM works perfectly with Microsoft Teams, GoToMeeting, BlueJeans, or any other remote collaboration tool.</p>
                  </div>
                  <div className="col-12 mt-5">
                    <img src={ColaborationImage} className="img-fluid"></img>
                  </div>
                  <a className="signup">Sign Up</a>
                </div>
              </div>
            </section>
            <section>
              <div className="container">
                <div className="row workFlowRow">
                  <div className="col-12">
                    <h2 className="workFlowHead">How MOM Works?</h2>
                    <h4 className="workFlowSubHead">Ultimate smart meeting assistant at your service</h4>
                  </div>
                </div>
                <div className="row workFlowRow">
                  <div className="col-sm-6 col-12">
                    <h2 className="featureHeading"><span class="Empasized">Add Chrome Extension</span></h2>
                    <p>Add our chrome extension to your favourite video conference system like google meet, Zoom, Cisco Webex and enjoy the power of AI and NLP.</p>
                  </div>
                  <div className="col-sm-6 col-12">
                    <img src={Step1} className="img-fluid"></img>
                  </div>
                </div>
                <div className="row workFlowRow">
                  <div className="col-sm-6 col-12">
                    <img src={Step2} className="img-fluid"></img>
                  </div>
                  <div className="col-sm-6 col-12">
                    <h2 className="featureHeading"><span class="Empasized">Record</span></h2>
                    <p>Add MOM as a meeting attendee and you are ready to go. MOM will join your conversation as a smart AI-powered meeting assistant. Just push the record button on the app and </p>
                  </div>
                </div>
                <div className="row workFlowRow">
                  <div className="col-sm-6 col-12">
                    <h2 className="featureHeading"><span class="Empasized">Provide Transcribe</span></h2>
                    <p><strong>MOM</strong> transcribes your conversations on the fly.  MOM will generate a transcript <strong>enriched</strong> with speaker identification and voice separation, allowing you to <strong>understand</strong> exactly who said what.</p>                  </div>
                  <div className="col-sm-6 col-12">
                    <img src={Step3} className="img-fluid"></img>
                  </div>
                </div>
                <div className="row workFlowRow">
                  <div className="col-sm-6 col-12">
                    <img src={Step4} className="img-fluid"></img>
                  </div>
                  <div className="col-sm-6 col-12">
                    <h2 className="featureHeading"><span class="Empasized">Translation</span></h2>
                    <p>We Provide Transcribe of the meeting in more than 12 languages used accross the globe this connecting individuals from various background.</p>
                  </div>
                </div>
                <div className="row workFlowRow">
                  <div className="col-sm-6 col-12">
                    <h2 className="featureHeading"><span class="Empasized">Colaboration</span></h2>
                    <h4><b>Convert Converation into Actions</b></h4>
                    <p>From now on there is a <strong>platform</strong> for all your meetings and conversations. It's like having a remember-all-the-action-items and never-miss-the-follow-ups <strong>SUPERPOWER</strong> to better manage meetings, focus on the things that matter, and free up time for <strong>yourself</strong>.</p>
                  </div>
                  <div className="col-sm-6 col-12">
                    <img src={Step5} className="img-fluid"></img>
                  </div>
                </div>
              </div>
            </section>
        <main id="main">
    
        {/* Team Section Ends */}
            </main>
        </div>
    )
}

export default Homepage
