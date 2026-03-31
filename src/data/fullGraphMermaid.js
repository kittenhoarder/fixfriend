export const STORY_GRAPH_CLUSTER_MEMBERS = {
  ENV: ['RULES', 'EXCHANGES'],
  INGRESS: ['SPEC_PORTALS', 'EMAIL_DIGESTS', 'WEBSITES', 'SUPPORT_THREADS', 'CHANGE_SIGNAL'],
  CHAIN: [
    'MANUAL_HANDOFFS',
    'VENDORS',
    'CLIENTS',
    'REGULATORS',
    'DELAYS',
    'BROKEN_HANDOFFS',
    'SUPPORT_FIRES',
    'SAFE_RELEASE_DRAG',
    'RETRO_EVIDENCE',
  ],
  PRODUCT: [
    'FIXFRIEND',
    'CUSTOMER_CONTEXT',
    'TEST_UAT_PACK',
    'NORMAL_TOOLS',
    'CHAT_APPROVALS',
    'AUDIT_EVIDENCE',
    'NEVER_PROD',
  ],
  ACQUIRERS: ['BROADRIDGE', 'TT', 'ION', 'SIX'],
}

export const STORY_GRAPH_NODE_KEYS = [...new Set(Object.values(STORY_GRAPH_CLUSTER_MEMBERS).flat())]

export const STORY_GRAPH_EDGE_ALIASES = {
  RULES_TO_SIGNAL: 'L_RULES_CHANGE_SIGNAL',
  EXCHANGES_TO_SIGNAL: 'L_EXCHANGES_CHANGE_SIGNAL',
  SPEC_PORTALS_TO_SIGNAL: 'L_SPEC_PORTALS_CHANGE_SIGNAL',
  EMAIL_DIGESTS_TO_SIGNAL: 'L_EMAIL_DIGESTS_CHANGE_SIGNAL',
  WEBSITES_TO_SIGNAL: 'L_WEBSITES_CHANGE_SIGNAL',
  SUPPORT_THREADS_TO_SIGNAL: 'L_SUPPORT_THREADS_CHANGE_SIGNAL',
  SIGNAL_TO_MANUAL: 'L_CHANGE_SIGNAL_MANUAL_HANDOFFS',
  MANUAL_TO_VENDORS: 'L_MANUAL_HANDOFFS_VENDORS',
  VENDORS_TO_CLIENTS: 'L_VENDORS_CLIENTS',
  CLIENTS_TO_REGULATORS: 'L_CLIENTS_REGULATORS',
  MANUAL_TO_DELAYS: 'L_MANUAL_HANDOFFS_DELAYS',
  MANUAL_TO_BROKEN_HANDOFFS: 'L_MANUAL_HANDOFFS_BROKEN_HANDOFFS',
  CLIENTS_TO_SUPPORT_FIRES: 'L_CLIENTS_SUPPORT_FIRES',
  CLIENTS_TO_SAFE_RELEASE_DRAG: 'L_CLIENTS_SAFE_RELEASE_DRAG',
  CLIENTS_TO_RETRO_EVIDENCE: 'L_CLIENTS_RETRO_EVIDENCE',
  REGULATORS_TO_RETRO_EVIDENCE: 'L_REGULATORS_RETRO_EVIDENCE',
  SPEC_PORTALS_TO_FIXFRIEND: 'L_SPEC_PORTALS_FIXFRIEND',
  EMAIL_DIGESTS_TO_FIXFRIEND: 'L_EMAIL_DIGESTS_FIXFRIEND',
  WEBSITES_TO_FIXFRIEND: 'L_WEBSITES_FIXFRIEND',
  SUPPORT_THREADS_TO_FIXFRIEND: 'L_SUPPORT_THREADS_FIXFRIEND',
  SIGNAL_TO_FIXFRIEND: 'L_CHANGE_SIGNAL_FIXFRIEND',
  FIXFRIEND_TO_CONTEXT: 'L_FIXFRIEND_CUSTOMER_CONTEXT',
  CONTEXT_TO_PACK: 'L_CUSTOMER_CONTEXT_TEST_UAT_PACK',
  PACK_TO_TOOLS: 'L_TEST_UAT_PACK_NORMAL_TOOLS',
  TOOLS_TO_CHAT: 'L_NORMAL_TOOLS_CHAT_APPROVALS',
  PACK_TO_AUDIT: 'L_TEST_UAT_PACK_AUDIT_EVIDENCE',
  CHAT_TO_AUDIT: 'L_CHAT_APPROVALS_AUDIT_EVIDENCE',
  NEVER_PROD_TO_PACK: 'L_NEVER_PROD_TEST_UAT_PACK',
  FIXFRIEND_TO_BROADRIDGE: 'L_FIXFRIEND_BROADRIDGE',
  FIXFRIEND_TO_TT: 'L_FIXFRIEND_TT',
  FIXFRIEND_TO_ION: 'L_FIXFRIEND_ION',
  FIXFRIEND_TO_SIX: 'L_FIXFRIEND_SIX',
}

