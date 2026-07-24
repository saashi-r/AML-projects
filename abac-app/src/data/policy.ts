import type { PolicySection } from "./types";

export const policySections: PolicySection[] = [
  {
    id: "purpose",
    title: "1. Purpose and Scope",
    body: [
      "This Anti-Bribery and Anti-Corruption (ABAC) Policy sets out the Company's zero-tolerance approach to bribery and corruption in any form. It applies to all directors, officers, employees, and workers of every kind (including temporary and contract staff), as well as to third parties acting on the Company's behalf, such as agents, consultants, distributors, joint venture partners, and suppliers, wherever they operate in the world.",
      "The Policy applies to interactions with government officials, state-owned enterprise employees, private-sector counterparties, and any other person, without exception for company size, deal size, or local custom.",
    ],
  },
  {
    id: "statement",
    title: "2. Policy Statement",
    body: [
      "The Company prohibits bribery and corruption in all its dealings, in every country in which it operates, whether involving a public official or a private individual or business. This applies regardless of whether local law or practice appears to tolerate such conduct — the Company's standard is the strictest applicable law, wherever that is higher than local norms.",
    ],
    bullets: [
      "No employee or third party may offer, promise, give, request, agree to receive, or accept a bribe, kickback, or other improper advantage.",
      "This Policy applies equally to dealings with government officials and private commercial counterparties.",
      "Compliance with this Policy takes priority over local custom, sales targets, or deal timelines.",
    ],
  },
  {
    id: "definitions",
    title: "3. Key Definitions",
    body: [
      "Understanding these terms is essential to recognizing and avoiding prohibited conduct.",
    ],
    bullets: [
      "Bribery: offering, promising, giving, or authorizing anything of value to improperly influence a decision or obtain/retain a business advantage.",
      "Corruption: the abuse of entrusted power or position for private gain, encompassing bribery, extortion, embezzlement, and abuse of function.",
      "Facilitation Payment: a small, unofficial payment made to a low-level official to secure or speed up a routine government action (e.g., processing a visa). Prohibited under this Policy even where narrow legal exceptions might exist.",
      "Kickback: a portion of a payment returned, often covertly, in exchange for having facilitated a transaction.",
      "Government Official: any officer or employee of a government, government-owned or -controlled entity, public international organization, or political party/candidate — including at any level, foreign or domestic.",
      "Politically Exposed Person (PEP): an individual who holds, or has held, a prominent public position, or their close family members and associates, warranting enhanced due diligence.",
      "Anything of Value: not limited to cash — includes gifts, meals, travel, entertainment, job offers, internships, charitable donations, sponsorships, and preferential treatment.",
    ],
  },
  {
    id: "gifts",
    title: "4. Gifts, Meals, and Hospitality",
    body: [
      "Modest, infrequent, and transparent gifts and hospitality that are customary in normal business relationships may be permitted, but never where intended or perceived as an attempt to improperly influence a decision.",
    ],
    bullets: [
      "All gifts and hospitality involving a government official must be pre-approved by Compliance regardless of value.",
      "Cash or cash equivalents (gift cards, vouchers) are never permitted, under any circumstances.",
      "Gifts and hospitality must be reasonable in value, infrequent, and given/received openly — never solicited.",
      "Company-defined monetary thresholds trigger mandatory disclosure and/or pre-approval (see the Gift & Hospitality Approval Procedure).",
      "Gifts and hospitality must be accurately recorded in the Company's books with a clear business purpose.",
    ],
  },
  {
    id: "facilitation",
    title: "5. Facilitation Payments",
    body: [
      "The Company prohibits facilitation payments of any amount, in any country, even where a narrow exemption may exist under local or foreign law. If an employee is pressured to make such a payment, or faces a credible threat to personal safety if they refuse, they must not pay, must document the incident, and must report it to Compliance and, where relevant, to security/legal immediately.",
    ],
  },
  {
    id: "third-parties",
    title: "6. Third-Party Intermediaries",
    body: [
      "Bribery risk is frequently transferred, not eliminated, through the use of agents, consultants, distributors, resellers, joint venture partners, and other intermediaries. The Company is liable for bribery committed by such third parties acting on its behalf, so all third parties who interact with government officials or make sales on the Company's behalf must undergo risk-based due diligence before engagement and periodically thereafter.",
    ],
    bullets: [
      "Risk-based due diligence scaled to the third party's role, country risk, and government interaction level (see Third-Party Due Diligence Procedure).",
      "Written contracts must include ABAC representations, warranties, audit rights, and termination rights for violations.",
      "Commission and fee structures must be reasonable, documented, and tied to legitimate services actually rendered.",
      "No success fees or commissions may be contingent on obtaining a specific government approval or decision.",
    ],
  },
  {
    id: "political",
    title: "7. Political Contributions and Charitable Donations",
    body: [
      "Political contributions and charitable or sponsorship donations can be used to disguise bribes and are subject to heightened scrutiny.",
    ],
    bullets: [
      "No corporate political contributions may be made without prior approval from Legal and Compliance and, where applicable, disclosure under local political-finance law.",
      "Charitable donations and sponsorships must go to legitimate, vetted organizations, never at the request of a government official tied to a pending decision, and must be properly recorded.",
    ],
  },
  {
    id: "conflicts",
    title: "8. Conflicts of Interest",
    body: [
      "Employees must disclose any personal, financial, or family relationship that could reasonably create — or appear to create — a conflict of interest with a customer, supplier, agent, competitor, or government counterparty, including with respect to hiring decisions involving relatives of officials or customers.",
    ],
  },
  {
    id: "records",
    title: "9. Books, Records, and Internal Controls",
    body: [
      "All transactions must be accurately and completely recorded in the Company's books and records. No undisclosed or unrecorded funds, accounts, or assets may be established for any purpose. Employees must never falsify records or mischaracterize the nature of a payment to obscure its true purpose.",
    ],
  },
  {
    id: "training",
    title: "10. Training and Communication",
    body: [
      "All employees receive ABAC training upon onboarding and on a recurring basis thereafter, with enhanced and more frequent training for higher-risk roles (sales, procurement, government affairs, finance). Certification of understanding and compliance is required annually.",
    ],
  },
  {
    id: "reporting",
    title: "11. Reporting Concerns and Non-Retaliation",
    body: [
      "Employees and third parties are expected to promptly report suspected or actual violations of this Policy through their manager, Compliance, Legal, or the confidential/anonymous whistleblower reporting channel. The Company strictly prohibits retaliation against anyone who reports a concern in good faith, even if the concern is later not substantiated.",
    ],
  },
  {
    id: "consequences",
    title: "12. Consequences of Violation",
    body: [
      "Violations of this Policy may result in disciplinary action up to and including termination of employment, termination of third-party contracts, and referral to law enforcement, in addition to the potential for significant civil and criminal liability for both the Company and the individuals involved.",
    ],
  },
  {
    id: "roles",
    title: "13. Roles and Responsibilities",
    body: [
      "Effective compliance requires clear ownership across the organization.",
    ],
    bullets: [
      "Board / Audit Committee: oversight of the ABAC program's effectiveness and resourcing.",
      "Chief Compliance Officer: owns the Policy, approves high-risk gifts/third parties, oversees investigations and reporting.",
      "People Managers: model compliant behavior, escalate concerns raised by their teams, and support required training completion.",
      "All Employees and Third Parties: understand and comply with this Policy, complete required training, and report concerns.",
    ],
  },
];
