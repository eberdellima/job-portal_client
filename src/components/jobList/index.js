import React from 'react'

import JobModal from '../jobModal';
import JobListHeader from './job-list-header';
import JobList from './job-list'
import JobListStepper from './job-list-stepper';
import SearchBar from '../search-bar';

import { fetchJobs, fetchJobsPerTerm} from '../../utils/fetch-jobs'

const initialJobs = {
  total_jobs: 0,
  total_pages: 0,
  jobs: []
}

export default function Jobs() {

  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState({})
  const [page, setPage] = React.useState(1)
  const [jobs, setJobs] = React.useState(initialJobs)
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleJobsUpdate = () => { 
    if(!searchTerm || searchTerm === '') {
      fetchJobs(page, setJobs) 
    } else {
      fetchJobsPerTerm(page, searchTerm, setJobs)
    }
  }
  React.useEffect(handleJobsUpdate, [page])

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setPage(page + 1)
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    setPage(page - 1)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleJobSearch = () => {
    fetchJobsPerTerm(page, searchTerm, setJobs)
  }

  const handleSearchTermUpdate = (term) => {
    setSearchTerm(term)
  }

  const {
    total_jobs: numJobs,
    total_pages: numPages,
    jobs: jobsOnPage
  } = jobs

  const stepperOptions = {
    activeStep,
    numPages: numPages ? numPages : 0,
    handleBack,
    handleNext
  }

  return (
    <div className={'jobs'}>
      <JobModal open={open} job={selectedJob} handleClose={handleClose}/>
      <JobListHeader numJobs={numJobs} />
      <SearchBar searchTerm={searchTerm} searchTermHandler={handleSearchTermUpdate} search={handleJobSearch}/>
      <JobList jobs={jobsOnPage} selectJob={setSelectedJob} openModal={handleClickOpen} />
      <JobListStepper options={stepperOptions} />
    </div>
  )
}