/**
 * Centralized tone → style map.
 * Each entry provides borderColor, backgroundColor, and color (the accent/text color for that tone).
 * Import this instead of redefining local tone maps in components.
 */
export const TONE_STYLES = {
  success: {
    borderColor: 'var(--status-success-border)',
    backgroundColor: 'var(--status-success-soft)',
    color: 'var(--status-success)',
  },
  warning: {
    borderColor: 'var(--status-warning-border)',
    backgroundColor: 'var(--status-warning-soft)',
    color: 'var(--status-warning)',
  },
  info: {
    borderColor: 'var(--accent-border-soft)',
    backgroundColor: 'var(--accent-softer)',
    color: 'var(--accent)',
  },
  danger: {
    borderColor: 'var(--status-danger-border)',
    backgroundColor: 'var(--status-danger-soft)',
    color: 'var(--status-danger)',
  },
  accent: {
    borderColor: 'var(--accent-border-soft)',
    backgroundColor: 'var(--accent-softer)',
    color: 'var(--accent)',
  },
  neutral: {
    borderColor: 'var(--border-subtle)',
    backgroundColor: 'var(--surface)',
    color: 'var(--text-secondary)',
  },
}
