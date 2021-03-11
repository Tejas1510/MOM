import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Modal from 'react-bootstrap/Modal';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Pdf from "react-to-pdf";
import Form from 'react-bootstrap/Form'

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



function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{marginTop:'5px'}}
    >
      <Modal.Header closeButton style={{backgroundColor:"rgb(61, 61, 238)",color:"white"}} >
        <Modal.Title id="contained-modal-title-vcenter" style={{width:"100%"}} >
          <div class="conatiner">
              <div class="row" >
                  <div class="col-7" >
                  {props.title}
                  </div>
                  <div class="col-3" >
                     <Form>
                          <Form.Control as="select"  size="sm" >
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Telugu</option>
                            <option>Marathi</option>
                            <option>Bengali</option>
                          </Form.Control>
                      
                      </Form>
                  </div>
                  <div class="col-1" > 
                  <RecordVoiceOverIcon style={{cursor:"pointer"}}></RecordVoiceOverIcon>
                  </div> 
                  <div class="col-1" >  
                    <Pdf targetRef={ref} filename="summary.pdf">
                  {({ toPdf }) => <PictureAsPdfIcon onClick={toPdf} style={{color:"white",cursor:"pointer"}}></PictureAsPdfIcon>}
                    </Pdf>
                  
                  </div>
              </div>
          </div>
        </Modal.Title>

      </Modal.Header>
      <Modal.Body style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto'}}>
        <p ref={ref}>
         {props.summary}  
        </p> 
      
      </Modal.Body>
  
     
    </Modal>
  );
}

const timestampConverter = (inpTime) => {
  let dateUTC = new Date(inpTime);
  return(dateUTC.toString());
}

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div style={{display:'inline-block', float: 'left'}}>
    <Card className={classes.root} style={{backgroundColor: "white",borderRight:"6px solid rgb(63,81,181)", boxShadow:" 0 19px 38px rgba(0,0,0,0.10), 0 15px 12px rgba(0,0,0,0.10)"}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Date: {props.meet.date ? timestampConverter(props.meet.date).substring(0,15) : null}<br></br>
        Time: {props.meet.date ? timestampConverter(props.meet.date).substring(16,21) : null}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.meet.title} 
        </Typography>
        <Chip
        icon={<FaceIcon />}
        label={props.meet.hostname}
        clickable
        color="secondary"
      />
        {/* <Typography variant="body2" component="p">
        {props.meet.transcript}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          style={{margin: '10px'}}
          className={classes.button}
          endIcon={<SendIcon/>}
          onClick={() => setModalShow(true)}
        >
          View Summary
        </Button>
        <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        summary={props.meet.summary}
        title={props.meet.title}
      />
      </CardActions>
    </Card>
    </div>
  );
}