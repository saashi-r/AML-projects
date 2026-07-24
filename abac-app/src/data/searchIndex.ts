import { laws } from "./laws";
import { policySections } from "./policy";
import { procedures } from "./procedures";
import { redFlagScenarios } from "./redFlags";
import { faqItems } from "./faq";
import type { SearchDoc } from "./types";

export const searchDocs: SearchDoc[] = [
  ...laws.map((law): SearchDoc => ({
    kind: "law",
    id: law.id,
    title: law.shortName,
    text: [law.name, law.jurisdiction, law.summary, ...law.keyProvisions, ...law.notableFeatures].join(" "),
    path: `/laws#${law.id}`,
  })),
  ...policySections.map((section): SearchDoc => ({
    kind: "policy",
    id: section.id,
    title: section.title,
    text: [...section.body, ...(section.bullets ?? [])].join(" "),
    path: `/policy#${section.id}`,
  })),
  ...procedures.map((proc): SearchDoc => ({
    kind: "procedure",
    id: proc.id,
    title: proc.title,
    text: [proc.purpose, proc.trigger, ...proc.steps.map((s) => `${s.step} ${s.detail}`)].join(" "),
    path: `/procedures#${proc.id}`,
  })),
  ...redFlagScenarios.map((rf): SearchDoc => ({
    kind: "redflag",
    id: rf.id,
    title: `${rf.category}: ${rf.scenario.slice(0, 60)}...`,
    text: [rf.category, rf.scenario, rf.whyItMatters, ...rf.indicators].join(" "),
    path: `/red-flags#${rf.id}`,
  })),
  ...faqItems.map((f): SearchDoc => ({
    kind: "faq",
    id: f.id,
    title: f.question,
    text: `${f.question} ${f.answer}`,
    path: `/faq#${f.id}`,
  })),
];

export function search(query: string): SearchDoc[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchDocs.filter(
    (doc) => doc.title.toLowerCase().includes(q) || doc.text.toLowerCase().includes(q)
  );
}
