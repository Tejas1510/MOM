import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Tooltip } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Modal from 'react-bootstrap/Modal';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Pdf from "react-to-pdf";
import Form from 'react-bootstrap/Form'
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { usePromiseTracker } from "react-promise-tracker";
import Speech from 'react-speech';

const useStyles = makeStyles({
  root: {
    minWidth: 240,
    maxWidth: 270,
    maxHeight: 250,
    margin: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

});
const ref = React.createRef();

const speechStyle = {
  play: {
    hover: {
      backgroundColor: 'rgba(66,193,152,1)'
    },
    button: {
      display: 'inline-block',
      width: '30px',
      height: '30px',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'rgba(101,205,170,1)',
      border: 'none',
      outline: 'none',
      borderRadius: '50%'
    },
  },

  stop: {
    hover: {
      backgroundColor: 'rgba(66,193,152,1)'
    },
    button: {
      display: 'inline-block',
      width: '30px',
      height: '30px',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'rgba(101,205,170,1)',
      border: 'none',
      outline: 'none',
      borderRadius: '50%'
    },
  },

  pause: {
    hover: {
      backgroundColor: 'rgba(66,193,152,1)'
    },
    button: {
      display: 'inline-block',
      width: '30px',
      height: '30px',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'rgba(101,205,170,1)',
      border: 'none',
      outline: 'none',
      borderRadius: '50%'
    },
  },

  resume: {
    hover: {
      backgroundColor: 'rgba(66,193,152,1)'
    },
    button: {
      display: 'inline-block',
      width: '30px',
      height: '30px',
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: 'rgba(101,205,170,1)',
      border: 'none',
      outline: 'none',
      borderRadius: '50%'
    },
  }
};


function MyModal(props) {
  const [state, setState] = useState({ lang: 'English', text: props.transcript, model: 'NLTK Model', summaryText: '', translatedSummary: '' });
  //const TransAPI = 'https://meetdigest.herokuapp.com/api/translateText';
  const TransAPI = 'http://localhost:8000/api/translateText';

  const getTranslation = (inp_text, src_lang, dest_lang) => {
    console.log('getTranslation called');
    let token = localStorage.getItem('token');
    if (token) {
      trackPromise(
        fetch(TransAPI, {
          method: 'POST',
          headers: {
            'Content-Type': "application/json",
            Authorization: `JWT ${token}`
          },
          body: JSON.stringify({ input_text: inp_text, inp_lang: src_lang, op_lang: dest_lang })
        })
          .then(res => res.json())
          .then(req2 => {
            console.log("translateText response ", req2);

            fetch(TransAPI, {
              method: 'POST',
              headers: {
                'Content-Type': "application/json",
                Authorization: `JWT ${token}`
              },
              body: JSON.stringify({ input_text: state.summaryText, inp_lang: 'English', op_lang: dest_lang })
            })
              .then(inres => inres.json())
              .then(inreq2 => {
                console.log("translateText response ", inreq2);
                let transSummary = inreq2.op_text;
                setState({ ...state, lang: dest_lang, text: req2.op_text, translatedSummary: transSummary });
              })

            //setState({ ...state, lang: dest_lang, text: req2.op_text });
          })
      );
    }
  }
  const langChangeHandler = (e) => {
    console.log("langChangeHandler", e.target.value);
    getTranslation(props.transcript, 'English', e.target.value);
  }


  const getSummary = (model_name) => {
    console.log("getSummary model=", model_name);
    const model1API = 'https://meetdigest.herokuapp.com/api/nltkSummarizer';
    //const model2API = 'https://meetdigest.herokuapp.com/api/t5Summarizer';
    const model2API = 'http://localhost:8000/api/t5Summarizer';
    let APIURL;
    if (model_name === 'NLTK Model')
      APIURL = model1API;
    else if (model_name === 'T5 Model')
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
          body: JSON.stringify({ input_text: props.transcript })
        })
          .then(res => res.json())
          .then(req2 => {
            console.log("summaryText response ", req2);
            console.log('model_name=', model_name);
            let summary = req2.op_text;

            fetch(TransAPI, {
              method: 'POST',
              headers: {
                'Content-Type': "application/json",
                Authorization: `JWT ${token}`
              },
              body: JSON.stringify({ input_text: summary, inp_lang: 'English', op_lang: state.lang })
            })
              .then(inres => inres.json())
              .then(inreq2 => {
                console.log("translateText response ", inreq2);
                let transSummary = inreq2.op_text;
                setState({ ...state, summaryText: summary, model: model_name, translatedSummary: transSummary });
              })

            //setState({ ...state, summaryText: summary, model: model_name });
          })
      );
    }
  }
  const modelChangeHandler = (e) => {
    console.log("modelChangeHandler", e.target.value);
    getSummary(e.target.value);
  }

  useEffect(() => {
    getSummary('NLTK Model');
    return () => {
    }
  }, [])

  const { promiseInProgress } = usePromiseTracker();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ marginTop: '5px' }}
    >
      <Modal.Header closeButton style={{ backgroundColor: "rgb(61, 61, 238)", color: "white" }} >
        <Modal.Title id="contained-modal-title-vcenter" style={{ width: "100%" }} >
          <div className="conatiner">
            <div className="row" >
              <div className="col-8" >
                {props.title}
              </div>
              <div className="col-3" >
                <Form>
                  <Form.Control as="select" size="sm" onChange={langChangeHandler}>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Marathi</option>
                    <option>Arabic</option>
                    <option>Bengali</option>
                    <option>Chinese</option>
                    <option>French</option>
                    <option>Gujrati</option>
                    <option>Japanese</option>
                    <option>Kannada</option>
                    <option>Malayalam</option>
                    <option>Nepali</option>
                    <option>Oriya</option>
                    <option>Portuguese</option>
                    <option>Punjabi</option>
                    <option>Russian</option>
                    <option>Spanish</option>
                    <option>Tamil</option>
                    <option>Telugu</option>
                    <option>Urdu</option>
                  </Form.Control>

                </Form>
              </div>
              <div className="col-1" >
                <Pdf targetRef={ref} filename="summary.pdf">
                  {({ toPdf }) => <PictureAsPdfIcon onClick={toPdf} style={{ color: "white", cursor: "pointer" }}></PictureAsPdfIcon>}
                </Pdf>

              </div>
            </div>
          </div>
        </Modal.Title>

      </Modal.Header>
      <Modal.Body style={{ 'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto' }}>

        <LoadingIndicator color="#000000" />

        {!promiseInProgress ?
          <p ref={ref}>
            <div style={{ marginBottom: '20px' }}>
              Play Transcript: <Speech text={props.transcript} styles={speechStyle} stop={true} pause={true} resume={true} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              Tarnscript: &nbsp; {state.text}
            </div>
            <div style={{ marginBottom: '20px' }}>
              <div className="row">
                <div className="col-4 col-md-7">
                  Summary:
              </div>
                <div className="col-8 col-md-5">
                  <div className="row">
                    <div className="col-3">
                      Model
                    </div>
                    <div className="col-9">
                      <Form>
                        <Form.Control as="select" size="sm" onChange={modelChangeHandler} value={state.model}>
                          <option>NLTK Model</option>
                          <option>T5 Model</option>
                        </Form.Control>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-11 mt-3">
                  {state.translatedSummary}
                </div>
              </div>

            </div>
          </p>
          : null}

      </Modal.Body>


    </Modal>
  );
}

