import type {
  AcronymEntry,
  CecoQuality,
  DojGuidanceUpdate,
  GlobalStandard,
  HqpPrinciple,
  MaturityLevel,
  RiskIndicator,
  TimelineEvent,
} from "./types";

export const courseInfo = {
  fullName: "Leading Professional in Ethics and Compliance (LPEC)",
  purpose: "Prepares participants for the LPEC certification exam.",
  supportEmail: "training@eci-insights.com",
  totalModules: 7,
  moduleStructure: [
    "Module 1: Introduction and prerequisite materials",
    "Modules 2–6: Each dedicated to exploring one of the five HQP principles in depth",
    "Module 7: LPEC certification exam",
  ],
  certification: {
    passingScore: "75%",
    attemptsAllowed: 2,
    examWindow: "Must be completed before the 90-day expiration date from course start",
    credential: "A virtual badge displayable on LinkedIn and in an email signature",
  },
};

export const hqpOverview = {
  name: "High Quality Ethics and Compliance Program (HQP)",
  introducedYear: "2016",
  source: "Ethics and Compliance Initiative (ECI) Blue Ribbon Panel",
  panelSize: 28,
  panelComposition:
    "Senior ethics practitioners, former enforcement officials, white-collar and whistleblower attorneys, and top academics",
  supportingObjectivesCount: 27,
  leadingPracticesCount: "100+",
  keyCharacteristics: [
    "A visible sign that E&C is central to an organization's business strategy",
    "Not static — programs mature as a result of effective efforts to embed E&C throughout the organization",
    "Grounded in rigorous measurement, benchmarking, and leading practices related to each of the five HQP principles",
  ],
  fourKeyOutcomes: [
    "Reduced pressure to compromise ethical standards",
    "Less observed misconduct",
    "More reporting of observed misconduct",
    "Fewer instances of retaliation after reporting observed misconduct",
  ],
};

