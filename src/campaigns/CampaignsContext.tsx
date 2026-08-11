import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type {
  Campaign,
  CampaignStatus,
  CampaignsContextValue,
  CampaignType,
  CampaignTypeMeta,
} from './types.ts'

const CampaignsContext = createContext<CampaignsContextValue | null>(null)

export const CAMPAIGN_TYPES: CampaignTypeMeta[] = [
  {
    type: 'code',
    label: 'Code-Based',
    description: 'Enter a voucher code to win instantly — the original E-Redeem flow.',
  },
  {
    type: 'quiz',
    label: 'Quizzes',
    description: 'Answer a set of questions; score 80% or higher to win.',
  },
  {
    type: 'raffle',
    label: 'Raffle Draws',
    description: 'Spin a wheel for a chance to land on a prize.',
  },
  {
    type: 'poll',
    label: 'Polls',
    description: 'Coming soon.',
  },
]

let nextId = 100

const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: 'rtm-live',
    name: 'RTM Live — Rema Concert',
    type: 'code',
    status: 'active',
  },
  {
    id: 'brand-trivia',
    name: 'Brand Trivia Challenge',
    type: 'quiz',
    status: 'active',
  },
  {
    id: 'summer-raffle',
    name: 'Summer Raffle Draw',
    type: 'raffle',
    status: 'active',
  },
  {
    id: 'customer-poll',
    name: 'Customer Satisfaction Poll',
    type: 'poll',
    status: 'active',
  },
  {
    id: 'spring-promo-2025',
    name: 'Spring Promo 2025',
    type: 'code',
    status: 'inactive',
  },
]

export function CampaignsProvider({ children }: { children: ReactNode }) {
  const [campaigns, setCampaigns] = useState<Campaign[]>(INITIAL_CAMPAIGNS)

  const addCampaign = (type: CampaignType): Campaign => {
    const meta = CAMPAIGN_TYPES.find((t) => t.type === type)
    const countOfType = campaigns.filter((c) => c.type === type).length
    const campaign: Campaign = {
      id: `${type}-${nextId++}`,
      name: `New ${meta?.label ?? type} Campaign ${countOfType + 1}`,
      type,
      status: 'active',
    }
    setCampaigns((prev) => [campaign, ...prev])
    return campaign
  }

  const setCampaignStatus = (id: string, status: CampaignStatus) => {
    setCampaigns((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)))
  }

  return (
    <CampaignsContext.Provider value={{ campaigns, addCampaign, setCampaignStatus }}>
      {children}
    </CampaignsContext.Provider>
  )
}

export function useCampaigns(): CampaignsContextValue {
  const ctx = useContext(CampaignsContext)
  if (!ctx) throw new Error('useCampaigns must be used within a CampaignsProvider')
  return ctx
}
