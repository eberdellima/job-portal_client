import React from 'react';

import Job from '../job';


export default function JobList({jobs, selectJob, openModal}) {

  const handleJobClick = (job) => {
    selectJob(job)
    openModal()
  }

  const processor = (job, index) => {
    return <Job key={index} job={job} onClick={() => {handleJobClick(job)}}/>
  }

  return (
    <div>
      { (jobs || []).map(processor) }
    </div>
  )
}

