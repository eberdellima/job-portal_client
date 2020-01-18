import React from 'react'

import JobModal from '../jobModal';
import JobListHeader from './job-list-header';
import JobList from './job-list'
import JobListStepper from './job-list-stepper';


export default function Jobs({ jobs }) {

  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState({})

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const numJobs = jobs.length
  const numPages = Math.ceil(numJobs / 50)
  
  const jobsOnPage = jobs.slice(activeStep * 50, (activeStep * 50) + 50 - 1)

  const stepperOptions = {
    activeStep,
    numPages,
    handleBack,
    handleNext
  }

  return (
    <div className={'jobs'}>
      <JobModal open={open} job={selectedJob} handleClose={handleClose}/>
      <JobListHeader numJobs={numJobs} />
      <JobList jobs={jobsOnPage} selectJob={setSelectedJob} openModal={handleClickOpen}/>
      <JobListStepper options={stepperOptions} />
    </div>
  )
}