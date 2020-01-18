import { JOBS_API_URL } from '../config/index'

export default async function fetchJobs(cb) {
  const res = await fetch(JOBS_API_URL)
  const json = await res.json()

  cb(json.data)
}