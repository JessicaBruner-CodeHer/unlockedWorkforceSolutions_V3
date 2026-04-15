import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PortalJobsListPage = () => {
  const navigate = useNavigate()

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token')

        const response = await fetch('http://localhost:5000/api/job-postings', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Failed to load job postings')
        }

        setJobs(data.data || [])
      } catch (err) {
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  return (
    <main className="page">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1>Job Postings</h1>
          <button onClick={() => navigate('/portal/jobs')}>
            New Job Posting
          </button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {!loading && jobs.length === 0 && <p>No jobs found</p>}

        {!loading && jobs.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            {jobs.map((job) => (
              <div key={job._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                <h3>{job.title}</h3>
                <p><strong>{job.company}</strong> | {job.location}</p>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default PortalJobsListPage