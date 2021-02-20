import React from 'react'
import './assets/css/footer.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './assets/css/contact.css';
function contact() {
    return (
        <div>
            <section className="section pb-5">


<h2 class="section-heading h1 pt-4">Contact us</h2>

<p class="section-description pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
  amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a
  pariatur accusamus veniam.</p>

<div class="row">

  <div class="col-lg-5 mb-4">

   
    <div class="card">

      <div class="card-body">
        
        <div class="form-header blue accent-1">
          <h3><i class="fa fa-envelope"></i> Write to us:</h3>
        </div>

        <p>We'll write rarely, but with only the best content.</p>
        <br/>

       
        <div class="md-form">
          <i class="fa fa-user prefix grey-text"></i>
          <input type="text" id="form-name" class="form-control"/>
          <label for="form-name">Your name</label>
        </div>

        <div class="md-form">
          <i class="fa fa-envelope prefix grey-text"></i>
          <input type="text" id="form-email" class="form-control"/>
          <label for="form-email">Your email</label>
        </div>

        <div class="md-form">
          <i class="fa fa-tag prefix grey-text"></i>
          <input type="text" id="form-Subject" class="form-control"/>
          <label for="form-Subject">Subject</label>
        </div>

        <div class="md-form">
          <i class="fa fa-pencil-alt prefix grey-text"></i>
          <textarea id="form-text" class="form-control md-textarea" rows="3"></textarea>
          <label for="form-text">Icon Prefix</label>
        </div>

        <div class="text-center mt-4">
          <button class="btn btn-light-blue">Submit</button>
        </div>

      </div>

    </div>
  

  </div>
  
  <div class="col-lg-7">


    <div id="map-container-google-11" class="z-depth-1-half map-container-6">
      <iframe src="https://maps.google.com/maps?q=new%20delphi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"  allowfullscreen></iframe>
    </div>

    <br/>
    
    <div class="row text-center">
      <div class="col-md-4">
        <a class="btn-floating blue accent-1"><i class="fas fa-map-marker"></i></a>
        <p>San Francisco, CA 94126</p>
        <p>United States</p>
      </div>

      <div class="col-md-4">
        <a class="btn-floating blue accent-1"><i class="fa fa-phone"></i></a>
        <p>+ 01 234 567 89</p>
        <p>Mon - Fri, 8:00-22:00</p>
      </div>

      <div class="col-md-4">
        <a class="btn-floating blue accent-1"><i class="fa fa-envelope"></i></a>
        <p>info@gmail.com</p>
        <p>sale@gmail.com</p>
      </div>
    </div>

  </div>
 

</div>

</section>
        </div>
    )
}

export default contact
