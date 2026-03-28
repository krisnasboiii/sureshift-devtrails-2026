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

export default function Premium() {
  const [form, setForm] = useState({ city: '', season: 'summer', past_claims: 0 })
  const [result, setResult] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await API.post('/premium/calculate/', form)
    setResult(res.data)
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6" style={{ color: '#A6CFD5' }}>Premium Calculator</h1>

      <div style={cardStyle} className="p-6 mb-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="city" value={form.city} onChange={handleChange} placeholder="City (e.g. mumbai)" style={inputStyle} required />

          <select name="season" value={form.season} onChange={handleChange} style={inputStyle}>
            <option value="summer">Summer</option>
            <option value="monsoon">Monsoon</option>
            <option value="winter">Winter</option>
          </select>

          <input name="past_claims" type="number" value={form.past_claims} onChange={handleChange} placeholder="Past Claims" style={inputStyle} min="0" />

          <button
            type="submit"
            style={{ background: 'linear-gradient(135deg, #26408B, #A6CFD5)', borderRadius: '10px', color: '#0D0221', fontWeight: '600', padding: '12px' }}
            className="transition-opacity hover:opacity-90"
          >
            Calculate Premium
          </button>
        </form>
      </div>

      {result && (
        <div style={cardStyle} className="p-6">
          <h2 className="text-lg font-semibold mb-4" style={{ color: '#A6CFD5' }}>Result</h2>
          <div className="flex flex-col gap-2 text-sm" style={{ color: '#E8E5DA' }}>
            {[
              ['Base Premium', `₹${result.base}`],
              ['Location Risk', `+₹${result.location_risk}`],
              ['Season Risk', `+₹${result.season_risk}`],
              ['History Adjustment', `₹${result.history_adjustment}`],
              ['Coverage', `₹${result.coverage}`],
              ['Duration', result.duration],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between py-1" style={{ borderBottom: '1px solid #26408B44' }}>
                <span>{label}</span>
                <span style={{ color: '#A6CFD5' }}>{value}</span>
              </div>
            ))}
            <div className="flex justify-between pt-2 text-base font-bold">
              <span>Final Premium</span>
              <span style={{ color: '#C2E7D9' }}>₹{result.final_premium}/week</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
