import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function JobModal({ job, open, handleClose }) {

  if (!job) {
    return <div />
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {job.title} -
          {job.company}
          <img className="detail-logo" src={job.company_logo} alt="company_logo" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            dangerouslySetInnerHTML={{ __html: job.description }}
            id="alert-dialog-slide-description"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button color="primary" href={job.url} target={"_blank"}>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}