export const STORY_GRAPH_EDGE_NODES = {
  RULES_TO_SIGNAL: ['RULES', 'CHANGE_SIGNAL'],
  EXCHANGES_TO_SIGNAL: ['EXCHANGES', 'CHANGE_SIGNAL'],
  SPEC_PORTALS_TO_SIGNAL: ['SPEC_PORTALS', 'CHANGE_SIGNAL'],
  EMAIL_DIGESTS_TO_SIGNAL: ['EMAIL_DIGESTS', 'CHANGE_SIGNAL'],
  WEBSITES_TO_SIGNAL: ['WEBSITES', 'CHANGE_SIGNAL'],
  SUPPORT_THREADS_TO_SIGNAL: ['SUPPORT_THREADS', 'CHANGE_SIGNAL'],
  SIGNAL_TO_MANUAL: ['CHANGE_SIGNAL', 'MANUAL_HANDOFFS'],
  MANUAL_TO_VENDORS: ['MANUAL_HANDOFFS', 'VENDORS'],
  VENDORS_TO_CLIENTS: ['VENDORS', 'CLIENTS'],
  CLIENTS_TO_REGULATORS: ['CLIENTS', 'REGULATORS'],
  MANUAL_TO_DELAYS: ['MANUAL_HANDOFFS', 'DELAYS'],
  MANUAL_TO_BROKEN_HANDOFFS: ['MANUAL_HANDOFFS', 'BROKEN_HANDOFFS'],
  CLIENTS_TO_SUPPORT_FIRES: ['CLIENTS', 'SUPPORT_FIRES'],
  CLIENTS_TO_SAFE_RELEASE_DRAG: ['CLIENTS', 'SAFE_RELEASE_DRAG'],
  CLIENTS_TO_RETRO_EVIDENCE: ['CLIENTS', 'RETRO_EVIDENCE'],
  REGULATORS_TO_RETRO_EVIDENCE: ['REGULATORS', 'RETRO_EVIDENCE'],
  SPEC_PORTALS_TO_FIXFRIEND: ['SPEC_PORTALS', 'FIXFRIEND'],
  EMAIL_DIGESTS_TO_FIXFRIEND: ['EMAIL_DIGESTS', 'FIXFRIEND'],
  WEBSITES_TO_FIXFRIEND: ['WEBSITES', 'FIXFRIEND'],
  SUPPORT_THREADS_TO_FIXFRIEND: ['SUPPORT_THREADS', 'FIXFRIEND'],
  SIGNAL_TO_FIXFRIEND: ['CHANGE_SIGNAL', 'FIXFRIEND'],
  FIXFRIEND_TO_CONTEXT: ['FIXFRIEND', 'CUSTOMER_CONTEXT'],
  CONTEXT_TO_PACK: ['CUSTOMER_CONTEXT', 'TEST_UAT_PACK'],
  PACK_TO_TOOLS: ['TEST_UAT_PACK', 'NORMAL_TOOLS'],
  TOOLS_TO_CHAT: ['NORMAL_TOOLS', 'CHAT_APPROVALS'],
  PACK_TO_AUDIT: ['TEST_UAT_PACK', 'AUDIT_EVIDENCE'],
  CHAT_TO_AUDIT: ['CHAT_APPROVALS', 'AUDIT_EVIDENCE'],
  NEVER_PROD_TO_PACK: ['NEVER_PROD', 'TEST_UAT_PACK'],
  FIXFRIEND_TO_BROADRIDGE: ['FIXFRIEND', 'BROADRIDGE'],
  FIXFRIEND_TO_TT: ['FIXFRIEND', 'TT'],
  FIXFRIEND_TO_ION: ['FIXFRIEND', 'ION'],
  FIXFRIEND_TO_SIX: ['FIXFRIEND', 'SIX'],
}

