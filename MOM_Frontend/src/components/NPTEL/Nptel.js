import React,{useState} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import './style.css'
const Nptel = () => {

    const[data,setData] = useState('')

    return (
        <div className="mt-5">
            <section className="">
                <div className="container">
                    <div className="row nptel bg-primary">
                        <div className="col-12">
                            <h1 className="nptelHead">NPTEL</h1>
                            <p className="nptelPara">An automated tool which summarizes transcripts of NPTEL Courses</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-sm-6 textArea">
                            <div class="md-form">
                                {/* <i class="fas fa-pencil-alt prefix"></i> */}
                                <textarea id="form10" class="md-textarea form-control" rows="10" placeholder="Paste your Transcript here..."></textarea>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-check my-3">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Extractive Summarization
                                        </label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                    <div class="form-check my-3">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Abstractive Summarization
                                        </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 textArea">
                            <div class="md-form">
                                <textarea id="form10" class="md-textarea form-control" rows="10"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 my-3">
                        <div className="col-12">
                            <center><button className="btn btn-primary" style={{fontSize:'20px',padding:'10px',fontWeight:'bold'}}>Generate Summary</button></center>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Nptel
