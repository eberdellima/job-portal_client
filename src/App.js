import React from 'react';
import './App.css';

import Jobs from './components/jobList/index'

import fetchJobs from './utils/fetch-jobs'


function App() {

  const [jobList, updateJobList] = React.useState([])

  const handleJobUpdate = () => { fetchJobs(updateJobList) }
  React.useEffect(handleJobUpdate, [])

  return (
    <div className="App">
      <Jobs jobs={jobList}/>
    </div>
  );
}

export default App;
