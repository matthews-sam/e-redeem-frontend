import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import PortfolioPage from './systems/portfolio/PortfolioPage.tsx'
import CampaignSitePage from './campaigns/CampaignSitePage.tsx'
import DevSwitcher from './dev/DevSwitcher.tsx'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/campaigns/:campaignId" element={<CampaignSitePage />} />
        {/* Portfolio used to live here; keep old links working. */}
        <Route path="/portfolio" element={<Navigate to="/" replace />} />
      </Routes>
      <DevSwitcher current={location.pathname} />
    </>
  )
}