export const hqpPrinciples: HqpPrinciple[] = [
  {
    id: "principle-1",
    number: 1,
    title: "E&C Is Central to Business Strategy",
    statement:
      "E&C practitioners are well-versed in business strategy and integrate E&C effectively across all operations.",
    intent: [
      "Ensure that E&C is a key focus across an entire business",
      "Help E&C as a function connect its resources to operations at all levels",
      "Define the level of resources needed for E&C to succeed",
      "Provide appropriate information to the board",
      "Position an organization to be an exemplar for other E&C programs",
    ],
    businessObjectives: [
      "The E&C program is designed to integrate with business objectives",
      "E&C has the resources and access for integration and independence",
      "E&C personnel are consistent participants in key strategic discussions",
      "The organization continuously improves the impact of its E&C program",
      "The board is knowledgeable about and monitors the E&C program",
      "The organization shares its learning externally",
    ],
    supportingObjectives: [
      {
        objective: "The E&C program is designed to integrate with business objectives",
        leadingPractices: [
          "Strategic goals for the organization include goals related to E&C",
          "Senior leaders explain to employees the ways E&C relates to their operational areas",
          "Leaders highlight values and E&C practices in communications",
          "Organizational priorities and potential strategies are determined, in part, on alignment with core values",
          "The CECO regularly reports to leadership on compliance performance",
        ],
      },
      {
        objective:
          "E&C is given the resources and access needed to ensure both proper integration with operations and an independent voice to leaders",
        leadingPractices: [
          "E&C staffing is sufficient to have reach into the business structure",
          "E&C is represented on strategic teams across the enterprise",
          "Resources provided to the E&C program are sufficient",
          "The E&C structure ensures independence and regular access to the board",
        ],
      },
      {
        objective: "E&C personnel are consistent participants in key strategic discussions",
        leadingPractices: [
          "E&C leaders are visible and prominent, sending a strong message to the organization",
          "E&C leaders participate in high-level strategic discussions",
          "E&C issues, data, and priorities are reviewed in staff meetings and during performance appraisals",
        ],
      },
      {
        objective:
          "The organization continuously improves the impact of its E&C program through leadership, innovation, and continuous feedback loops",
        leadingPractices: [
          "Baseline measures are in place to assess improvement over time",
          "Metrics are gathered and monitored on misconduct, reporting trends, detection measures, prevention activities, and leadership behaviors",
          "Failures, near misses, and audits are mined for lessons learned",
          "Senior leaders probe for new insights and improvements in E&C practices",
          "The organization seeks employee feedback on leaders' behavior and the E&C program",
          "E&C collaborates with audit, risk, and others to include the business in E&C priorities",
          "E&C ensures leveraging of technology and research for E&C innovation",
          "Periodic independent reviews of the E&C program are conducted",
        ],
      },
      {
        objective:
          "The board of directors is knowledgeable about the impact of the E&C program and actively monitors its implementation across the business",
        leadingPractices: [
          "Board members are provided comprehensive information about the E&C program on a periodic basis",
          "The board has regular contact with E&C lead and team",
          "The board receives periodic role-specific training",
        ],
      },
      {
        objective:
          "The organization shares its learning externally to positively influence other organizations towards responsible practices and a commitment to integrity",
        leadingPractices: [
          "E&C staff participate in forums with stakeholders and enforcement officials, as appropriate",
          "E&C staff is active in industry and local/regional associations",
        ],
      },
    ],
    examAlerts: [
      "The CECO regularly reporting to leadership on compliance performance is a leading practice under Principle 1.",
      "Independence and regular access to the board are critical leading practices under resourcing — know both together.",
      "Tone at the Top, Mood in the Middle, and Buzz at the Bottom are the three areas of focus for E&C communications — know all three in sequence.",
      "8th–10th grade reading level is the standard for an effective code of conduct.",
      "A code of conduct can be a central exhibit in litigation — a legal risk consideration under Principle 1.",
      "The CECO must act as a leader — not solely as a problem responder — and must meet with board leadership independently of the CEO.",
    ],
  },
  {
    id: "principle-2",
    number: 2,
    title: "E&C Risks Are Identified, Owned, Managed, and Mitigated",
    statement:
      "Risk isn't just tracked — it is actively owned and reduced by those in the best position to address it.",
    intent: [
      "Place E&C-related risk assessment and mitigation in the context of Enterprise Risk Management (ERM)",
      "Review ERM risk indication tools",
      "Introduce specific risk assessment activities and areas of focus",
    ],
    businessObjectives: [
      "Leaders regularly calibrate their E&C program to the risks faced by the organization based on a robust, continuous risk assessment process",
      "Maintain cross-functional teams for risk assessments to promote insight and issue-spotting",
      "E&C programs should be regularly monitored as risk areas",
      "Policies and codes of conduct must be regularly updated to reflect current risk areas",
      "Risk review and assessment of third parties and their processes are equally important as internal risk reviews",
    ],
    supportingObjectives: [
      {
        objective:
          "The E&C program is calibrated to key risk areas identified through a robust, continuous risk assessment process",
        leadingPractices: [
          "The risk assessment process includes identifying and tasking risk owners for every key risk area, including responsibility for reporting and coordinating mitigation progress (policy, training, operating processes and controls, mitigation and resolution of issues)",
          "The risk assessment process includes broad and deep participation — not just senior leaders",
          "The E&C program is nimble: its risk assessment process schedules actions and deliverables into the business calendar throughout the year and is adjusted regularly based on identified and prioritized risks",
          "E&C develops and regularly updates a framework that includes the identification of key risk areas and risk owners",
        ],
      },
      {
        objective:
          "Leaders across the organization are assigned responsibility for the ongoing identification and mitigation of risks specific to their operations",
        leadingPractices: [
          "Leaders ensure their teams understand the organization's risk assessment processes and the key risks relevant to their unit",
          "Each key risk is assigned to a risk owner for coordination and mitigation",
          "Risk owners are held accountable for and recognized for their performance, including collaboration with E&C and other relevant functions",
        ],
      },
      {
        objective: "Continuous monitoring and prompt remediation of compliance gaps are recognized and rewarded",
        leadingPractices: [
          "The organization tracks performance outcomes and metrics on risk identification and mitigation, and holds individuals accountable",
          "Risk assessment and monitoring features are required for new initiatives",
          "Risk assessment is based on cross-functional teams to promote insights and issue-spotting",
        ],
      },
      {
        objective: "E&C — both the program and the state of the organization — is regularly monitored as a risk area",
        leadingPractices: [
          "Compliance performance, strength or weakness of organizational culture, and employee willingness or fear to report are evaluated as potential risks",
          "E&C processes for prevention and detection of misconduct are reviewed and assessed for effectiveness and efficiency",
          "E&C metrics across the organization are reviewed to detect 'high risk' areas requiring intervention",
          "Investigative and audit results are integrated into risk assessment reviews, ratings, and mitigation plans",
        ],
      },
      {
        objective: "Guidance and support for handling key risks are role-specific",
        leadingPractices: [
          "Policies and the code of conduct are maintained and updated to reflect prominent risk areas, and made readily available to employees at every level and location — without exception",
          "Continuous learning on E&C topics is required based on role and risk exposure, and is evaluated for effectiveness and relevance on an ongoing basis",
          "The organization actively works to ensure training and guidance are relevant and timely",
        ],
      },
      {
        objective: "The organization maintains rigorous third-party due diligence processes that screen for integrity",
        leadingPractices: [
          "E&C is significantly involved in due diligence processes for mergers and acquisitions (M&A)",
          "The M&A due diligence process is designed to ensure reasonable consideration of E&C risks prior to deal closure",
          "Effective and timely implementation of E&C standards, including training, is expected of the acquired or contracted entity",
          "E&C contributes to and monitors third-party diligence processes and standards for agents, intermediaries, vendors, and suppliers, in collaboration with procurement and other functional partners",
        ],
      },
    ],
    examAlerts: [
      "ERM risk factors: market, financial, operational, legal, strategic, technology, people/culture, and fraud risk.",
      "Risk Value = Probability of the risk occurring × Cost of the event (e.g., 80% × $500,000 = $400,000).",
      "KRIs relate to risk exposure, KPIs relate to goals/objectives, KCIs relate to control activities — know the distinction.",
      "GRC (Governance, Risk, and Compliance) has evolved into Integrated Risk Management (IRM) / GRC 3.0, which broadens the view to digital, vendor, EHS, and business continuity risk.",
    ],
  },
  {
    id: "principle-3",
    number: 3,
    title: "Leaders at All Levels Build and Sustain a Culture of Integrity",
    statement: "In E&C, integrity means alignment between what we think, say, and do.",
    intent: [
      "Understand culture's importance and impact",
      "Define ethical leadership",
      "Manage culture through core activities and program components",
      "Learn ways to measure culture",
    ],
    businessObjectives: [
      "Leaders are expected and incentivized to personally act with integrity, and are held accountable if they do not",
      "Leaders across the organization own and are accountable for building a strong ethical culture",
      "Values and standards are communicated effectively through many channels",
      "All employees are supported and expected to act in line with organizational values, and are held accountable if they do not",
    ],
    supportingObjectives: [
      {
        objective:
          "Leaders are expected and incentivized to personally act with integrity, and are held accountable if they do not",
        leadingPractices: [
          "Leaders model integrity by talking about the importance of ethical conduct and referencing organizational values as a framework for decisions",
          "Leaders exemplify the conduct they expect of their employees and hold subordinates accountable for ethical behavior",
          "Leader behaviors are a significant consideration in hiring, retention, and promotion decisions",
          "Waivers of integrity standards are not given to more senior personnel",
          "E&C performance affects the compensation and advancement of all employees",
          "A high-level committee reviews significant matters involving senior leaders to ensure neutral investigations and consistency in consequences",
        ],
      },
      {
        objective: "Leaders across the organization own and are accountable for building a strong ethical culture",
        leadingPractices: [
          "In everyday activities, leaders act and speak in alignment with the organization's values",
          "Leaders are knowledgeable about and responsible for their role as ethical leaders",
          "Culture metrics are an element of business unit performance",
          "The organization seeks employee feedback on leaders' efforts to build and sustain a strong ethical culture",
          "Annual performance reviews for leaders include an evaluation of culture-building efforts",
        ],
      },
      {
        objective: "Values and standards are communicated effectively through many channels",
        leadingPractices: [
          "Enterprise communications are regularly leveraged for E&C messaging, not merely once a year",
          "The organization's values, code of conduct, policies, and procedures are explained to all employees and translated to ensure understanding",
          "Senior managers directly communicate values and standards to employees at all business gatherings",
        ],
      },
      {
        objective:
          "All employees are supported and expected to act in line with organizational values, and are held accountable if they do not",
        leadingPractices: [
          "The code of conduct, training, and communications begin with a connection to organizational values, then explain rules within that context",
          "Training emphasizes seeking guidance, intentionally acting in alignment with values, and knowing the consequences for not doing so",
          "Expectations are set and performance is judged on alignment with organizational values, not merely technical rule compliance",
          "An employee accused of misconduct is treated with dignity and respect",
        ],
      },
    ],
    deepDive: [
      {
        title: "Edgar Schein's Three Levels of Culture",
        points: [
          "Artifacts — the visible elements: workspace organization, where leaders sit, public displays of values, historical depictions. Artifacts are the first lever for influencing culture.",
          "Shared values and beliefs — the organization's stated core values, and broad agreement about what matters. Mapping core values to daily activities is the second lever for influencing culture.",
          "Underlying assumptions — the deepest level: often-unspoken agreements about what is recognized and rewarded, what can be discussed, and what is taboo. Understanding all three levels is key to building a sustainable culture of integrity.",
        ],
        quote: "\"Leaders really value employees around here — they listen to our ideas and suggestions\" vs. \"If you see something that doesn't look right, don't report it if you want to keep your job!\" — the same organization can hold contradictory underlying assumptions depending on who you ask.",
      },
      {
        title: "Five Habits for Integrating E&C into Business Decisions",
        points: [
          "Stakeholder Analysis — guide employees to consider how a decision affects various individuals or groups, expanding perspective beyond immediate business outcomes.",
          "Values Mapping — ask employees to map potential business decisions against the organization's core values.",
          "Continuous Reinforcement — make values discussion a routine part of conversations about business activities and goal achievement, not an exception.",
          "Story-Sharing — share stories of decisions influenced by core values or exemplary conduct to illustrate values in practice.",
          "Feedback and Engagement — create regular opportunities for employees to ask questions and give feedback, using real examples and cases to illustrate ethics risks and consequences.",
        ],
      },
      {
        title: "Ethics-Related Actions (ERAs) of Leaders",
        points: [
          "Talking about the priority of ethics in the work being done",
          "Setting a good example",
          "Being viewed by employees as being held accountable",
          "Keeping employees informed about what is going on in the company",
          "Keeping promises and commitments",
        ],
      },
      {
        title: "Measuring Culture",
        points: [
          "E&C measures: helpline activity, levels and kinds of misconduct and general inquiries, percentage of anonymous calls, perceptions of pressure and stress",
          "Organizational measures: culture assessment and employee engagement data, attrition and turnover rates, exit interview data, rising or falling operational risk profile",
          "Measurement techniques: qualitative tools (focus groups, one-on-one interviews, observation) and quantitative tools (culture assessments, pulse surveys, statistically valid sampling)",
        ],
      },
      {
        title: "Signs of Culture Decline",
        points: [
          "Loss of leadership integrity",
          "Fractured communication and silos",
          "Misaligned incentives and pressures",
          "Inconsistent accountability",
          "Loss of organizational trust and low employee engagement",
        ],
      },
      {
        title: "Levers for Managing Culture",
        points: [
          "Targeted follow-up communications that reinforce key messages",
          "Engaging the CEO and senior/middle managers to communicate the importance of ethics",
          "Cultivating leaders' skill in sharing personal ethical-growth stories",
          "Examining hiring tools (interview guides, behavioral questions) from an E&C perspective",
          "Consistency and discipline regardless of position or level",
          "Aligning strategy and execution, and leveraging exit-interview data",
          "Replacing leaders who are misaligned with E&C goals",
        ],
      },
      {
        title: "The Business Case for Leadership Character",
        points: [
          "A CEO's character reputation correlates with a 5x return on assets and a 26% increase in employee engagement compared to companies with self-focused leadership.",
          "Keystone character habits of a 'virtuoso leader': integrity, responsibility, forgiveness, and compassion.",
          "Keystone leadership skills: vision, strategy, executive leadership development, and accountability.",
        ],
        quote: "Peter Drucker, the \"father of management\": \"Culture eats strategy for breakfast.\"",
      },
    ],
    examAlerts: [
      "Culture is often described as 'how we do things around here.'",
      "Edgar Schein's three levels of culture: visible artifacts, shared beliefs and ideas, and deep (often unspoken) assumptions.",
      "Research finding: strictly compliance-focused framing may weaken employee motivation to act ethically; values-based framing enhances it.",
    ],
  },
  {
    id: "principle-4",
    number: 4,
    title: "The Organization Encourages, Protects, and Values the Reporting of Concerns and Suspected Wrongdoing",
    statement: "It's not enough to have a hotline — it needs to work, and employees need to trust it.",
    intent: [
      "Introduce the nature and behaviors that constitute retaliation",
      "Discuss best practices for incident reporting and review",
      "Define reporting KPIs and metrics",
    ],
    businessObjectives: [
      "Leaders create an environment where employees are prepared and empowered to raise concerns",
      "If an employee makes a report to government authorities, they are protected from retaliation",
      "All leaders are trained to be aware of the organization's policy on retaliation and behaviors that may be perceived as retaliation (perception is often reality)",
    ],
    supportingObjectives: [
      {
        objective:
          "Leaders create an environment where employees are prepared and empowered to raise concerns, and resources are provided to support ethical decision-making",
        leadingPractices: [
          "Questions from employees are solicited and listened to; raising difficult issues is recognized and rewarded",
          "Employees are made aware of available resources for speaking up",
          "Employees are trained on how to make ethical decisions, seek guidance, and use the reporting process",
          "The organization's 'no retaliation' policy is communicated to employees",
          "Leaders are skilled at responding appropriately to issues raised by employees, and this is measured and managed",
        ],
      },
      {
        objective: "The organization respects all employees' rights to report to government authorities",
        leadingPractices: [
          "All communication materials concerning reporting channels are vetted to ensure no implication that reporters cannot also report to the government",
          "An employee who reports to government authorities is protected from all forms of retaliation",
          "The organization seeks to dispel whistleblower stereotypes and expects leaders to respond consistently to all reports",
        ],
      },
      {
        objective:
          "The organization provides a broad and varied number of reporting avenues, each with effective tracking for escalation and response",
        leadingPractices: [
          "Employees can report anonymously (where permitted by law) and confidentially via phone and internet at a minimum, with global coverage and translation services where appropriate",
          "Clear procedures are established for escalating and tracking significant issues",
        ],
      },
      {
        objective: "The organization treats all reporters the same, with consistency and fairness, throughout the process",
        leadingPractices: [
          "The focus is on investigating allegations, not the motives of the reporter",
          "Disciplinary processes are regularly reviewed to ensure no retaliation or appearance of it",
          "Discipline is never imposed against an employee for reporting an issue in good faith, even if proven wrong",
        ],
      },
      {
        objective:
          "The organization has proactive retaliation prevention processes, including awareness training, monitoring of employee reporters, and demonstrated consequences",
        leadingPractices: [
          "Leaders are trained to recognize the organization's retaliation policy and behaviors that may be perceived as retaliation",
          "The organization periodically checks in with reporters to confirm they have not experienced retaliation",
          "The organization monitors the long-term career success of employees who report suspected violations",
          "Investigations of retaliatory behavior receive special handling and priority",
          "Substantiated retaliation cases are reviewed by senior management and the board",
        ],
      },
    ],
    deepDive: [
      {
        title: "Retaliation: Scope and Risk Window",
        points: [
          "Global Business Ethics Survey (GBES): 65% of employees globally observed one or more types of misconduct in the previous 12 months; 72% of those reported it; 46% of those who reported later experienced retaliation.",
          "3 out of 4 employees who experienced retaliation experienced it within 3 weeks of their initial report — the highest-risk period requiring the closest oversight.",
          "30% of employees say their supervisor takes no action when someone retaliates.",
          "Globally, 75% of employees work in environments where they perceive actions that suppress speaking up.",
          "Retaliation is lower when employees view top managers, supervisors, and coworkers as accountable for their own conduct.",
        ],
        quote: "\"Retaliation against people who report is one of the most destructive actions for E&C programs. It has a toxic influence on the speak-up culture and climate.\"",
      },
      {
        title: "Seven Keys to Non-Retaliatory Environments",
        points: [
          "Develop clear and effective code standards",
          "Foster a culture that values communication",
          "Create and promote multiple communication channels",
          "Train managers to understand the how and why of report intake and related processes",
          "Train employees on how, what, and where to communicate feedback and concerns",
          "Develop a consistent and repeatable review, triage, and follow-up process for all reports and inquiries",
          "Implement a problem-focused investigative process",
        ],
      },
      {
        title: "Psychological Safety",
        points: [
          "Amy Edmondson's definition: a belief that one will not be punished or humiliated for speaking up with ideas, questions, concerns, or mistakes — a shared belief that the team is safe for interpersonal risk-taking.",
          "Google's Project Aristotle research found psychological safety was the number one factor behind top-performing teams' sales and engagement results.",
        ],
      },
      {
        title: "Leadership Actions That Create a Speak-Up Culture",
        points: [
          "Showing appreciation — thank employees for raising concerns, individually and in team settings, and follow up to close the loop on outcomes.",
          "Creating opportunities to connect — leaders must actually 'walk through their own doors': skip-level meetings, weekly one-on-ones, and time with front-line employees, not just peer leaders.",
          "Creating a learning organization — build an environment that encourages reasonable risk-taking and reframes 'falling short' as a success if lessons are learned, favoring an open mindset over a closed one.",
        ],
      },
      {
        title: "Six Elements of a Rudimentary E&C Program",
        points: [
          "Written standards of ethical conduct",
          "Training on those standards",
          "Advisory resources employees can consult",
          "Confidential reporting channels",
          "Performance evaluations that include ethical conduct",
          "Disciplinary systems for violators",
        ],
        quote:
          "Impact: when all six elements are missing, only 33% of employees report misconduct they observe and 53% of those who do report experience retaliation. When all six are present, reporting rises to 84% and retaliation drops to just 4%. \"Retaliation is reduced when we combine even a rudimentary E&C program with a strong ethics culture.\"",
      },
      {
        title: "Case Management, Triage & Escalation",
        points: [
          "Case management should track: reporter name (if known) and date of contact, case type, report type (anonymous/confidential), case summary and details, follow-up contact and closure notice, case disposition, root cause, and closure date.",
          "Escalation categories requiring greater urgency: workplace violence, sexual harassment, physical safety concerns, environmental reports, drug or alcohol abuse, and misconduct of senior executives.",
          "Escalation procedures should be regularly tested against recent organizational changes, updated policies, and current investigative protocols.",
        ],
      },
      {
        title: "Key Metrics for E&C Reporting",
        points: [
          "Total reports received (relative to employee population) and reports by intake source",
          "Anonymous vs. identified reports",
          "Reports by allegation type, and percentage of allegations vs. advisory calls",
          "Report substantiation rate, incident/case closure time, and root cause breakdown",
          "Subject levels and types, and disciplinary actions taken",
        ],
      },
      {
        title: "Helpline Management: Outsourced vs. Internal",
        points: [
          "Outsourcing advantages: greater confidentiality and anonymity, 24/7/365 availability, multi-language support, SSAE 16 Type II certification, and country-by-country regulatory compliance.",
          "Internal management advantage: faster resolution of advisory calls, at the cost of greater staffing and program investment to match an outsourced helpline's operational reach.",
        ],
      },
    ],
    examAlerts: [
      "\"It's not enough to have a hotline — it needs to work, and employees need to trust it.\" Know this statement word for word.",
      "SEC whistleblower data: FY2023 saw over 18,000 tips (~50% above the prior record) and nearly $600M awarded to 68 individuals — the highest annual total in program history.",
      "Since program inception (2011), the SEC has awarded more than $1.9 billion to 397 individual whistleblowers.",
      "Most award recipients (81% in FY2020, 75% in FY2021) raised concerns internally before reporting to the SEC.",
    ],
  },
  {
    id: "principle-5",
    number: 5,
    title: "The Organization Takes Action and Holds Itself Accountable When Wrongdoing Occurs",
    statement:
      "Accountability reinforces and strengthens the belief that the organization is just and fair, builds trust, and raises the likelihood that employees will report misconduct they observe.",
    intent: [
      "Suggest best practices for managing investigations",
      "Provide guidance on building effective partnerships",
      "Understand the importance of accountability in an organization",
      "Define continuous program improvement",
    ],
    businessObjectives: [
      "Leaders regularly communicate that individuals who violate organizational standards or the law will be disciplined",
      "Leaders train their teams to maintain investigative excellence",
      "Individuals who report are respected and kept informed",
      "Disciplinary action is consistently taken when violations are substantiated",
      "Leaders develop systems for escalation and response that are regularly tested",
      "Appropriate disclosures are made to regulatory or other government authorities",
    ],
    supportingObjectives: [
      {
        objective:
          "The organization regularly communicates that individuals who violate organizational standards or the law will be disciplined",
        leadingPractices: [
          "The code of conduct makes clear there are consequences for substantiated violations",
          "E&C regularly communicates with key stakeholders about discipline monitoring efforts",
          "Methods of communication about substantiated incidents are evaluated case by case",
        ],
      },
      {
        objective: "The organization maintains investigative excellence",
        leadingPractices: [
          "Investigations are thorough, timely, neutral, and consistent, maximizing organizational learning",
          "Investigators are selected based on their ability to ensure neutrality",
          "E&C is provided access to all relevant investigative information",
          "The organization is transparent about how investigations are conducted (roles, procedures, confidentiality)",
          "An employee accused of misconduct is treated with dignity and respect",
          "Investigations include root cause analysis and follow-up action",
        ],
      },
      {
        objective: "Disciplinary action is consistently taken when violations are substantiated",
        leadingPractices: [
          "E&C ensures consistent and appropriate consequences for violations",
          "Disciplinary metrics are monitored to identify trends and inconsistencies",
        ],
      },
      {
        objective: "Systems for escalation and response are well-developed and regularly tested",
        leadingPractices: [
          "A clear policy is in place regarding escalation of and response to significant matters",
          "Escalation and crisis management systems are regularly tested",
          "Leaders are held accountable for compliance with these systems",
        ],
      },
      {
        objective: "Appropriate disclosures are made to regulatory or other government authorities",
        leadingPractices: [
          "Leaders support responsible, timely disclosure to regulators and are aware of disclosure avenues",
          "Procedures ensure matters are escalated for review, with consequences if not followed",
          "E&C provides input on questions regarding proper disclosure procedures",
          "Employees are trained on cooperation with the government and the consequences of failing to do so",
          "When appropriate, cases are publicized after closure to deter future misconduct",
        ],
      },
    ],
    deepDive: [
      {
        title: "Four Foundational Principles of High-Quality Investigations",
        points: [
          "Thorough",
          "Timely",
          "Neutral",
          "Consistent",
        ],
        quote: "GBES research: 21% of employees globally did not report potential misconduct they saw because they did not believe any action would be taken in response.",
      },
      {
        title: "Investigative Protocol Best Practices",
        points: [
          "Pre-defined logic for triage and assignment, led by trained personnel who are thorough, timely, competent, consistent, respectful, and neutral",
          "Focus on facts and concerns, not on defending the allegation",
          "Protect reporters from retaliation throughout the process",
          "Tie investigative decisions to root cause, historic outcomes, and discipline",
          "Back-brief stakeholders after a case is closed and report data to ERM or other risk-tracking systems",
          "Ensure proper documentation of investigative plans and outcomes",
        ],
      },
      {
        title: "Root Cause Analysis",
        points: [
          "Also called 'contributing factor analysis' — seeks to understand the initial conditions that led to misconduct, aiming to alter those conditions to prevent recurrence.",
          "The 'Five Whys' technique: ask 'why' an incident occurred five times to identify the root cause with greater certainty.",
          "Looks beyond the immediate corrective action to fundamental or underlying causes — processes, procedures, operations, and cultural conditions.",
          "Root causes should be documented and reported to senior leadership and the board on a regular basis.",
        ],
      },
      {
        title: "Contents of a Final Investigative Report",
        points: [
          "The incident or issue investigated",
          "Names of the subject of the inquiry and witnesses interviewed",
          "Relevant documents and evidence examined",
          "Summary of relevant policies, guidelines, and standards",
          "Fact findings",
          "Issues that could not be resolved, and why",
          "Recommendations, unrelated to specific disciplinary actions",
        ],
      },
      {
        title: "The PDSA Continuous Improvement Cycle",
        points: [
          "Plan — identify objectives and desired outcomes, and lay out a process for moving forward",
          "Do — implement the plan and monitor progress by gathering key metrics and data",
          "Study — assess whether the plan achieved its objectives, or where it fell short and needs revision",
          "Act — improve the process based on actual results, share findings with stakeholders, and adjust as the cycle continues",
        ],
      },
      {
        title: "Building the Business Case for Continuous Improvement",
        points: [
          "Ways to quantify ROI: projected savings on litigation costs, increased productivity and innovation from higher morale, lower mitigation costs versus the cost of unethical conduct, higher employee retention, and enhanced reputation driving customer acquisition and retention.",
          "Costs of non-compliance: substantial and immediate loss of capitalization, reduced access to capital markets, diminished shareholder value, and loss of market share.",
          "Benchmarking methods: internal trends over time, third-party survey data, industry data and events, and practices at peer organizations — alongside employee feedback (surveys, interviews, focus groups) and third-party program audits.",
        ],
      },
    ],
    examAlerts: [
      "Ethics Resource Center research: transparency and perceived fairness in investigations correlate with greater acceptance of outcomes, even unfavorable ones.",
      "Four dimensions of accountability: managing investigations, building effective partnerships, acting transparently, and continuous program improvement.",
    ],
  },
];

