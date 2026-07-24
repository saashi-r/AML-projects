import type { Law } from "./types";

export const laws: Law[] = [
  {
    id: "fcpa",
    name: "Foreign Corrupt Practices Act",
    shortName: "FCPA (United States)",
    jurisdiction: "United States",
    yearEnacted: "1977 (amended 1988, 1998)",
    enforcementBodies: ["U.S. Department of Justice (DOJ)", "U.S. Securities and Exchange Commission (SEC)"],
    extraterritorial: true,
    summary:
      "Prohibits U.S. persons, U.S.-listed companies, and (since 1998) foreign persons acting within U.S. territory from bribing foreign government officials to obtain or retain business. Also imposes accounting and internal-controls requirements on SEC-reporting issuers.",
    keyProvisions: [
      "Anti-bribery provisions: bar corrupt payments or offers of payment to foreign officials, political parties, or candidates to influence official acts.",
      "Books and records provisions: issuers must keep accurate books, records, and accounts reflecting transactions.",
      "Internal controls provisions: issuers must devise and maintain a system of internal accounting controls.",
      "Covers 'issuers' (SEC-registered), 'domestic concerns' (U.S. companies/citizens/residents), and any person while in U.S. territory.",
      "Liability can attach through agents, subsidiaries, and third-party intermediaries acting on a company's behalf.",
    ],
    penalties: {
      corporate: "Criminal fines up to $2 million per violation (anti-bribery) and disgorgement of profits; civil penalties up to $21,410+ per violation (indexed); accounting violations can carry fines up to $25 million.",
      individual: "Criminal fines up to $250,000 per violation and/or up to 5 years imprisonment (up to 20 years for accounting fraud); civil penalties also apply.",
    },
    notableFeatures: [
      "No explicit facilitation-payments exception in enforcement practice, though a narrow statutory exception exists for routine governmental action.",
      "Affirmative defenses exist for bona fide, reasonable, and lawful promotional expenses and for payments legal under the written laws of the foreign country.",
      "DOJ/SEC jointly publish the 'FCPA Resource Guide' and increasingly favor Non-Prosecution/Deferred Prosecution Agreements with strict compliance monitorships.",
    ],
  },
  {
    id: "ukba",
    name: "Bribery Act 2010",
    shortName: "UK Bribery Act (United Kingdom)",
    jurisdiction: "United Kingdom",
    yearEnacted: "2010 (in force July 2011)",
    enforcementBodies: ["Serious Fraud Office (SFO)", "Crown Prosecution Service (CPS)"],
    extraterritorial: true,
    summary:
      "One of the most stringent anti-bribery regimes globally. Criminalizes bribing another person, being bribed, bribing a foreign public official, and — uniquely — a corporate offense of failing to prevent bribery by an associated person.",
    keyProvisions: [
      "Section 1: Offering, promising, or giving a bribe.",
      "Section 2: Requesting, agreeing to receive, or accepting a bribe.",
      "Section 6: Bribery of a foreign public official to obtain or retain business or an advantage in business.",
      "Section 7: Corporate offense — failure of a commercial organization to prevent bribery by an associated person acting on its behalf, anywhere in the world.",
      "Applies to any organization that carries on business, or part of a business, in the UK, regardless of where the bribery occurs.",
    ],
    penalties: {
      corporate: "Unlimited fines; debarment from public contracts; confiscation of assets; corporate criminal record.",
      individual: "Up to 10 years imprisonment and/or unlimited fines.",
    },
    notableFeatures: [
      "No facilitation-payments exception at all — even small facilitation payments are illegal.",
      "Section 7 offers a full defense if the organization can show it had 'adequate procedures' designed to prevent bribery, formalized in the Ministry of Justice's Six Principles guidance.",
      "Deferred Prosecution Agreements (DPAs) available since 2014, modeled on the U.S. approach.",
    ],
  },
  {
    id: "oecd",
    name: "Convention on Combating Bribery of Foreign Public Officials in International Business Transactions",
    shortName: "OECD Anti-Bribery Convention",
    jurisdiction: "44 signatory countries (multilateral)",
    yearEnacted: "1997 (in force 1999)",
    enforcementBodies: ["OECD Working Group on Bribery (peer-review/monitoring, not direct enforcement)"],
    extraterritorial: true,
    summary:
      "A multilateral treaty requiring signatory states to criminalize the bribery of foreign public officials in international business and to establish effective enforcement, monitored through rigorous peer-review evaluations.",
    keyProvisions: [
      "Requires each party to establish bribery of a foreign public official as a criminal offense under its own law.",
      "Requires liability for legal persons (companies), not just individuals.",
      "Denies tax deductibility of bribe payments.",
      "Establishes mutual legal assistance and extradition cooperation among parties.",
    ],
    penalties: {
      corporate: "Set by each implementing country's domestic legislation (e.g., FCPA, UK Bribery Act, Sapin II).",
      individual: "Set by each implementing country's domestic legislation.",
    },
    notableFeatures: [
      "Does not itself create penalties — it obligates member states to pass and enforce domestic laws.",
      "Phase 4 monitoring rounds assess both legal frameworks and real-world enforcement records of member countries.",
    ],
  },
  {
    id: "uncac",
    name: "United Nations Convention against Corruption",
    shortName: "UNCAC",
    jurisdiction: "190+ States Parties (global)",
    yearEnacted: "2003 (in force 2005)",
    enforcementBodies: ["UN Office on Drugs and Crime (UNODC) — secretariat/monitoring"],
    extraterritorial: true,
    summary:
      "The broadest global anti-corruption treaty, covering prevention, criminalization, international cooperation, and asset recovery across public and private sectors.",
    keyProvisions: [
      "Requires criminalization of bribery of national public officials, foreign public officials, and officials of international organizations.",
      "Covers embezzlement, trading in influence, abuse of function, illicit enrichment, and money laundering linked to corruption.",
      "Chapter II: prevention measures — public sector codes of conduct, procurement transparency, judicial integrity.",
      "Chapter V: asset recovery — mechanisms to trace, freeze, and return proceeds of corruption across borders.",
    ],
    penalties: {
      corporate: "Implemented and enforced through each State Party's domestic law.",
      individual: "Implemented and enforced through each State Party's domestic law.",
    },
    notableFeatures: [
      "First legally binding global anti-corruption instrument with near-universal membership.",
      "Its private-sector provisions (Article 12) encourage companies to adopt internal controls, codes of conduct, and disclosure of financial and non-financial statements.",
    ],
  },
  {
    id: "sapin2",
    name: "Loi Sapin II",
    shortName: "Sapin II (France)",
    jurisdiction: "France",
    yearEnacted: "2016",
    enforcementBodies: ["Agence Française Anticorruption (AFA)", "Parquet National Financier (PNF)"],
    extraterritorial: true,
    summary:
      "Requires large French companies to implement anti-corruption compliance programs and empowers a dedicated anti-corruption agency to audit and sanction inadequate programs, alongside French-style deferred prosecution agreements.",
    keyProvisions: [
      "Article 17: companies with 500+ employees and €100M+ revenue (or belonging to a group meeting these thresholds) must implement an 8-pillar anti-corruption compliance program.",
      "Required pillars include a code of conduct, internal whistleblowing procedure, corruption risk map, third-party due diligence, accounting controls, training, disciplinary regime, and internal monitoring/evaluation.",
      "Creates the AFA, which can audit companies' programs and issue sanctions for inadequate compliance frameworks.",
      "Introduces the Convention Judiciaire d'Intérêt Public (CJIP), France's version of a deferred prosecution agreement.",
    ],
    penalties: {
      corporate: "Up to €1 million for compliance-program failures (separate from underlying bribery penalties, which can reach €5 million or twice the proceeds of the offense).",
      individual: "Up to 10 years imprisonment and €1 million in fines (or twice the proceeds) for bribery offenses; separate penalties for responsible executives on compliance failures.",
    },
    notableFeatures: [
      "Extends extraterritorially to conduct partly occurring in France or by French nationals/companies abroad.",
      "AFA publishes detailed recommendations that function as a de facto national compliance standard.",
    ],
  },
  {
    id: "clean-company-act",
    name: "Lei Anticorrupção (Clean Company Act), Law No. 12.846/2013",
    shortName: "Clean Company Act (Brazil)",
    jurisdiction: "Brazil",
    yearEnacted: "2013",
    enforcementBodies: ["Comptroller General's Office (CGU)", "Federal Prosecution Service (MPF)", "State/municipal authorities"],
    extraterritorial: false,
    summary:
      "Establishes strict (no-intent-required) civil and administrative liability for legal entities involved in acts of corruption against domestic or foreign public administration.",
    keyProvisions: [
      "Imposes strict liability on companies for corrupt acts committed by employees or agents, regardless of proof of company intent or negligence.",
      "Covers bribery of Brazilian and foreign officials, fraud in public procurement, and obstruction of investigations.",
      "Successor liability applies in mergers and acquisitions.",
      "Existence of an effective compliance program is a mitigating factor in penalty calculations (per Decree 11.129/2022).",
    ],
    penalties: {
      corporate: "Fines from 0.1% to 20% of gross revenue in the prior year (or, if not determinable, R$6,000 to R$60,000,000); disgorgement; publication of the sanctioning decision; potential debarment from public contracts and financing.",
      individual: "Addressed separately under Brazil's Penal Code and Administrative Improbity Law.",
    },
    notableFeatures: [
      "Leniency agreements available for companies that cooperate and self-report, similar to plea/settlement mechanisms elsewhere.",
      "Heavily shaped enforcement in the 'Lava Jato' (Car Wash) investigations.",
    ],
  },
  {
    id: "poca-india",
    name: "Prevention of Corruption Act, 1988 (as amended by the 2018 Amendment)",
    shortName: "Prevention of Corruption Act (India)",
    jurisdiction: "India",
    yearEnacted: "1988 (amended 2018)",
    enforcementBodies: ["Central Bureau of Investigation (CBI)", "State Anti-Corruption Bureaus", "Lokpal"],
    extraterritorial: false,
    summary:
      "India's principal anti-corruption statute, criminalizing the giving and taking of bribes by public servants; the 2018 amendment introduced a specific offense for commercial organizations that fail to prevent bribery of public officials on their behalf.",
    keyProvisions: [
      "Section 7: public servant taking undue advantage.",
      "Section 8: person giving or promising an undue advantage to a public servant (bribe-giver liability — new in 2018).",
      "Section 9: commercial organizations liable if a person associated with them gives a bribe to obtain/retain business or an advantage — with a defense of 'adequate procedures,' mirroring the UK model.",
      "Prior sanction generally required before investigating certain public servants (Section 17A).",
    ],
    penalties: {
      corporate: "Fines (unlimited, at court's discretion) for commercial-organization offense under Section 9.",
      individual: "Imprisonment of 3 to 7 years and fine for bribe-taking or bribe-giving.",
    },
    notableFeatures: [
      "The 2018 amendment shifted India toward a UK-style 'failure to prevent' corporate offense with an adequate-procedures defense.",
      "Coexists with other anti-corruption bodies such as the Lokpal and state Vigilance Commissions.",
    ],
  },
  {
    id: "cfpoa",
    name: "Corruption of Foreign Public Officials Act",
    shortName: "CFPOA (Canada)",
    jurisdiction: "Canada",
    yearEnacted: "1998 (amended 2013)",
    enforcementBodies: ["Royal Canadian Mounted Police (RCMP)", "Public Prosecution Service of Canada"],
    extraterritorial: true,
    summary:
      "Implements Canada's OECD Convention obligations, criminalizing bribery of foreign public officials by Canadian individuals, companies, and (since 2013) based on nationality jurisdiction rather than only a territorial link.",
    keyProvisions: [
      "Prohibits giving, offering, or agreeing to give a bribe to a foreign public official to obtain or retain business or an improper business advantage.",
      "2013 amendments eliminated the 'facilitation payments' exception (transition period ended, fully repealed).",
      "Creates nationality-based jurisdiction: Canadian citizens, permanent residents, and companies can be prosecuted for conduct wholly outside Canada.",
      "Books-and-records offenses addressing concealment of bribes.",
    ],
    penalties: {
      corporate: "Unlimited fines at the court's discretion; debarment from federal government contracts under Canada's Integrity Regime.",
      individual: "Up to 14 years imprisonment.",
    },
    notableFeatures: [
      "Debarment consequences under Canada's procurement Integrity Regime are often more commercially significant than the fines themselves.",
    ],
  },
  {
    id: "aus-foreign-bribery",
    name: "Criminal Code Act 1995 (Division 70) — Foreign Bribery Offense",
    shortName: "Foreign Bribery Offense (Australia)",
    jurisdiction: "Australia",
    yearEnacted: "1999 (Division 70 inserted); reformed 2024",
    enforcementBodies: ["Australian Federal Police (AFP)", "Commonwealth Director of Public Prosecutions"],
    extraterritorial: true,
    summary:
      "Criminalizes bribery of foreign public officials by Australian companies and citizens; 2024 reforms added a 'failure to prevent' corporate offense modeled on the UK approach and removed the requirement to prove the defendant knew the advantage was 'not legitimately due.'",
    keyProvisions: [
      "Prohibits providing, offering, or causing a benefit to be provided to a foreign public official to influence them and obtain or retain business or a business advantage.",
      "New corporate offense: a body corporate is liable if an associate bribes a foreign public official for the body corporate's profit or gain, unless it had 'adequate procedures' in place.",
      "Broadened definition of 'foreign public official' and clarified that a business advantage need not be illegitimate to count.",
    ],
    penalties: {
      corporate: "Greater of A$31.3 million+, three times the value of the benefit obtained, or 10% of annual turnover.",
      individual: "Up to 10 years imprisonment and/or substantial fines.",
    },
    notableFeatures: [
      "The 2024 'failure to prevent' offense and adequate-procedures defense track the UK Bribery Act model closely, and the government has issued official guidance on what adequate procedures look like.",
    ],
  },
];
