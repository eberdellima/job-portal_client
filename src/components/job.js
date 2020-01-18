import React from 'react';
import { Paper, Typography } from '@material-ui/core'


export default function Job({ job, onClick }) {

  const formatDate = (date) => {
    return date.split(' ').slice(0, 3).join(' ')
  }

  return (
    <Paper className={'job'} onClick={onClick} elevation={2}>
      <div className="job-details">
        <Typography variant="h5" >{job.title}</Typography>
        <Typography variant="h6">{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      <div className="posted-date">
        <Typography>{formatDate(job.created_at)}</Typography>
      </div>
    </Paper>
  )
}