export const timeline: TimelineEvent[] = [
  {
    id: "fcpa-1977",
    era: "Era 1: Government Contracting Fraud",
    year: "1977",
    title: "U.S. Foreign Corrupt Practices Act (FCPA)",
    detail:
      "The first major legislative driver of modern corporate E&C programs. Two critical provisions: an anti-bribery provision prohibiting bribery of foreign officials to obtain or retain business, and a books, records, and internal controls provision requiring adequate controls to prevent unlawful payments. Set the precedent that corporations — not just individuals — bear responsibility for ethical conduct internationally.",
  },
  {
    id: "packard-1986",
    era: "Era 1: Government Contracting Fraud",
    year: "1986",
    title: "Blue Ribbon Packard Commission",
    detail:
      "President Reagan created the Packard Commission in 1986 to investigate defense contracting procedure fraud. Its report, 'A Quest for Excellence,' recommended defense contractors adopt ethics programs — the direct catalyst for DII.",
  },
  {
    id: "dii-1986",
    era: "Era 1: Government Contracting Fraud",
    year: "1986",
    title: "Defense Industry Initiative (DII)",
    detail:
      "The first significant, voluntary effort to establish ethics and compliance standards for large U.S. government contractors, emerging directly from the Packard Commission recommendation. Sequence for the exam: FCPA (1977) → Packard Commission (1986) → DII (1986).",
  },
  {
    id: "fsgo-1991",
    era: "Era 2: Federal Sentencing Guidelines",
    year: "1991",
    title: "Chapter 8, Federal Sentencing Guidelines for Organizations (FSGO)",
    detail:
      "Authored by the U.S. Sentencing Commission (USSC) to guide federal judges sentencing convicted organizations. Its criteria were widely adopted as the critical framework for effective E&C programs: common criteria for a robust program, incentives to prevent and detect crime, encouragement to tailor programs, standards for director/executive engagement, and demonstration of ethical culture tied to culpability factors. Updated in 2004 (emphasizing effectiveness assessment and expanded director responsibility) and again in 2023.",
  },
  {
    id: "caremark-1996",
    era: "Era 3: Expanding Director Responsibility",
    year: "1996",
    title: "Caremark Doctrine/Decision",
    detail:
      "In re Caremark International Inc. Derivative Litigation, Court of Chancery of Delaware, 698 A.2d 959 (Del. Ch. 1996). Shareholders alleged directors breached their duty of care by neglecting to establish sufficient internal controls. The decision established that boards cannot be passive — directors have an affirmative legal duty to oversee compliance, the legal foundation for today's expectation of active board engagement with E&C.",
    citation: "698 A.2d 959 (Del. Ch. 1996)",
  },
  {
    id: "sox-2002",
    era: "Era 4: Turbulent Times",
    year: "2002",
    title: "Sarbanes-Oxley Act (SOX)",
    detail:
      "Direct legislative response to the Enron, WorldCom, and Tyco scandals. Two key provisions: financial reporting transparency (corporate governance in public companies, holding leadership and accounting firms accountable) and anonymous complaints/whistleblower protection (requiring processes for anonymous complaints and protecting whistleblowers).",
  },
  {
    id: "dodd-frank-2010",
    era: "Era 4: Turbulent Times",
    year: "2010",
    title: "Dodd-Frank Wall Street Reform and Consumer Protection Act",
    detail:
      "Targeted sectors believed to have caused the 2008 financial crisis (banks, mortgage lenders, credit rating agencies) and strengthened the whistleblower program established by SOX.",
  },
  {
    id: "uk-bribery-act-2010",
    era: "Era 6: Globalization of E&C",
    year: "2010",
    title: "UK Bribery Act",
    detail:
      "Three criminal offenses: bribery, bribing foreign government officials, and failure by private companies to prevent corruption (the corporate offense). Also makes it an offense to be bribed. Near-universal jurisdiction allows prosecution of any company with links to the UK. Broader than the FCPA in two ways: it covers private-to-private bribery and criminalizes receiving bribes.",
  },
  {
    id: "oecd-convention",
    era: "Era 6: Globalization of E&C",
    year: "1999 / amended 2009",
    title: "OECD Convention Against Bribery of Foreign Officials",
    detail:
      "Establishes legally binding standards to criminalize bribery of foreign public officials in international business transactions — the first and only international anti-corruption instrument focused on the supply side of the bribery transaction. Complemented by the OECD Good Practice Guidance on Internal Controls, Ethics and Compliance (2010) and the Recommendation of the Council for Further Combating Bribery of Foreign Public Officials (amended 2021).",
  },
];

