import SectionHeader from './SectionHeader'

/**
 * Shared section shell: outer flex container + SectionHeader + scrollable content area.
 * Handles two layout variants:
 *   - mobileNav=true: mobile-aware (pt-14 lg:pt-0, minHeight 100vh)
 *   - mobileNav=false (default): desktop style (paddingTop 62px)
 */
export default function SectionLayout({
  label,
  headerRight,
  headerProps = {},
  mobileNav = false,
  scrollClass = '',
  children,
}) {
  return (
    <div
      className={mobileNav ? 'flex flex-col h-full pt-14 lg:pt-0' : 'flex flex-col h-full'}
      style={mobileNav ? { minHeight: '100vh' } : { paddingTop: '62px' }}
    >
      <SectionHeader label={label} right={headerRight} {...headerProps} />
      <div className={`flex-1 overflow-y-auto ${scrollClass}`}>
        {children}
      </div>
    </div>
  )
}
