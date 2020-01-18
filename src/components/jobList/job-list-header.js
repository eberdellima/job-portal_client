import React from 'react'
import { Typography } from '@material-ui/core'

export default function JobListHeader({numJobs}) {
  return (
    <div>
      <Typography variant="h4" component="h1" align="center" >
        Entry Level Software Jobs
      </Typography>
      <Typography variant="h6" component="h2" align="center">
        Found {numJobs} total
      </Typography>
    </div>
  )
}