export const dojGuidanceTimeline: DojGuidanceUpdate[] = [
  {
    date: "2017",
    title: "Guidance Related to Corporate Compliance Programs",
    points: [
      "Emphasized the behavior of senior and middle management and their support of the compliance program",
      "Structure and resources of compliance programs",
      "Suitability of the design, accessibility, and integration of policies",
    ],
  },
  {
    date: "April 2019",
    title: "Well-Designed Programs",
    points: [
      "Directs prosecutors to consider whether the program is well-designed",
      "Whether it is tailored to risks",
      "Whether foundational elements are applied honestly and in good faith",
      "Whether the program works as designed",
    ],
  },
  {
    date: "June 2020",
    title: "Program Resourcing and Continuous Improvement",
    points: [
      "Focuses on ensuring programs are adequately resourced and empowered based on continuous improvement",
      "A deeply embedded risk assessment process driven by a learning mindset",
      "Focus on third-party risks and a structured approach in mergers and acquisitions",
    ],
  },
  {
    date: "October 2021",
    title: "Individual Accountability",
    points: [
      "Focuses on individual accountability in misconduct",
      "DOJ will evaluate the full criminal, civil, and regulatory record of a company when deciding on resolution",
      "DOJ is free to require independent monitors when appropriate — a shift from prior guidance that suggested disfavoring monitorships",
    ],
  },
  {
    date: "September 2022",
    title: "Individual Wrongdoers and Corporate Culture",
    points: [
      "Going after individual wrongdoers remains a priority",
      "Four corporate responsibility focus areas: history of misconduct, voluntary self-disclosures, independent compliance monitors, and corporate culture",
    ],
  },
  {
    date: "January 2023",
    title: "Voluntary Self-Disclosure and Cooperation Incentives",
    points: ["Greater clarity and incentives for voluntary self-disclosure of wrongdoing and cooperation with DOJ investigations"],
  },
  {
    date: "March 2023",
    title: "Executive Accountability and Clawback Provisions",
    points: [
      "Expands on 2022 guidance",
      "Details the importance of incentive compensation programs and policies that hold executives accountable",
      "Attempting in good faith to claw back compensation from individual wrongdoers",
    ],
  },
  {
    date: "September 2024",
    title: "Emerging Technologies and Program Access",
    points: [
      "The risks associated with new technologies such as AI in compliance programs",
      "Promoting internal whistleblowing and safeguarding those who report misconduct",
      "Necessity for compliance programs to have sufficient resources and access to data and technology",
      "The involvement of compliance functions in M&A activities",
    ],
  },
  {
    date: "2025 (Ongoing)",
    title: "White Collar Enforcement Priorities and CEP Updates",
    points: [
      "Priorities in white collar crime enforcement to avoid overreach",
      "The basis for selecting monitors and defining the scope of their review and mandate",
      "Guidance on coordinating corporate resolution policies in parallel proceedings across domestic and foreign counterparts",
      "Updates to the Criminal Division Corporate Enforcement and Voluntary Self-Disclosure Policy (CEP)",
    ],
  },
];

