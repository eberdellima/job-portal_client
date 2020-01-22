import { JOBS_API_URL } from '../config/index'

export async function fetchJobs(page, cb) {
  const res = await fetch(`${JOBS_API_URL}/${page}`)
  const json = await res.json()

  cb(json.data)
}

export async function fetchJobsPerTerm(page, term, cb) {
  const res = await fetch(`${JOBS_API_URL}/search?page=${page}&search=${term}`)
  const json = await res.json()

  cb(json.data)
}