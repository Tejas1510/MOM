import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import '../AboutUs/style.css'
import AboutImage1 from '../../assets/img/aboutImage.jpg'
import AboutImage2 from '../../assets/img/aboutImage2.jpg'
import AboutImage3 from '../../assets/img/aboutImage3.png'

const Aboutus = (props) => {    
    return (
        <div>
           <section className="aboutus">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="aboutUsHead">About Meet Digest</h1>
                            <p className="aboutUsPara">We are here with a mission to increase productivity, make collaboration easy and convert your conversation into actions with an effective and efficient use of ML.</p>
                        </div>
                    </div>
                </div>
            </section> 
            <section>
                <div className="container">
                    <div className="row aboutRow">
                        <div className="col-12 col-sm-6">
                            <h2 className="aboutHead1"><b>What we do?</b></h2>
                            <p>Meet Digest provides automated meeting minutes based on state-of-the-art ML and NLP (Natural Language Processing) technology.</p>
                            <h2 className="aboutHead1"><b>Why we do it?</b></h2>
                            <p>Meeting minutes are time-consuming, distracting, and boring, which leaves room for inefficiencies and greater expenses. In fact, $37 billion is wasted annually in the U.S. on unproductive meetings.</p>
                        </div>
                        <div className="col-sm-6 col-12">
                            <img src={AboutImage1} alt="about" className="img-fluid" ></img>
                        </div>
                    </div>
                    <div className="row aboutRow">
                        <div className="col-sm-6 col-12">
                            <img src={AboutImage2} alt="about" className="img-fluid" ></img>
                        </div>
                        <div className="col-12 col-sm-6">
                            <h2 className="aboutHead1"><b>What is the Plan?</b></h2>
                            <p>We think meetings should be vibrant, interesting, and efficient.  We created Meet Digest, an ML-powered SaaS solution for remote and in-person meetings, to change the way meetings are run. Automatically generated meeting minutes produced instantly from your voice, in addition to extracted action items and shared insights, are the future of successful meetings.</p>
                        </div>
                    </div>
                    <div className="row aboutRow">
                        <div className="col-12 col-sm-6">
                            <h2 className="aboutHead1"><b>What is our ultimate Goal?</b></h2>
                            <p>We want you to focus on your meetings while leaving the hassle of documentation to ML</p>
                            <ul className="list-style">
  									<li><p>Manage your meetings the way you always dreamed to</p></li>
  									<li><p>Never miss a thing</p></li>
  									<li><p>Be fully integrated with your software</p></li>
  							</ul>
                        </div>
                        <div className="col-sm-6 col-12">
                            <img src={AboutImage3} alt="about" className="img-fluid" ></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aboutus
