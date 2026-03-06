import TierGroup from '../acquirers/TierGroup'
import { ACQUIRERS } from '../../data/content'
import SectionHeader from '../ui/SectionHeader'

export default function AcquirersSection() {
  return (
    <div className="flex flex-col h-full pt-14 lg:pt-0" style={{ minHeight: '100vh' }}>
      {/* Section header */}
      <SectionHeader
        label="ACQUIRERS"
        hideOnMobile
        right={(
          <div className="ml-auto hidden md:flex items-center gap-4">
            {[
              { label: 'Fast', dotClass: 'dot-fast', color: 'var(--status-success)' },
              { label: 'Medium', dotClass: 'dot-medium', color: 'var(--status-warning)' },
              { label: 'Slow', dotClass: 'dot-slow', color: 'var(--text-secondary)' },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-1.5">
                <span className={`inline-block w-2 h-2 rounded-full ${item.dotClass}`} />
                <span
                  className="font-mono text-xs"
                  style={{ color: item.color }}
                >
                  {item.label}
                </span>
              </span>
            ))}
            <span
              className="font-mono text-xs ml-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              Decision speed
            </span>
          </div>
        )}
      />

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 lg:p-6">
        {ACQUIRERS.map((group) => (
          <TierGroup key={group.tier} group={group} />
        ))}
      </div>
    </div>
  )
}