export const STORY_GRAPH_MERMAID = `graph TD

subgraph ENV["MARKET PRESSURE"]
  direction LR
  RULES["Rules & controls"]
  EXCHANGES["Exchanges & venues"]
end

subgraph INGRESS["CHANGE INGRESS"]
  direction LR
  SPEC_PORTALS["Spec portals"]
  EMAIL_DIGESTS["Email digests"]
  WEBSITES["Websites"]
  SUPPORT_THREADS["Support threads"]
  CHANGE_SIGNAL["Change signal"]
end

subgraph CHAIN["WHO GETS HIT"]
  direction TB
  MANUAL_HANDOFFS["Manual response"]
  VENDORS["Trading tech vendors"]
  CLIENTS["Connected firms"]
  REGULATORS["Regulators"]
  DELAYS["Delay"]
  BROKEN_HANDOFFS["Broken handoffs"]
  SUPPORT_FIRES["Support fires"]
  SAFE_RELEASE_DRAG["Slow safe release"]
  RETRO_EVIDENCE["Retro evidence"]
end

subgraph PRODUCT["FIXFRIEND AUTOPILOT"]
  direction TB
  FIXFRIEND["FIXFriend autopilot"]
  CUSTOMER_CONTEXT["Local system context"]
  TEST_UAT_PACK["Test / UAT work pack"]
  NORMAL_TOOLS["Normal tools"]
  CHAT_APPROVALS["Chat approvals"]
  AUDIT_EVIDENCE["Audit evidence"]
  NEVER_PROD["Never prod"]
end

subgraph ACQUIRERS["STRATEGIC BUYERS"]
  direction LR
  BROADRIDGE["Broadridge"]
  TT["Trading Technologies"]
  ION["ION"]
  SIX["SIX"]
end

RULES --> CHANGE_SIGNAL
EXCHANGES --> CHANGE_SIGNAL
SPEC_PORTALS --> CHANGE_SIGNAL
EMAIL_DIGESTS --> CHANGE_SIGNAL
WEBSITES --> CHANGE_SIGNAL
SUPPORT_THREADS --> CHANGE_SIGNAL

CHANGE_SIGNAL --> MANUAL_HANDOFFS
MANUAL_HANDOFFS --> VENDORS
VENDORS --> CLIENTS
CLIENTS --> REGULATORS
MANUAL_HANDOFFS -.-> DELAYS
MANUAL_HANDOFFS -.-> BROKEN_HANDOFFS
CLIENTS -.-> SUPPORT_FIRES
CLIENTS -.-> SAFE_RELEASE_DRAG
CLIENTS -.-> RETRO_EVIDENCE
REGULATORS -.-> RETRO_EVIDENCE

SPEC_PORTALS --> FIXFRIEND
EMAIL_DIGESTS --> FIXFRIEND
WEBSITES --> FIXFRIEND
SUPPORT_THREADS --> FIXFRIEND
CHANGE_SIGNAL --> FIXFRIEND
FIXFRIEND --> CUSTOMER_CONTEXT
CUSTOMER_CONTEXT --> TEST_UAT_PACK
TEST_UAT_PACK --> NORMAL_TOOLS
NORMAL_TOOLS --> CHAT_APPROVALS
TEST_UAT_PACK --> AUDIT_EVIDENCE
CHAT_APPROVALS --> AUDIT_EVIDENCE
NEVER_PROD -.-> TEST_UAT_PACK

FIXFRIEND --> BROADRIDGE
FIXFRIEND --> TT
FIXFRIEND --> ION
FIXFRIEND --> SIX

classDef envNode fill:#f1f5f9,stroke:#94a3b8,stroke-width:1.5px,color:#334155,rx:8
classDef ingressNode fill:#ffffff,stroke:#94a3b8,stroke-width:1.5px,color:#0f172a,rx:8
classDef signalNode fill:#fef3c7,stroke:#f59e0b,stroke-width:2.5px,color:#78350f,rx:8
classDef chainNode fill:#e2e8f0,stroke:#94a3b8,stroke-width:1.5px,color:#0f172a,rx:8
classDef painNode fill:#fff1f2,stroke:#fca5a5,stroke-width:1.5px,color:#9f1239,rx:8
classDef productNode fill:#dbeafe,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a,rx:8
classDef controlNode fill:#dcfce7,stroke:#22c55e,stroke-width:2px,color:#14532d,rx:8
classDef buyerNode fill:#ffedd5,stroke:#f97316,stroke-width:2px,color:#9a3412,rx:8
classDef boundaryNode fill:#111827,stroke:#64748b,stroke-width:2px,color:#f8fafc,rx:8

class RULES,EXCHANGES envNode
class SPEC_PORTALS,EMAIL_DIGESTS,WEBSITES,SUPPORT_THREADS ingressNode
class CHANGE_SIGNAL signalNode
class MANUAL_HANDOFFS,VENDORS,CLIENTS,REGULATORS chainNode
class DELAYS,BROKEN_HANDOFFS,SUPPORT_FIRES,SAFE_RELEASE_DRAG,RETRO_EVIDENCE painNode
class FIXFRIEND,CUSTOMER_CONTEXT,NORMAL_TOOLS,AUDIT_EVIDENCE productNode
class TEST_UAT_PACK,CHAT_APPROVALS controlNode
class NEVER_PROD boundaryNode
class BROADRIDGE,TT,ION,SIX buyerNode
`