export const cepFactors: string[] = [
  "Voluntary self-disclosure to the Criminal Division",
  "Full cooperation with the Criminal Division",
  "Timely and appropriate remediation of the misconduct",
  "No aggravating circumstances related to the nature and seriousness of the offense",
  "Payment of disgorgement, forfeiture, restitution, and/or victim payments",
];

export const dojThreeQuestions: string[] = [
  "Is the program well-designed?",
  "Is the program adequately resourced and empowered to function effectively?",
  "Does the program work in practice?",
];

export const maturityLevels: MaturityLevel[] = [
  {
    id: "underdeveloped",
    letter: "U",
    name: "Underdeveloped",
    description:
      "An E&C program does not exist, or the program in place has adopted few of the leading practices found in high-quality programs. Also considered underdeveloped if it is primarily focused only on compliance, not on ethics and compliance.",
  },
  {
    id: "defining",
    letter: "D",
    name: "Defining",
    description:
      "A program is established but is not widely embraced by the organization and operates tactically, not strategically. Program efforts are expanding to include ethics.",
  },
  {
    id: "adapting",
    letter: "A",
    name: "Adapting",
    description:
      "The program begins to show signs of maturing. E&C activities are starting to embed across the enterprise, with accountability assigned to leaders for identifying and managing key risks. The CECO is invited into strategic C-suite conversations, and ethics is being integrated into performance management. Consistency across the organization may still be lacking.",
  },
  {
    id: "managing",
    letter: "M",
    name: "Managing",
    description:
      "The program maps more consistently to business and operational needs. Leaders generally demonstrate ethics-related actions. Employees are comfortable raising issues without fear of retaliation. The organization demonstrates accountability in a robust investigatory process that is fair, neutral, and consistent. Most assessed organizations currently sit at this level.",
  },
  {
    id: "optimizing",
    letter: "O",
    name: "Optimizing",
    description:
      "The vast majority of HQP leading practices are demonstrated and embedded throughout the organization across all principles. The organization shares its knowledge externally and is generally viewed as having a high-quality E&C program within and outside its industry. Corporate purpose, values, and stakeholder impact influence decision-making at all levels.",
  },
];

