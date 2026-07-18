import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Hash, HelpCircle, Disc3, BarChart3, Plus, ArrowLeft } from 'lucide-react'
import Modal from '../shared/components/Modal.jsx'
import { useCampaigns, CAMPAIGN_TYPES } from './CampaignsContext.jsx'

const TYPE_ICONS = {
  code: Hash,
  quiz: HelpCircle,
  raffle: Disc3,
  poll: BarChart3,
}

const TABS = [
  { key: 'active', label: 'Active Campaigns' },
  { key: 'inactive', label: 'Inactive Campaigns' },
]

export default function CampaignDashboardModal({ isOpen, onClose }) {
  const { campaigns, addCampaign, setCampaignStatus } = useCampaigns()
  const [tab, setTab] = useState('active')
  const [creating, setCreating] = useState(false)

  const visible = campaigns.filter((c) => c.status === tab)

  const handleCreate = (type) => {
    addCampaign(type)
    setCreating(false)
  }

  const handleClose = () => {
    setCreating(false)
    onClose?.()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      labelledBy="campaigns-modal-title"
      className="flex max-h-[85vh] w-full max-w-2xl flex-col rounded-2xl bg-white shadow-xl"
    >
      <div className="flex items-start justify-between border-b border-p-mist px-7 py-6">
        <div>
          {creating && (
            <button
              onClick={() => setCreating(false)}
              className="mb-2 flex cursor-pointer items-center gap-1.5 font-p-body text-xs font-medium text-p-slate transition-colors hover:text-p-depth"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to campaigns
            </button>
          )}
          <h2 id="campaigns-modal-title" className="font-p-display text-2xl text-p-depth">
            {creating ? 'Create a new campaign' : 'Campaigns'}
          </h2>
        </div>
        <button
          onClick={handleClose}
          aria-label="Close"
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-p-slate transition-colors hover:bg-p-mist hover:text-p-depth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-p-current"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {creating ? (
        <div className="overflow-y-auto p-7">
          <p className="mb-6 font-p-body text-sm text-p-slate">Choose a campaign type to get started.</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CAMPAIGN_TYPES.map(({ type, label, description }) => {
              const Icon = TYPE_ICONS[type]
              return (
                <button
                  key={type}
                  onClick={() => handleCreate(type)}
                  className="flex cursor-pointer flex-col items-start gap-3 rounded-lg border border-p-mist p-5 text-left transition-colors hover:border-p-current hover:bg-p-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-p-current"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-p-mist text-p-depth">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-p-body text-sm font-semibold text-p-depth">{label}</span>
                  <span className="font-p-body text-xs text-p-slate">{description}</span>
                </button>
              )
            })}
          </div>
        </div>
      ) : (
        <>
          <div className="flex border-b border-p-mist px-7">
            {TABS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`cursor-pointer border-b-2 px-1 py-3 mr-6 font-p-body text-sm font-semibold transition-colors ${
                  tab === key
                    ? 'border-p-current text-p-depth'
                    : 'border-transparent text-p-slate hover:text-p-depth'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="overflow-y-auto p-7">
            {tab === 'active' && (
              <button
                onClick={() => setCreating(true)}
                className="mb-5 flex cursor-pointer items-center gap-2 rounded-md bg-p-current px-4 py-2.5 font-p-body text-sm font-semibold text-p-current-ink transition-colors hover:bg-p-current/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-p-current focus-visible:ring-offset-2"
              >
                <Plus className="h-4 w-4" />
                Create New Campaign
              </button>
            )}

            {visible.length === 0 ? (
              <p className="font-p-body text-sm text-p-slate">No {tab} campaigns yet.</p>
            ) : (
              <ul className="flex flex-col gap-2">
                {visible.map((c) => {
                  const Icon = TYPE_ICONS[c.type]
                  const meta = CAMPAIGN_TYPES.find((t) => t.type === c.type)
                  return (
                    <li
                      key={c.id}
                      className="flex items-center justify-between gap-3 rounded-lg border border-p-mist px-4 py-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-p-mist text-p-depth">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <div className="truncate font-p-body text-sm font-semibold text-p-depth">{c.name}</div>
                          <div className="font-p-body text-xs text-p-slate">{meta?.label}</div>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        {c.type !== 'poll' && (
                          <Link
                            to={`/campaigns/${c.id}`}
                            onClick={handleClose}
                            className="rounded-md border border-p-mist px-3 py-1.5 font-p-body text-xs font-semibold text-p-depth transition-colors hover:border-p-current"
                          >
                            View site
                          </Link>
                        )}
                        <button
                          onClick={() => setCampaignStatus(c.id, tab === 'active' ? 'inactive' : 'active')}
                          className="cursor-pointer rounded-md px-3 py-1.5 font-p-body text-xs font-semibold text-p-slate transition-colors hover:bg-p-mist"
                        >
                          {tab === 'active' ? 'Mark inactive' : 'Reactivate'}
                        </button>
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </>
      )}
    </Modal>
  )
}
