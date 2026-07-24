import { laws } from "./laws";
import { policySections } from "./policy";
import { procedures } from "./procedures";
import { redFlagScenarios } from "./redFlags";
import { faqItems } from "./faq";
import {
  acronyms,
  cecoQualities,
  cecoValueAdds,
  cepFactors,
  dojGuidanceTimeline,
  esgEcMapping,
  globalStandards,
  hqpOverview,
  hqpPrinciples,
  maturityLevels,
  timeline,
} from "./hqp";
import type { SearchDoc } from "./types";

export const searchDocs: SearchDoc[] = [
  ...laws.map((law): SearchDoc => ({
    kind: "law",
    id: law.id,
    title: law.shortName,
    text: [law.name, law.jurisdiction, law.summary, ...law.keyProvisions, ...law.notableFeatures].join(" "),
    path: `/laws/${law.id}`,
  })),
  ...policySections.map((section): SearchDoc => ({
    kind: "policy",
    id: section.id,
    title: section.title,
    text: [...section.body, ...(section.bullets ?? [])].join(" "),
    path: `/policy/${section.id}`,
  })),
  ...procedures.map((proc): SearchDoc => ({
    kind: "procedure",
    id: proc.id,
    title: proc.title,
    text: [proc.purpose, proc.trigger, ...proc.steps.map((s) => `${s.step} ${s.detail}`)].join(" "),
    path: `/procedures/${proc.id}`,
  })),
  ...redFlagScenarios.map((rf): SearchDoc => ({
    kind: "redflag",
    id: rf.id,
    title: `${rf.category}: ${rf.scenario.slice(0, 60)}...`,
    text: [rf.category, rf.scenario, rf.whyItMatters, ...rf.indicators].join(" "),
    path: `/red-flags/${rf.id}`,
  })),
  ...faqItems.map((f): SearchDoc => ({
    kind: "faq",
    id: f.id,
    title: f.question,
    text: `${f.question} ${f.answer}`,
    path: `/faq/${f.id}`,
  })),
  {
    kind: "hqp",
    id: "overview",
    title: "Overview: The HQP Framework",
    text: [hqpOverview.name, ...hqpOverview.keyCharacteristics, ...hqpOverview.fourKeyOutcomes].join(" "),
    path: "/ec-framework/overview",
  },
  ...hqpPrinciples.map((p): SearchDoc => ({
    kind: "hqp",
    id: p.id,
    title: `Principle ${p.number}: ${p.title}`,
    text: [
      p.statement,
      ...p.intent,
      ...p.businessObjectives,
      ...p.supportingObjectives.flatMap((so) => [so.objective, ...so.leadingPractices]),
      ...(p.examAlerts ?? []),
    ].join(" "),
    path: `/ec-framework/${p.id}`,
  })),
  {
    kind: "hqp",
    id: "timeline",
    title: "Historical Timeline & Legislative Foundations",
    text: timeline.map((t) => `${t.year} ${t.title} ${t.detail}`).join(" "),
    path: "/ec-framework/timeline",
  },
  {
    kind: "hqp",
    id: "doj-guidance",
    title: "DOJ Corporate Compliance Guidance Evolution",
    text: [
      ...dojGuidanceTimeline.map((d) => `${d.date} ${d.title} ${d.points.join(" ")}`),
      ...cepFactors,
    ].join(" "),
    path: "/ec-framework/doj-guidance",
  },
  {
    kind: "hqp",
    id: "udamo",
    title: "UDAMO Maturity Model",
    text: maturityLevels.map((l) => `${l.letter} ${l.name} ${l.description}`).join(" "),
    path: "/ec-framework/udamo",
  },
  {
    kind: "hqp",
    id: "ceco",
    title: "The CECO Role",
    text: [...cecoValueAdds, ...cecoQualities.map((q) => `${q.quality} ${q.detail}`)].join(" "),
    path: "/ec-framework/ceco",
  },
  {
    kind: "hqp",
    id: "risk-management",
    title: "Risk Management Approach (ERM / GRC / IRM)",
    text: "Enterprise Risk Management ERM GRC IRM KRI KPI KCI risk value formula radar heat map third-party risk M&A due diligence",
    path: "/ec-framework/risk-management",
  },
  {
    kind: "hqp",
    id: "global-standards",
    title: "Global Standards & ESG",
    text: [
      ...globalStandards.map((s) => `${s.name} ${s.summary}`),
      ...esgEcMapping.flatMap((m) => [...m.esgExamples, ...m.ecExamples]),
    ].join(" "),
    path: "/ec-framework/global-standards",
  },
  {
    kind: "hqp",
    id: "glossary",
    title: "Glossary of Acronyms",
    text: acronyms.map((a) => `${a.acronym} ${a.full}`).join(" "),
    path: "/ec-framework/glossary",
  },
];

export function search(query: string): SearchDoc[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchDocs.filter(
    (doc) => doc.title.toLowerCase().includes(q) || doc.text.toLowerCase().includes(q)
  );
}
