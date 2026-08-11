import { useParams, Link } from 'react-router-dom'
import RedeemPage from '../systems/redeem/RedeemPage.jsx'
import QuizCampaignSite from './sites/QuizCampaignSite.jsx'
import RaffleCampaignSite from './sites/RaffleCampaignSite.jsx'
import PollCampaignSite from './sites/PollCampaignSite.jsx'
import { useCampaigns } from './CampaignsContext.jsx'

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-r-cloud px-6 text-center font-r-body">
      <p className="font-r-display text-2xl text-r-ink">Campaign not found</p>
      <p className="text-r-ink-muted">This campaign may have been removed.</p>
      <Link to="/" className="text-r-signal underline">
        Back to home
      </Link>
    </div>
  )
}

export default function CampaignSitePage() {
  const { campaignId } = useParams()
  const { campaigns } = useCampaigns()
  const campaign = campaigns.find((c) => c.id === campaignId)

  if (!campaign) return <NotFound />

  switch (campaign.type) {
    case 'code':
      return <RedeemPage />
    case 'quiz':
      return <QuizCampaignSite campaign={campaign} />
    case 'raffle':
      return <RaffleCampaignSite campaign={campaign} />
    case 'poll':
      return <PollCampaignSite campaign={campaign} />
    default:
      return <NotFound />
  }
}
