import { Routes, Route, useLocation } from 'react-router-dom'
import RedeemPage from './systems/redeem/RedeemPage.jsx'
import PortfolioPage from './systems/portfolio/PortfolioPage.jsx'
import DevSwitcher from './dev/DevSwitcher.jsx'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Routes>
        <Route path="/" element={<RedeemPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <DevSwitcher current={location.pathname} />
    </>
  )
}
