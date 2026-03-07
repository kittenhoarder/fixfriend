// Full-graph Mermaid diagram (diagram only, no %%{init}%%).
// Source of truth: mermaidforcanvas.md — keep in sync when that file changes.
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
trigger for all
connected firms"])
  end

  subgraph DEMAND["  DEMAND SIDE  "]
    TF(["EU Trading Firms
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
  FIX -->|"Triggers mandatory compliance cycle
2–4 weeks · manual · recurring"| TF
  TF -->|"Compliance evidence
reconstructed retroactively"| RG
  TF -.->|"Orders & trades
via certified gateway"| EX
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
Not compliance layer"])
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
No automation layer"])
  FF(["MISSING LAYER
Automated change-control
& compliance evidence
→ FIXFriend (EU Focus)"])
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
class EX,TF,RG,OMS,CONN,DATA chainNode
class FIX triggerNode
class CONSULT,TEST riskNode
class FF fixNode
class V1,V2,V3,V4,X1,X2,X3,X4,T1,T2,T3,T4 acquirerNode
`
