import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import Fade from 'react-reveal/Fade';
import '../../assets/css/style.css'
import './style.css'
import headerImage from '../../assets/img/headerImage.svg'
import GoogleMeet from '../../assets/img/googlemeet.png'
import FeatureZoom from '../../assets/img/featureZoom.png'
import FeatureImage2 from '../../assets/img/featureImage2.svg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import Step1 from '../../assets/img/step1.png'
import Step2 from '../../assets/img/step2.svg'
import Step3 from '../../assets/img/step3.svg'
import Step4 from '../../assets/img/step4.png'
import Step5 from '../../assets/img/step5.svg'
import Tejas from '../../assets/img/tejas.png'
import Ayush from '../../assets/img/ayush.jpg'
import YashTelkhade from '../../assets/img/yashtelkhade.jpg'
import YashAgrawal from '../../assets/img/yashAgrawal.jpeg'
import Atul from '../../assets/img/atul.jpg'
import NPTEL from '../../assets/img/nptel.png'
import {NavLink} from 'react-router-dom'
function Homepage() {
    return (
        <div>
            <section id="hero" className="clearfix mt-5">
            <div className="container headerContainer d-flex h-70 mt-5">
                <div className="row justify-content-center align-self-center" >
                    <div className="col-md-6 intro-info order-md-first order-last">
                      <Fade left>
                        <h2 className="heading" ><span className="navBarColor" >Automated</span> MEETING NOTES FOR IN-PERSON AND REMOTE CONVERSATIONS</h2>
                        </Fade>  
                        <p>We back you up with automated meeting minutes in every conversation. Meet Digest saves your time in board meetings, team management, and customer support.</p>
                        <p>Focus on the conversation, we'll do the rest automatically.</p>
                    </div>

                    <div className="col-md-6 intro-img order-md-last order-first mt-5" >
                        <img src= { headerImage } className="img-fluid" alt='homepage'/>
                    </div>
                </div>

            </div>
            </section>
            <section className="pageWidth">
              <div className="container">
                <div className="row feature">
                  <div className="col-sm-6 col-12">
                      <img className="img-fluid zoomLogo" src={GoogleMeet} alt='homepage'></img>
                      <h2 className="featureHeading f1"><span className="Empasized">Google Meet</span> video conferencing with Automated Meeting Notes</h2>
                  </div>
                  <div className="col-sm-6 col-12">
                    <img className="img-fluid featureImage" src={FeatureZoom} alt='homepage'></img>
                  </div>
                </div>
                <div className="row feature">
                <div className="col-sm-6 col-12">
                    <img className="img-fluid featureImage" src={FeatureImage2}></img>
                  </div>
                  <div className="col-sm-6 col-12">
                      <h2 className="featureHeading"><span className="Empasized">CREATE & INNOVATE</span></h2>
                      <h2 className="featureHeading">Leave the hassle to ML</h2>

                      <p>Your time, your mind, and your experience is unique and precious! In order to succeed, you must <strong>focus</strong> on what matters.</p>
                      <p>That's why Meet Digest created a smart solution for Automated Meeting Minutes, converting conversations into actions, <strong>empowering</strong> your skills, and saving hours of your time.</p>
                  </div>
                </div>
                <div className="row feature">
                  <div className="col-sm-6 col-12">
                      <h2 className="featureHeading f1">A new way to your <span className="Empasized">Remote Conversation</span></h2>
                      <p>Stay connected to your conversation. Get real-time action items extracted. Grab insights automatically on the fly. Enjoy a live transcript and skyrocket the productivity.</p>
                  </div>
                  <div className="col-sm-6 col-12">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/OsNezPOUU84" allowfullscreen></iframe>
                  </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section>
              <div className="container">
                <div className="row workFlowRow">
                  <div className="col-12">
                    <h2 className="workFlowHead">How Meet Digest Works?</h2>
                    <h4 className="workFlowSubHead">Ultimate smart meeting assistant at your service</h4>
                  </div>
                </div>
                <div className="row workFlowRow">
                  <div className="col-sm-6 col-12">
                    <h2 className="featureHeading"><span className="Empasized">Add Chrome Extension</span></h2>
                    <p>Add our chrome extension to your google meet and enjoy the power of ML and NLP.</p>
                  </div>
                  <div className="col-sm-6 col-12">
                    <img src={Step1} className="img-fluid" alt='homepage'></img>
                  </div>
                </div>
                <div className="row workFlowRow">
                  <div className="col-sm-6 col-12">
                    <img src={Step2} className="img-fluid" alt='homepage'></img>
                  </div>
                  <div className="col-sm-6 col-12">
                    <h2 className="featureHeading"><span className="Empasized">Record</span></h2>
                    <p>Add Meet Digest as a meeting attendee and you are ready to go. Meet Digest will join your conversation as a smart ML-powered meeting assistant. Just push the record button on the app and it will start transcription</p>
                  </div>
                </div>
                <div className="row workFlowRow">
                  <div className="col-sm-6 col-12">
                    <h2 className="featureHeading"><span className="Empasized">Transcription and Summarization</span></h2>
                    <p><strong>Meet Digest</strong> transcribes and summarizes your conversations on the fly.  Meet Digest will generate a transcript and summary <strong>enriched</strong> with speaker identification and voice separation, allowing you to <strong>understand</strong> exactly who said what.</p>                  </div>
                  <div className="col-sm-6 col-12">
                    <img src={Step3} className="img-fluid" alt='homepage'></img>
                  </div>
                </div>
                <div className="row workFlowRow">
                  <div className="col-sm-6 col-12">
                    <img src={Step4} className="img-fluid" alt='homepage'></img>
                  </div>
                  <div className="col-sm-6 col-12">
                    <h2 className="featureHeading"><span className="Empasized">Translation</span></h2>
                    <p>We Provide Transcript and Summary of the meeting in multiple languages to connect individuals from various background.</p>
                  </div>
                </div>
                <div className="row workFlowRow">
                  <div className="col-sm-6 col-12">
                    <h2 className="featureHeading"><span className="Empasized">Conversation To Action</span></h2>
                    <p>From now on there is a <strong>platform</strong> for all your meetings and conversations. It's like having a 'remember all the action items' and 'never miss the follow ups' <strong>SUPERPOWER</strong> to better manage meetings, focus on the things that matter, and free up time for <strong>yourself</strong>.</p>
                  </div>
                  <div className="col-sm-6 col-12">
                    <img src={Step5} className="img-fluid" alt='homepage'></img>
                  </div>
                </div>
              </div>
            </section>

            <section>
            <div className="container-fluid my-1">
              <div className="row " >
                  <div className="col-12">
                      <h2 className="text-center featureHeading mb-1" style={{fontSize:'38px'}}>OUR <span style={{color:' #ff5a6e'}}>TEAM</span></h2>
                  </div>
                  <div className="col-12 mb-3">
                    <p className="teamHeading" style={{textAlign:'center'}}>Meet the Team of Awesome and Creative Individuals behind the Product</p>
                  </div>
                  <div className="col-md-2 my-2 ml-5 text-center"  >
                      <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                          src={Atul}></img>
                      <h3 className="pt-3">Atul Thakre</h3>
                      <p>Backend Developer</p>
                      <a href="https://www.linkedin.com/in/arthakre/" target="_blank" role="button" style={{textDecoration:'none'}} ><LinkedInIcon color="primary" fontSize="large"></LinkedInIcon></a>   
                      <a  href="https://github.com/atulthakre00" target="_blank" role="button" style={{textDecoration:'none',textDecorationColor:'black'}}  >  <GitHubIcon fontSize="large"></GitHubIcon></a>
                      {/* <LinkedInIcon color="primary" fontSize="large"><a  href="https://www.linkedin.com/in/arthakre/"  ></a></LinkedInIcon>    <GitHubIcon fontSize="large"><a  href="https://www.linkedin.com/in/arthakre/" role="button"> </a></GitHubIcon> */}
                  </div>

                  <div className="col-md-2 my-2 ml-5 text-center" >
                      <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                          src={YashAgrawal}></img>
                      <h3 className="pt-3">Yash Agrawal</h3>
                    
                      <p>Frontend Developer</p>
                      <a href="https://www.linkedin.com/in/yash-agrawal-90b05217a" target="_blank" role="button" style={{textDecoration:'none'}} ><LinkedInIcon color="primary" fontSize="large"></LinkedInIcon></a>   
                      <a  href="https://github.com/1706-yash" role="button" target="_blank" style={{textDecoration:'none',textDecorationColor:'black'}}  >  <GitHubIcon fontSize="large"></GitHubIcon></a>
                      {/* <LinkedInIcon color="primary" fontSize="large"><a  href="https://www.linkedin.com/in/arthakre/" role="button"></a></LinkedInIcon>    <GitHubIcon fontSize="large"><a  href="https://www.linkedin.com/in/arthakre/" role="button"> </a></GitHubIcon> */}
                  </div>

                  <div className="col-md-2 my-2 ml-4 text-center" >
                      <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                          src={Tejas}></img>
                      <h3 className="pt-3">Tejas Tapas</h3>
                      
                      <p>Frontend Developer</p>
                      <a href="https://www.linkedin.com/in/tejas-sudhir-tapas-971847171/" target="_blank" role="button" style={{textDecoration:'none'}} ><LinkedInIcon color="primary" fontSize="large"></LinkedInIcon></a>   
                      <a  href="https://github.com/Tejas1510" role="button" target="_blank" style={{textDecoration:'none',textDecorationColor:'black'}}  >  <GitHubIcon fontSize="large"></GitHubIcon></a>
                      {/* <LinkedInIcon color="primary" fontSize="large"><a  href="https://www.linkedin.com/in/arthakre/" role="button"></a></LinkedInIcon>    <GitHubIcon fontSize="large"><a  href="https://www.linkedin.com/in/arthakre/" role="button"> </a></GitHubIcon> */}
                  </div>

                  <div className="col-md-2 my-2 ml-4 text-center">
                      <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                          src={YashTelkhade}></img>
                      <h3 className="pt-3">Yash Telkhade</h3>
                      
                      <p>Tester & Chrome Extension Developer</p>
                      <a href="https://www.linkedin.com/in/yash-telkhade" target="_blank" role="button" style={{textDecoration:'none'}} ><LinkedInIcon color="primary" fontSize="large"></LinkedInIcon></a>   
                      <a  href="https://github.com/YashTelkhade" target="_blank" role="button" style={{textDecoration:'none',textDecorationColor:'black'}}  >  <GitHubIcon fontSize="large"></GitHubIcon></a>
                  </div>
                  <div className="col-md-2 my-2 ml-4 text-center">
                      <img className="bd-placeholder-img rounded-circle" width="140" height="140"
                          src={Ayush}></img>
                      <h3 className="pt-3">Ayush Kedia</h3>
                     
                      <p>Tester & Chrome Extension Developer</p>
                      <a href="https://www.linkedin.com/in/ayush-kedia-9a1475188" target="_blank" role="button" style={{textDecoration:'none'}} ><LinkedInIcon color="primary" fontSize="large"></LinkedInIcon></a>   
                      <a  href="https://github.com/AyushKedia" target="_blank" role="button" style={{textDecoration:'none',textDecorationColor:'black'}}  >  <GitHubIcon fontSize="large"></GitHubIcon></a>
                  </div>
               </div>
            </div>
              <div className="roundButton bg-primary">
                  <NavLink to="/nptel"><h3 style={{color:'white',textAlign:'center',paddingTop:'20px',fontWeight:'bold',fontSize:'30px'}}><DescriptionIcon style={{fontSize:'40px'}}></DescriptionIcon></h3></NavLink>
              </div>
              {/* <a className="bottomButton"><img className="img-fluid mainlogo m-auto" width="80" height="80" src={NPTEL}></img></a> */}
            
          </section>

        <main id="main">
    
        {/* Team Section Ends */}
            </main>
        </div>
    )
}

export default Homepage
