import React from 'react';
import { Paper, Typography } from '@material-ui/core'

function formatDate(date) {
  return date.split(' ').slice(0, 3).join(' ')
}

export default function Job({ job, onClick }) {
  return (
    <Paper className={'job'} onClick={onClick}>
      <div>
        <Typography variant="h6" >{job.title}</Typography>
        <Typography variant="h5">{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      <div>
        <Typography>{formatDate(job.created_at)}</Typography>
      </div>
    </Paper>
  )
}