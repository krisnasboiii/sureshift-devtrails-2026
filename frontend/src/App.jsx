import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Premium from './pages/Premium'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ background: '#0D0221', minHeight: '100vh', color: '#E8E5DA' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/premium" element={<Premium />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
