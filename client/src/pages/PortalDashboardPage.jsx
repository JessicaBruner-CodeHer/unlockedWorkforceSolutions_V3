import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const PortalDashboardPage = () => {
  const navigate = useNavigate()

  const [stats, setStats] = useState({
    employers: '--',
    jobs: '--',
    events: '--',
  })

  const [loading, setLoading] = useState(true)

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/portal/login')
  }

  const goTo = (path) => {
    navigate(path)
  }

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem('token')

        const response = await fetch('http://localhost:5000/api/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Failed to load dashboard')
        }

        setStats({
          employers: data?.data?.employers || 0,
          jobs: data?.data?.jobs || 0,
          events: data?.data?.events || 0,
        })
      } catch (err) {
        console.error('Dashboard error:', err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboard()
  }, [])

  return (
    <main className="page">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>Dashboard</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h2>Quick Actions</h2>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <button onClick={() => goTo('/portal/jobs')}>Create Job Posting</button>
            <button onClick={() => goTo('/portal/jobs/list')}>View Job Postings</button>
            <button onClick={() => goTo('/portal/employers')}>View Employers</button>
            <button onClick={() => goTo('/portal/documents')}>Manage Documents</button>
            <button onClick={() => goTo('/portal/events')}>View Events</button>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h2>System Overview</h2>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <div>
                <strong>Active Employers:</strong>
                <p>{stats.employers}</p>
              </div>

              <div>
                <strong>Open Job Postings:</strong>
                <p>{stats.jobs}</p>
              </div>

              <div>
                <strong>Upcoming Events:</strong>
                <p>{stats.events}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default PortalDashboardPage