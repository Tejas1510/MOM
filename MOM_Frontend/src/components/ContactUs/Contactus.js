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
                        <div className="col-12">
                            <h1 className="aboutUsHead">Contact US</h1>
                            <p className="aboutUsPara">Our Team will always be there to help you with any of your queries.</p>
                        </div>
                    </div>
            </div>
            </section>
            <div className="container mt-5">
			<div className="row">
				<div className="col-12 col-sm-6">
					<form>
					  <div className="form-group">
						  <input type="name" className="form-control" id="exampleInputName" placeholder="Your Full Name..."/>
					  </div>
                    <div className="form-group">
						  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email Address..."/>
					  </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Enter your Message" style={{height:'190px'}} aria-label="With textarea"></textarea>
                    </div>
					<button type="submit" className="btn btn-warning btn-lg btn-block mb-5">Submit</button>
			        </form>
			  </div>
			  <div  className="col-12 col-sm-6">
                <img className="img-fluid contact-image" alt="Responsive image" src="https://csds.qld.edu.au/sdc/resources/images/find-us-map.jpg"/>
	  		</div>
        
			</div>
		</div>  
        </div>
    )
}

export default Contactus
