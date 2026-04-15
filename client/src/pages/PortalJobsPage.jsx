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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>Job Postings</h1>
          <button onClick={() => navigate('/portal/jobs')}>New Job Posting</button>
        </div>

        {loading ? <p>Loading...</p> : null}
        {error ? <p className="form-error">{error}</p> : null}

        {!loading && !error && jobs.length === 0 ? <p>No job postings found.</p> : null}

        {!loading && !error && jobs.length > 0 ? (
          <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem' }}>
            {jobs.map((job) => (
              <div
                key={job._id}
                style={{
                  border: '1px solid #d1d5db',
                  borderRadius: '10px',
                  padding: '1rem',
                  background: '#fff',
                }}
              >
                <h3 style={{ marginTop: 0 }}>{job.title}</h3>
                <p>
                  <strong>{job.company}</strong> | {job.location}
                </p>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </main>
  )
}

export default PortalJobsListPage