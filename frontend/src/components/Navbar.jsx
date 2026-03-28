import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'Dashboard' },
    { to: '/register', label: 'Register' },
    { to: '/premium', label: 'Premium' },
  ]

  return (
    <nav style={{ background: '#0F084B' }} className="px-6 py-4 flex items-center justify-between shadow-lg">
      <span className="text-xl font-bold" style={{ color: '#A6CFD5' }}>
        ⚡ SureShift
      </span>
      <div className="flex gap-6">
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: pathname === link.to ? '#A6CFD5' : '#E8E5DA' }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
