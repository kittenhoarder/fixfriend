import { Calendar, Clock, Building2, TrendingUp, Layers } from 'lucide-react'
import BrandLogo from '../ui/BrandLogo'

function DetailRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-2 mb-3">
      <Icon size={12} style={{ color: 'var(--text-secondary)', marginTop: '3px', flexShrink: 0 }} />
      <div>
        <span
          className="font-mono text-xs tracking-wider"
          style={{ color: 'var(--text-secondary)', letterSpacing: '0.08em' }}
        >
          {label}:{' '}
        </span>
        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
          {value}
        </span>
      </div>
    </div>
  )
}

export default function DealDetail({ deal }) {
  if (!deal) return null

  const isActive = deal.status === 'In play'
  const isClosed = deal.status.toLowerCase().includes('closed')

  const statusColor = isActive
    ? 'var(--status-warning)'
    : isClosed
      ? 'var(--status-success)'
      : 'var(--status-info)'

  const statusBg = isActive
    ? 'var(--status-warning-soft)'
    : isClosed
      ? 'var(--status-success-soft)'
      : 'var(--status-info-soft)'

  return (
    <div
      className="animate-slide-in-down rounded-lg border p-5"
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="flex items-start gap-4 flex-wrap">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <BrandLogo logoKey={deal.logoKey} label={deal.acquirer} size={20} />
            <span
              className="font-mono font-bold text-sm"
              style={{ color: 'var(--text-primary)' }}
            >
              {deal.acquirer}
            </span>
            <span style={{ color: 'var(--text-secondary)' }}>→</span>
            <span
              className="font-mono font-bold text-sm"
              style={{ color: 'var(--accent)' }}
            >
              {deal.target}
            </span>
            <span
              className="font-mono text-xs px-2 py-0.5 rounded-sm"
              style={{
                color: statusColor,
                backgroundColor: statusBg,
                border: `1px solid ${statusColor}38`,
              }}
            >
              {deal.status}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6">
            <DetailRow icon={Calendar} label="Date" value={deal.date} />
            <DetailRow icon={Clock} label="Timeline" value={deal.timeline} />
            <DetailRow icon={Building2} label="Acquirer Type" value={deal.acquirerType} />
            {deal.dealValue && (
              <DetailRow icon={TrendingUp} label="Deal Value" value={deal.dealValue} />
            )}
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 pt-3 border-t"
        style={{ borderColor: 'var(--border-subtle)' }}
      >
        <div>
          <div
            className="font-mono text-xs tracking-widest mb-2 uppercase"
            style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em', fontSize: '10px' }}
          >
            Deal Logic
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {deal.dealLogic}
          </p>
        </div>
        <div>
          <div
            className="font-mono text-xs tracking-widest mb-2 uppercase flex items-center gap-1.5"
            style={{ color: 'var(--accent)', letterSpacing: '0.1em', fontSize: '10px' }}
          >
            <Layers size={10} />
            Pattern Evidence
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-primary)' }}>
            {deal.pattern}
          </p>
          {deal.relevance && (
            <p
              className="text-xs leading-relaxed mt-2 pt-2 border-t"
              style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-subtle)' }}
            >
              {deal.relevance}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
