import React from 'react';
import './App.css';

import Jobs from './components/jobList/index'

const JOBS_API_URL = "http://localhost:8080/jobs"


async function fetchJobs(cb) {
  const res = await fetch(JOBS_API_URL)
  const json = await res.json()

  cb(json.data)
}

function App() {

  const [jobList, updateJobList] = React.useState([])

  React.useEffect(() => {
    fetchJobs(updateJobList)
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobList}/>
    </div>
  );
}

export default App;
