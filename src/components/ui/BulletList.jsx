/**
 * Shared bullet list component.
 * Replaces local BulletList definitions in ProductSection and LeanExitSection.
 */
export default function BulletList({ items, color = 'var(--accent)' }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="mt-1.5 inline-block h-2 w-2 flex-shrink-0"
            style={{ backgroundColor: color }}
          />
          <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}