export const regressionCauses: string[] = [
  "Change of leadership and focus",
  "Reduction in staff and resources",
  "Failure to adopt a mindset and program of continuous improvement",
  "Complacency",
];

export const cecoValueAdds: string[] = [
  "Articulates the organizational vision for E&C and develops and executes strategy",
  "Supports leadership in ethical and strategic decision making",
  "Monitors and evaluates the effectiveness of the compliance program to protect the organization and its stakeholders",
  "Demonstrates organizational commitment to integrity internally and externally",
  "Mitigates sanctions by making E&C incidents less frequent and severe in terms of impact",
];

export const cecoQualities: CecoQuality[] = [
  { quality: "Uncompromising personal integrity", detail: "The foundation of credibility and trust." },
  { quality: "Emotional intelligence", detail: "The ability to understand and manage emotions — one's own and others'." },
  { quality: "Ability to exert influence without authority", detail: "Can drive change without positional power." },
  { quality: "Knowledge of the business", detail: "Understands operations, strategy, and challenges." },
  {
    quality: "Approachability and ability to communicate at all levels",
    detail: "Makes the CECO accessible to stakeholders throughout the organization.",
  },
  {
    quality: "Strong network of relationships within and outside the organization",
    detail: "Enables collaboration across functions and industries.",
  },
  { quality: "Independence, objectivity, and trust", detail: "Not subject to undue influence; can evaluate situations fairly." },
];

