import { JOBS_API_URL } from '../config/index'

export default async function fetchJobs(page, cb) {
  const res = await fetch(`${JOBS_API_URL}/${page}`)
  const json = await res.json()

  cb(json.data)
}