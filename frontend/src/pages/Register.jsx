import { useState } from 'react'
import API from '../utils/api'

const inputStyle = {
  background: '#0D0221',
  border: '1px solid #26408B',
  borderRadius: '10px',
  color: '#E8E5DA',
  padding: '10px 14px',
  width: '100%',
  outline: 'none',
}

const cardStyle = {
  background: '#0F084B',
  borderRadius: '14px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
  backdropFilter: 'blur(10px)',
}

export default function Register() {
  const [form, setForm] = useState({
    name: '', phone: '', city: '', pincode: '',
    platform: 'zomato', upi_id: '', avg_weekly_income: '',
  })
  const [alert, setAlert] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await API.post('/workers/register/', form)
      setAlert({ type: 'success', msg: 'Worker registered successfully! ✅' })
      setForm({ name: '', phone: '', city: '', pincode: '', platform: 'zomato', upi_id: '', avg_weekly_income: '' })
    } catch (err) {
      const errors = err.response?.data
      const msg = errors ? Object.values(errors).flat().join(', ') : 'Registration failed!'
      setAlert({ type: 'error', msg })
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6" style={{ color: '#A6CFD5' }}>Worker Registration</h1>

      {alert && (
        <div className="mb-4 p-3 rounded-xl text-sm" style={{
          background: alert.type === 'success' ? '#C2E7D922' : '#ff444422',
          border: `1px solid ${alert.type === 'success' ? '#C2E7D9' : '#ff4444'}`,
          color: alert.type === 'success' ? '#C2E7D9' : '#ff8888',
          borderRadius: '10px'
        }}>
          {alert.msg}
        </div>
      )}

      <div style={cardStyle} className="p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {[
            { name: 'name', placeholder: 'Full Name' },
            { name: 'phone', placeholder: 'Phone Number' },
            { name: 'city', placeholder: 'City (e.g. mumbai)' },
            { name: 'pincode', placeholder: 'Pincode' },
            { name: 'upi_id', placeholder: 'UPI ID' },
            { name: 'avg_weekly_income', placeholder: 'Avg Weekly Income (₹)' },
          ].map(field => (
            <input
              key={field.name}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              style={inputStyle}
              required
            />
          ))}

          <select name="platform" value={form.platform} onChange={handleChange} style={inputStyle}>
            <option value="zomato">Zomato</option>
            <option value="swiggy">Swiggy</option>
            <option value="blinkit">Blinkit</option>
            <option value="zepto">Zepto</option>
          </select>

          <button
            type="submit"
            style={{ background: 'linear-gradient(135deg, #26408B, #A6CFD5)', borderRadius: '10px', color: '#0D0221', fontWeight: '600', padding: '12px' }}
            className="transition-opacity hover:opacity-90"
          >
            Register Worker
          </button>
        </form>
      </div>
    </div>
  )
}