export const FULL_GRAPH_MERMAID = `graph TD

subgraph ENV["  🏛  EU REGULATORY WAVE (2026-2027)"]
  direction LR
  E1(["ESMA RTS 6 / MiFIR Review
Algorithmic trading controls
Continuous evidence obligation
2026 enforcement priorities"])
  E2(["EU AI ACT
High-risk AI systems
Entering force 2026-2027
AI governance & documentation"])
  E3(["DORA
Digital Operational Resilience Act
ICT risk management
Incident reporting"])
  E4(["ESMA 2026 Work Programme
Consolidated Tape Providers
Green Bond verifiers
Critical third-party oversight"])
end

subgraph CHAIN["  ⚡  EUROPEAN MARKET CHAIN"]
  direction LR

  subgraph PROD["  SUPPLY SIDE  "]
    EX(["EU Exchanges & Venues
Eurex · Deutsche Börse
Euronext · LSEG · Nasdaq Nordic
SIX · BME · Cboe Europe
Publish FIX & native spec updates
continuously"])
  end

  subgraph MID["  TRIGGER  "]
    FIX(["📄 Protocol / Rule Update
Spec delta published
⚠ Mandatory compliance
trigger for connected
vendors & firms"])
  end

  subgraph VENDL["  VENDOR LAYER  "]
    VD(["Trading Technology Vendors
OMS / EMS vendors
Managed FIX providers
Selected venues / adjacencies
Absorb change-response
for downstream clients"])
  end

  subgraph DEMAND["  DEMAND SIDE  "]
    TF(["End Clients / Connected Firms
~2,500 entities
Investment banks
Broker-dealers
Market makers
Prop trading · Hedge funds
Asset managers"])
  end

  subgraph OVER["  OVERSIGHT  "]
    RG(["EU Regulators
ESMA · BaFin · CONSOB
AMF · FCA · CSSF
Request evidence
Conduct examinations
AI-enabled supervision"])
  end

  EX -->|"Publishes spec update"| FIX
  FIX -->|"Forces triage, change pack
& certification response"| VD
  VD -->|"Drives rollout & certification
for downstream clients"| TF
  TF -->|"Compliance evidence
reconstructed retroactively"| RG
  TF -.->|"Client escalations &
rollout pressure"| VD
  RG -.->|"Audit requests &
formal examinations"| TF
end

subgraph ACQUIRERS["  🎯  ACQUIRER UNIVERSE (€100M-€500M+ Revenue)"]
  direction TB

  subgraph VEND["VENDORS (Trading Infrastructure)"]
    V1(["ION Markets
Private · €1B+ revenue
Missing compliance layer"])
    V2(["Broadridge
Public (NYSE:BR) · $5B+ revenue
Bought CQG Feb 2026
Still missing evidence layer"])
    V3(["SS&C Technologies
Public (NASDAQ:SSNC) · $5B+ revenue
Acquisitive (Curo, Nov 2025)"])
    V4(["Murex
Private (family-owned) · €500M+
MX.3 platform needs compliance"])
  end

  subgraph EXCH["EXCHANGE GROUPS"]
    X1(["Deutsche Börse
Public · €4B+ revenue
Member compliance tools"])
    X2(["Euronext
Public · €1.5B+ revenue
Pan-European footprint"])
    X3(["SIX Group
Private (Swiss banks) · ~CHF 1.6B revenue
Acquired Aquis (July 2025)"])
    X4(["Nasdaq Nordic
Public · ~$6B revenue"])
  end

  subgraph TECH["FINTECH / WEALTH TECH"]
    T1(["IRESS
ASX:IRE · ~AU$600M revenue
Actively in play (Feb 2026)"])
    T2(["Objectway
PE-backed (Cinven) · €100-200M
Cinven investment closed Nov 2025"])
    T3(["SimCorp
Deutsche Börse-owned · €500M+
Wealth/asset mgmt compliance"])
    T4(["Arcesium
JP Morgan-backed · Private
Acquired Limina (Feb 2026)"])
  end
end

subgraph SUPPORT["  🔧  SUPPORTING MARKETS"]
  direction LR
  OMS(["OMS / EMS Vendors
ION · Bloomberg · Fidessa
Own execution stack
Not change-response workflow"])
  CONN(["Connectivity Providers
BT Radianz · TNS · IPC
Manage network layer
Not protocol change mgmt"])
  DATA(["Market Data Platforms
Bloomberg · Refinitiv
Own data & workflow
Not change control"])
  CONSULT(["Compliance Consultants
Manual evidence support
Expensive · Slow · Retroactive"])
  TEST(["UAT / Testing Services
  Manual test management
  Certification support
  No workflow ownership"])
  FF(["MISSING LAYER
  Autonomous minor changes
  Major-change escalation
  Client-ready evidence
  Expoty context core
  → FIXFriend"])
end

ENV -->|"Mandate AI governance, resilience testing
& continuous evidence"| CHAIN
CHAIN -->|"Creates demand for automation"| SUPPORT
SUPPORT -->|"Infrastructure & services enable"| CHAIN
CHAIN -->|"Creates strategic need"| ACQUIRERS
ACQUIRERS -->|"Acquire to complete stack"| FF

classDef envNode fill:#f1f5f9,stroke:#94a3b8,stroke-width:1.5px,color:#334155,rx:8
classDef chainNode fill:#ffffff,stroke:#94a3b8,stroke-width:1.5px,color:#1e293b,rx:8
classDef triggerNode fill:#fef3c7,stroke:#f59e0b,stroke-width:2.5px,color:#78350f,rx:8
classDef riskNode fill:#fff1f2,stroke:#fca5a5,stroke-width:1.5px,color:#9f1239,rx:8
classDef fixNode fill:#0ea5e9,stroke:#0369a1,stroke-width:3px,color:#ffffff,rx:8
classDef acquirerNode fill:#dcfce7,stroke:#22c55e,stroke-width:2px,color:#14532d,rx:8

class E1,E2,E3,E4 envNode
class EX,VD,TF,RG,OMS,CONN,DATA chainNode
class FIX triggerNode
class CONSULT,TEST riskNode
class FF fixNode
class V1,V2,V3,V4,X1,X2,X3,X4,T1,T2,T3,T4 acquirerNode
`
