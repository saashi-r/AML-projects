import type { RedFlagScenario } from "./types";

export const redFlagScenarios: RedFlagScenario[] = [
  {
    id: "agent-commission",
    category: "Third Parties",
    scenario: "A sales agent who helped win a government tender requests that their commission be paid to a personal bank account in a third country, rather than the company account named in the contract.",
    whyItMatters: "Unusual payment routing is one of the most common mechanisms used to disguise the true recipient of a bribe intended for a government decision-maker.",
    indicators: [
      "Payment requested to an account not matching the contracting entity.",
      "Destination country unrelated to where services were performed.",
      "Urgency or pressure to process payment quickly and without questions.",
    ],
  },
  {
    id: "shell-consultant",
    category: "Third Parties",
    scenario: "A newly engaged 'local consultant' has no visible office, website, or other clients, and cannot clearly explain what services it will perform to justify its fee.",
    whyItMatters: "Shell entities with no real operations are a classic conduit for funneling bribes while creating a paper trail that looks like a legitimate service fee.",
    indicators: [
      "No verifiable business substance or track record.",
      "Vague or generic description of deliverables in the contract.",
      "Fee disproportionate to the apparent scope of work.",
    ],
  },
  {
    id: "expedited-permit",
    category: "Government Interactions",
    scenario: "A customs official informally suggests that a shipment will clear faster if a 'processing fee' is paid to him directly, in cash, rather than through the official tariff schedule.",
    whyItMatters: "This is a textbook facilitation payment request; paying it — even a small amount — normalizes corruption and is prohibited under this Policy and many national laws (e.g., UK Bribery Act, Canada's CFPOA).",
    indicators: [
      "Request for cash paid directly to an individual rather than an official channel.",
      "No receipt or formal documentation offered.",
      "Vague reference to 'speeding things up' outside normal procedure.",
    ],
  },
  {
    id: "lavish-gift",
    category: "Gifts & Hospitality",
    scenario: "Ahead of a licensing decision, a regulator's family member is offered an all-expenses-paid vacation described internally as a 'relationship-building trip.'",
    whyItMatters: "Gifts and hospitality timed near a pending official decision, or extended to an official's family, are a common way to disguise a bribe as a courtesy.",
    indicators: [
      "Timing coincides with a pending approval, license, or contract decision.",
      "Benefit extended to a family member rather than the official directly.",
      "Value is lavish relative to the business relationship and local norms.",
    ],
  },
  {
    id: "round-number-invoice",
    category: "Payments & Records",
    scenario: "An intermediary's invoice is for a suspiciously round number with a generic description such as 'consulting services rendered,' with no supporting timesheets, deliverables, or correspondence.",
    whyItMatters: "Vague, unsupported invoices are frequently used to disguise the true purpose of a payment and to create a false appearance of legitimacy in the books and records.",
    indicators: [
      "Round-number invoice amounts with no itemization.",
      "No supporting evidence of work actually performed.",
      "Repeated similar invoices from the same third party with little variation.",
    ],
  },
  {
    id: "job-offer-relative",
    category: "Government Interactions",
    scenario: "During a pending contract negotiation with a state-owned enterprise, a hiring manager is asked to consider the decision-maker's relative for an open internship, despite the relative not meeting standard qualifications.",
    whyItMatters: "Offering employment, internships, or other opportunities to relatives of officials during an active deal is a well-recognized bribery typology (sometimes called 'nepotism hiring' or 'jobs for favors').",
    indicators: [
      "Hiring request originates from or is linked to an active counterparty decision-maker.",
      "Candidate does not meet normal qualification standards.",
      "Timing coincides with a pending business decision involving that official.",
    ],
  },
  {
    id: "charity-pressure",
    category: "Political & Charitable",
    scenario: "A government official suggests that a pending permit approval would be viewed favorably if the company made a donation to a specific charity that the official personally chairs.",
    whyItMatters: "Donations directed by an official, especially to organizations they control, are a common bribery disguise, since the money benefits the official's interests indirectly.",
    indicators: [
      "Donation recommended or requested by the official who controls the pending decision.",
      "Recipient organization is controlled by, or closely tied to, that official.",
      "No standard charitable due diligence performed before the request.",
    ],
  },
  {
    id: "refuses-audit-rights",
    category: "Third Parties",
    scenario: "A distributor pushes back strongly on standard ABAC audit-rights and termination-for-cause clauses during contract negotiation, insisting they are 'unnecessary' for a trusted partner.",
    whyItMatters: "Reluctance to accept standard compliance terms can indicate an intent to operate outside visibility of the company's controls.",
    indicators: [
      "Resistance to audit rights, ABAC representations, or compliance certifications.",
      "Insistence on non-standard contract terms without clear commercial rationale.",
      "Pressure to finalize the deal quickly, bypassing normal review.",
    ],
  },
];
