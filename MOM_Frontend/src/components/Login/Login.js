import React, { useEffect, useState } from 'react'
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
import styles from './style.css'
import GoogleLogin from 'react-google-login';

function Login() {
    const CLIENT_ID = "882188012713-j4ad7au5jf559ulap1ru0bg04m8rntga.apps.googleusercontent.com";
    
    const googleLogin = async (accesstoken) => {
        let res = await axios.post(
          "http://localhost:8000/api/rest-auth/google/",
          {
            access_token: accesstoken,
          }
        );
        console.log("post request",res);
        return await res.status;
    };
    
    const loginResponse = (response) => {
        console.log(response);
        console.log(response.profileObj);
        googleLogin(response.accessToken);
    }

    

    return (
        <div className="wrapper">
            <div className="card">
                <div className="headCont">
                    <h2>Login</h2>
                </div>
                <GoogleLogin clientId={CLIENT_ID}
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={loginResponse}
                onFailure={loginResponse}
                cookiePolicy='single_host_origin'/>
            </div>
        </div>
    )
}

export default Login
