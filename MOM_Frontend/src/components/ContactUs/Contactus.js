import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import '../ContactUs/style.css'
import ContactusImage from '../../assets/img/contactImage.jpg'
const Contactus = () => {
    return (
        <div>
           <section className="contactus">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-12 left">
                            <img src={ContactusImage} className="img-fluid" ></img>
                            <h1 className="aboutUsHead">Contact Us</h1>
                            <p className="aboutUsPara">We are here with a mission to increase productivity, make colaboration easy and convert your conversation into actions with an effective and efficient use of AI.</p>
                        </div>
                    </div>
                </div>
            </section>  
        </div>
    )
}

export default Contactus
