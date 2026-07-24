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

export interface SupportingObjective {
  objective: string;
  leadingPractices: string[];
}

export interface HqpPrinciple {
  id: string;
  number: number;
  title: string;
  statement: string;
  intent: string[];
  businessObjectives: string[];
  supportingObjectives: SupportingObjective[];
  examAlerts?: string[];
}

export interface TimelineEvent {
  id: string;
  era: string;
  year: string;
  title: string;
  detail: string;
  citation?: string;
}

export interface DojGuidanceUpdate {
  date: string;
  title: string;
  points: string[];
}

export interface MaturityLevel {
  id: string;
  letter: string;
  name: string;
  description: string;
}

export interface CecoQuality {
  quality: string;
  detail: string;
}

export interface GlobalStandard {
  id: string;
  name: string;
  year: string;
  summary: string;
}

export interface RiskIndicator {
  type: string;
  name: string;
  definition: string;
  example: string;
}

export interface AcronymEntry {
  acronym: string;
  full: string;
}

export type SearchableKind = "law" | "policy" | "procedure" | "redflag" | "faq" | "hqp";

export interface SearchDoc {
  kind: SearchableKind;
  id: string;
  title: string;
  text: string;
  path: string;
}
