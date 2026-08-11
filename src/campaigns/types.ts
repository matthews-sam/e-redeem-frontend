// Shared campaign domain types, consumed by CampaignsContext, the dashboard,
// and each campaign site. Kept in their own module so the sites can import
// types without pulling in the provider.

export type CampaignType = 'code' | 'quiz' | 'raffle' | 'poll'

export type CampaignStatus = 'active' | 'inactive'

export interface Campaign {
  // Slug used as the /campaigns/:id route param.
  id: string
  name: string
  type: CampaignType
  status: CampaignStatus
}

// Descriptor for each supported campaign type, used to render type pickers.
export interface CampaignTypeMeta {
  type: CampaignType
  label: string
  description: string
}

// Every campaign site receives the resolved campaign. It is optional because
// CampaignSitePage renders a site before confirming the :id matches a campaign.
export interface CampaignSiteProps {
  campaign?: Campaign
}

export interface CampaignsContextValue {
  campaigns: Campaign[]
  // Creates a campaign of the given type and returns it, so callers can
  // navigate straight to the new campaign's site.
  addCampaign: (type: CampaignType) => Campaign
  setCampaignStatus: (id: string, status: CampaignStatus) => void
}