export const powerTypes = [
  {
    type: "Positional Power",
    definition: "Power invested in the position held.",
    builtVia: "Automatic with appointment.",
  },
  {
    type: "Advisory Power",
    definition: "Power earned by helping people solve problems or capitalize on opportunities.",
    builtVia:
      "Built over time through credibility and reputation. Represents true influence beyond the authority vested in the CECO role — with every conversation and interaction, the CECO is either building influence or diminishing it.",
  },
];

export const vuca = {
  acronym: "VUCA",
  full: "Volatility, Uncertainty, Complexity, Ambiguity",
  note: "The CECO must maintain agility at all times, but especially when business operations face VUCA conditions.",
};

export const globalStandards: GlobalStandard[] = [
  {
    id: "iso-19600",
    name: "ISO 19600 — Compliance Management Systems",
    year: "2014",
    summary: "Provided the original baseline for compliance management systems. Replaced and strengthened by ISO 37301 (2021).",
  },
  {
    id: "iso-37301",
    name: "ISO 37301 — Compliance Management Systems (Strengthened)",
    year: "2021",
    summary: "Updated compliance management systems standard that replaces ISO 19600 with an enhanced, current-best-practice framework.",
  },
  {
    id: "iso-37001",
    name: "ISO 37001 — Anti-Bribery Management",
    year: "2016",
    summary: "International standard specifically for managing anti-bribery compliance, particularly relevant for organizations operating internationally.",
  },
  {
    id: "esg",
    name: "ESG — Environmental, Social, and Governance",
    year: "2019+",
    summary:
      "A set of standards investors historically used to screen potential investments. Though the term's use has shifted, the underlying emphasis on sustainability and impact remains. Directly overlaps with E&C: Governance risks (fraud, corruption/bribery, culture) map to E&C examples including anti-money laundering, business facilitation payments, and business ethics.",
  },
];

