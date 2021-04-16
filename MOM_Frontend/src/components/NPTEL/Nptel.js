import React, { useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import './style.css'
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

const Nptel = () => {

    const [state, setState] = useState({ inputTextarea: '', outputTextarea: '', modelOption: 'model1' })

    const textareaHandler = (e) => {
        console.log(e.target.value);
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        const model1API = 'https://meetdigest.herokuapp.com/api/nltkSummarizer';
        //const model2API = 'https://meetdigest.herokuapp.com/api/t5Summarizer';
        const model2API = 'http://localhost:8000/api/t5Summarizer';
        let APIURL;
        if(state.modelOption === 'model1')
            APIURL = model1API;
        else if(state.modelOption === 'model2')
            APIURL = model2API;

        let token = localStorage.getItem('token');
        if (token) {
            trackPromise(
                fetch(APIURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/json",
                        Authorization: `JWT ${token}`
                    },
                    body: JSON.stringify({ input_text: state.inputTextarea})
                })
                    .then(res => res.json())
                    .then(req2 => {
                        //console.log("translateText response ", req2);
                        setState({ ...state, outputTextarea:  req2.op_text});
                    })
            );
        }
    }

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
                                <textarea id="form10" className="md-textarea form-control" onChange={textareaHandler} value={state.inputTextarea} name="inputTextarea" rows="10" placeholder="Paste your Transcript here..."></textarea>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-check my-3">
                                            <input class="form-check-input" type="radio" value="model1" checked={state.modelOption === "model1"} onChange={textareaHandler} name="modelOption" id="model1Option" />
                                            <label class="form-check-label" for="model1Option">
                                                Extractive Summarization
                                        </label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-check my-3">
                                            <input class="form-check-input" type="radio" value="model2" checked={state.modelOption === "model2"} onChange={textareaHandler} name="modelOption" id="model2Option" />
                                            <label class="form-check-label" for="model2Option">
                                                Abstractive Summarization
                                        </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 textArea">
                            <div class="md-form">
                                <textarea id="form10" className="md-textarea form-control" onChange={textareaHandler} name="outputTextarea" value={state.outputTextarea} rows="10"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 my-3">
                        <div className="col-12">
                            <center><LoadingIndicator color="#000000" infoText="Generating Summary"/></center>
                            <center><button className="btn btn-primary" onClick={submitHandler} style={{ fontSize: '20px', padding: '10px', fontWeight: 'bold' }}>Generate Summary</button></center>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Nptel