const timestampConverter = (inpTime) => {
  let dateUTC = new Date(inpTime);
  return (dateUTC.toString());
}

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div style={{ display: 'inline-block', float: 'left' }}>
      <Card className={classes.root} style={{ backgroundColor: "white", borderRight: "6px solid rgb(63,81,181)", boxShadow: " 0 19px 38px rgba(0,0,0,0.10), 0 15px 12px rgba(0,0,0,0.10)" }}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Date: {props.meet.date ? timestampConverter(props.meet.date).substring(0, 15) : null}<br></br>
        Time: {props.meet.date ? timestampConverter(props.meet.date).substring(16, 21) : null} <br></br>
        Duration: {props.meet.duration ? `${props.meet.duration} Min` : null}
          </Typography>
          <Tooltip title={props.meet.title} aria-label={props.meet.title}>
            <Typography variant="h5" component="h2" style={{ cursor: 'pointer' }}>
              {props.meet.title.length <= 15 ? props.meet.title : props.meet.title.substring(0, 15) + '....'}
            </Typography>
          </Tooltip>
          <Chip
            icon={<FaceIcon />}
            label={props.meet.hostname}
            clickable
            color="secondary"
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: '10px' }}
            className={classes.button}
            endIcon={<SendIcon />}
            onClick={() => setModalShow(true)}
          >
            View Summary
        </Button>
          <MyModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            transcript={props.meet.transcript}
            summary={props.meet.summary}
            title={props.meet.title}
          />
        </CardActions>
      </Card>
    </div>
  );
}