export const esgEcMapping = [
  {
    category: "Environmental",
    esgExamples: ["Climate change", "Hazardous waste", "Sustainability"],
    ecExamples: ["Carbon emissions", "By-product disposal", "Use of protected materials"],
  },
  {
    category: "Social",
    esgExamples: ["Data privacy", "Discrimination", "Human rights"],
    ecExamples: ["Protection of personal information", "Equal employment", "Child labor"],
  },
  {
    category: "Governance",
    esgExamples: ["Fraud", "Corruption / bribery", "Culture"],
    ecExamples: ["Anti-money laundering", "Business facilitation payments", "Business ethics"],
  },
];

export const ermRiskFactors: string[] = [
  "Market risk",
  "Financial risk",
  "Operational risk",
  "Legal risk",
  "Strategic risk",
  "Technology risk",
  "People/culture risk",
  "Fraud risk",
];

export const grcEvolution = [
  {
    stage: "GRC 1.0",
    period: "Early 2000s",
    detail: "Emerged after Sarbanes-Oxley, coinciding with system and program maturation and increased regulatory mandates.",
  },
  {
    stage: "GRC 2.0",
    period: "2010s",
    detail:
      "Legislation like Dodd-Frank and the UK Bribery Act inspired a more holistic and sustainable process of identifying, assessing, and proactively responding to a broader list of risks, and held that corporate culture must be a measure of GRC, integrated into ERM and Internal Audit.",
  },
  {
    stage: "GRC 3.0 / IRM",
    period: "Present",
    detail:
      "Also called E-GRC or Integrated Risk Management. Advocates enterprise-wide synergy through a 'balanced scorecard' and expands scope to include digital risk, vendor risk, environmental/health/safety (EHS) risk, and business continuity risk — driven by current risks like AI, data privacy, and reliance on data analytics.",
  },
];

export const riskIndicators: RiskIndicator[] = [
  {
    type: "KRI",
    name: "Key Risk Indicator",
    definition: "Related to risk exposure.",
    example: "Percentage of anonymous calls, indicating trust in ethics processes.",
  },
  {
    type: "KPI",
    name: "Key Performance Indicator",
    definition: "Related to goals and objectives that define success.",
    example: "Percentage of advisory calls vs. allegations, indicating comfort in asking questions.",
  },
  {
    type: "KCI",
    name: "Key Control Indicator",
    definition: "Related to control activities.",
    example: "Number of audit issues identified, indicating control effectiveness.",
  },
];

export const riskVisualizationMethods: string[] = [
  "Radar maps — plot risk perception from internal stakeholders (E&C, Internal Audit, ERM) against different risk areas; greater perceived risk is indicated by plot points further from the center.",
  "Heat maps — represent risk in a tabular format with color coding (green/yellow/red) based on likelihood and impact.",
  "Simple risk rankings — assign a numerical rank based on probability of occurrence.",
];

export const riskValueFormula = {
  formula: "Risk Value = Probability of the risk occurring × Cost of the event",
  example: "80% likelihood × $500,000 cost = $400,000 risk value",
  note: "E&C failure costs (monetary sanctions, lost productivity, reputational damage) can be difficult to estimate, but assigning a monetary value is important for prioritization.",
};

export const acronyms: AcronymEntry[] = [
  { acronym: "AI", full: "Artificial Intelligence" },
  { acronym: "CCPA", full: "California Consumer Privacy Act" },
  { acronym: "CECO", full: "Chief Ethics and Compliance Officer" },
  { acronym: "CEO", full: "Chief Executive Officer" },
  { acronym: "CEP", full: "Criminal Division Corporate Enforcement and Voluntary Self-Disclosure Policy" },
  { acronym: "COO", full: "Chief Operating Officer" },
  { acronym: "COSO", full: "Committee of Sponsoring Organizations" },
  { acronym: "CSR", full: "Corporate Social Responsibility" },
  { acronym: "DII", full: "Defense Industry Initiative" },
  { acronym: "DOJ", full: "Department of Justice" },
  { acronym: "E&C", full: "Ethics and Compliance" },
  { acronym: "ECI", full: "Ethics and Compliance Initiative" },
  { acronym: "EEO", full: "Equal Employment Opportunity" },
  { acronym: "EHS", full: "Environmental Health and Safety" },
  { acronym: "ERM", full: "Enterprise Risk Management" },
  { acronym: "ESG", full: "Environmental, Social and Governance" },
  { acronym: "FCPA", full: "Foreign Corrupt Practices Act" },
  { acronym: "FSGO", full: "Federal Sentencing Guidelines for Organizations" },
  { acronym: "GBES", full: "Global Business Ethics Survey" },
  { acronym: "GDPR", full: "General Data Protection Regulation" },
  { acronym: "GRC", full: "Governance, Risk, and Compliance" },
  { acronym: "HQP", full: "High Quality Ethics and Compliance Program" },
  { acronym: "HR", full: "Human Resources" },
  { acronym: "IRM", full: "Integrated Risk Management" },
  { acronym: "ISO", full: "International Organization for Standardization" },
  { acronym: "IT", full: "Information Technology" },
  { acronym: "KCI", full: "Key Control Indicator" },
  { acronym: "KPI", full: "Key Performance Indicator" },
  { acronym: "KRI", full: "Key Risk Indicator" },
  { acronym: "LPEC", full: "Leading Professional in Ethics and Compliance" },
  { acronym: "M&A", full: "Mergers and Acquisitions" },
  { acronym: "NACD", full: "National Association of Corporate Directors" },
  { acronym: "OECD", full: "Organization for Economic Cooperation and Development" },
  { acronym: "PDSA", full: "Plan Do Study Act" },
  { acronym: "ROI", full: "Return on Investment" },
  { acronym: "SEC", full: "Securities and Exchange Commission" },
  { acronym: "SOX", full: "Sarbanes-Oxley Act" },
  { acronym: "UDAMO", full: "Underdeveloped, Defining, Adapting, Managing, Optimizing" },
  { acronym: "USSC", full: "U.S. Sentencing Commission" },
  { acronym: "VUCA", full: "Volatility, Uncertainty, Complexity, Ambiguity" },
];
