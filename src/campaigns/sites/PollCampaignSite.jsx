export default function PollCampaignSite({ campaign }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-r-cloud px-6 text-center font-r-body">
      <span className="font-r-body text-xs font-semibold uppercase tracking-wider text-r-signal">
        Poll campaign
      </span>
      <h1 className="font-r-display text-3xl text-r-ink">{campaign?.name ?? 'Poll'}</h1>
      <p className="max-w-md font-r-body text-base text-r-ink-muted">
        Poll campaigns are coming soon — this site type isn&rsquo;t built out yet.
      </p>
    </div>
  )
}
