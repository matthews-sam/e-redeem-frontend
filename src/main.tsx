import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CampaignsProvider } from './campaigns/CampaignsContext.jsx'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element #root not found in index.html')

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CampaignsProvider>
        <App />
      </CampaignsProvider>
    </BrowserRouter>
  </StrictMode>,
)
