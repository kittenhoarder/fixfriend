// Raidical portal content. Keep section edits local to this file.

export const GAP = {
  today: {
    title: 'TODAY',
    subtitle: 'Manual coordination and evidence rebuilds',
    tint: 'red',
    steps: [
      {
        number: '01',
        title: 'VENUE NOTICE LANDS',
        detail: 'Received via email, portal, PDF, or support contact. No standard format.',
        time: null,
      },
      {
        number: '02',
        title: 'CROSS-TEAM TRIAGE',
        detail: 'Client, vendor, venue, product, engineering, and QA teams all need different answers before the real impact is even clear.',
        time: '2–7 days',
      },
      {
        number: '03',
        title: 'PROTOCOL FRAGMENTATION RESEARCH',
        detail: 'Message dictionaries, custom tags, and the gap between what the spec says and how the flow actually behaves have to be understood manually.',
        time: '1–3 weeks',
      },
      {
        number: '04',
        title: 'TESTING & CERTIFICATION COORDINATION',
        detail: 'Teams rebuild test packs, chase credentials, find bugs mid-stream, and often wait on venue-side fixes before certification can continue.',
        time: '1–6 weeks',
      },
      {
        number: '05',
        title: 'CLIENT ROLLOUT & SUPPORT',
        detail: 'Communication buffers get added because engineering confidence and venue turnaround are uncertain.',
        time: null,
      },
      {
        number: '06',
        title: 'EVIDENCE & COMMUNICATION RECONSTRUCTED',
        detail:
          'Emails, tickets, test logs, and client updates are stitched together after the fact. Incomplete. Expensive. Reputation risk lingers.',
        time: null,
        highlight: true,
      },
    ],
    total: 'SEVERAL WEEKS TO MONTHS FOR A RELIABLE CHANGE PACK',
    risk: 'The slowness is not only engineering implementation. It sits in communication chains, spec-versus-runtime drift, venue-side bug turnaround, and evidence rebuilds after the fact.',
  },
  automated: {
    title: 'WITH FIXFRIEND',
    subtitle: 'Agent-operated change-response control layer',
    tint: 'blue',
    steps: [
      {
        number: '01',
        title: 'CHANGE SIGNALS DETECTED EARLY',
        detail:
          'FIXFriend continuously polls connected workspaces and external sources, fuses weak signals, and opens one canonical change record before teams start inbox hunting.',
        time: null,
      },
      {
        number: '02',
        title: 'IMPACT MAPPED',
        detail: 'FIXFriend links the change to relevant products, configurations, test packs, and downstream client workflows.',
        time: 'Hours',
      },
      {
        number: '03',
        title: 'CHANGE PACK ASSEMBLED',
        detail: 'Engineering-ready requirements, rollout notes, UAT tasks, and channel-ready comms are created in one bounded working bundle.',
        time: '1–2 days',
      },
      {
        number: '04',
        title: 'CERTIFICATION RUNBOOK READY',
        detail: 'Validation steps, dependencies, and evidence expectations are queued before the window compresses.',
        time: '1–3 days',
      },
      {
        number: '05',
        title: 'CLIENT ROLLOUT MATERIALS READY',
        detail: 'Client-facing summaries and internal approval records are generated alongside the technical response.',
        time: null,
      },
      {
        number: '06',
        title: 'CONTINUOUS AUDIT TRAIL',
        detail:
          'Evidence, approvals, and timeline context remain live as the work happens. Teams do not have to reconstruct the story later.',
        time: null,
        highlight: true,
      },
    ],
    total: 'DAYS TO A BOUNDED CHANGE PACK',
    summary:
      'FIXFriend is the workflow-control layer between change notice, human action, certification readiness, and evidence. Bounded cases move faster. Long-running external dependencies become visible earlier and stay structured.',
  },
}
