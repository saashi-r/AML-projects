export interface Law {
  id: string;
  name: string;
  shortName: string;
  jurisdiction: string;
  yearEnacted: string;
  enforcementBodies: string[];
  extraterritorial: boolean;
  summary: string;
  keyProvisions: string[];
  penalties: {
    corporate: string;
    individual: string;
  };
  notableFeatures: string[];
}

export interface PolicySection {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
}

export interface ProcedureStep {
  step: string;
  detail: string;
}

export interface Procedure {
  id: string;
  title: string;
  purpose: string;
  trigger: string;
  owner: string;
  steps: ProcedureStep[];
  redFlagsToEscalate?: string[];
}

export interface RedFlagScenario {
  id: string;
  category: string;
  scenario: string;
  whyItMatters: string;
  indicators: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export type SearchableKind = "law" | "policy" | "procedure" | "redflag" | "faq";

export interface SearchDoc {
  kind: SearchableKind;
  id: string;
  title: string;
  text: string;
  path: string;
}
