import { useEffect, useState } from 'react'
import API from '../utils/api'

const cardStyle = {
  background: '#0F084B',
  borderRadius: '14px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
  backdropFilter: 'blur(10px)',
}

export default function Dashboard() {
  const [workers, setWorkers] = useState([])

  useEffect(() => {
    API.get('/workers/list/').then(res => setWorkers(res.data)).catch(() => {})
  }, [])

  const stats = [
    { label: 'Total Workers', value: workers.length },
    { label: 'Active Policies', value: workers.filter(w => w.is_active).length },
    { label: 'Avg Premium', value: '₹40/week' },
    { label: 'Claims This Week', value: '0' },
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6" style={{ color: '#A6CFD5' }}>
        Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map(stat => (
          <div key={stat.label} style={cardStyle} className="p-4">
            <p className="text-sm mb-1" style={{ color: '#A6CFD5' }}>{stat.label}</p>
            <p className="text-2xl font-bold" style={{ color: '#E8E5DA' }}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Workers Table */}
      <div style={cardStyle} className="p-4">
        <h2 className="text-lg font-semibold mb-4" style={{ color: '#A6CFD5' }}>Registered Workers</h2>
        {workers.length === 0 ? (
          <p style={{ color: '#E8E5DA' }} className="text-sm">No workers registered yet.</p>
        ) : (
          <table className="w-full text-sm" style={{ color: '#E8E5DA' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #26408B' }}>
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">City</th>
                <th className="text-left py-2">Platform</th>
                <th className="text-left py-2">UPI</th>
              </tr>
            </thead>
            <tbody>
              {workers.map(w => (
                <tr key={w.id} style={{ borderBottom: '1px solid #26408B22' }}>
                  <td className="py-2">{w.name}</td>
                  <td className="py-2">{w.city}</td>
                  <td className="py-2 capitalize">{w.platform}</td>
                  <td className="py-2">{w.upi_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
