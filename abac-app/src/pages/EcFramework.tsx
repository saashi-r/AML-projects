import { useParams } from "react-router-dom";
import Accordion from "../components/Accordion";
import {
  acronyms,
  cecoQualities,
  cecoValueAdds,
  cepFactors,
  courseInfo,
  dojGuidanceTimeline,
  dojThreeQuestions,
  ermRiskFactors,
  esgEcMapping,
  globalStandards,
  grcEvolution,
  hqpOverview,
  hqpPrinciples,
  maturityLevels,
  powerTypes,
  regressionCauses,
  riskIndicators,
  riskValueFormula,
  riskVisualizationMethods,
  timeline,
  vuca,
} from "../data/hqp";

export default function EcFramework() {
  const { anchor } = useParams();
  const activeId = anchor ?? "";

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">E&amp;C Program Framework (HQP)</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-300">
          The High Quality Ethics and Compliance Program (HQP) model — the broader framework anti-bribery and
          anti-corruption work sits inside, covering strategy, risk, culture, reporting, and accountability. Based on
          the LPEC (Leading Professional in Ethics and Compliance) certification curriculum.
        </p>
      </header>

      <div className="space-y-3">
        <Accordion
          key={`overview-${activeId}`}
          id="overview"
          defaultOpen={activeId === "overview"}
          title="Overview: The HQP Framework"
          subtitle={`Introduced ${hqpOverview.introducedYear} by ${hqpOverview.source}`}
        >
          <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <p>
              A {hqpOverview.panelSize}-member Blue Ribbon Panel — {hqpOverview.panelComposition.toLowerCase()} —
              produced a comprehensive framework for E&amp;C programs that go beyond basic regulatory requirements:{" "}
              <strong className="text-slate-900 dark:text-white">
                5 principles, {hqpOverview.supportingObjectivesCount} supporting objectives, {hqpOverview.leadingPracticesCount}{" "}
                leading practices
              </strong>
              .
            </p>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">Key characteristics of an HQP</h4>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                {hqpOverview.keyCharacteristics.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">
                Four key outcomes when the principles are applied consistently and measured effectively
              </h4>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                {hqpOverview.fourKeyOutcomes.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-md bg-slate-50 p-3 dark:bg-slate-800/60">
              <h4 className="font-semibold text-slate-900 dark:text-white">
                About the {courseInfo.fullName} course
              </h4>
              <p className="mt-1">{courseInfo.purpose}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {courseInfo.moduleStructure.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
              <p className="mt-2">
                Certification requires a {courseInfo.certification.passingScore} passing score on the final exam
                ({courseInfo.certification.attemptsAllowed} attempts allowed). {courseInfo.certification.examWindow}.
                Upon passing, participants receive {courseInfo.certification.credential.toLowerCase()}.
              </p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Course support: {courseInfo.supportEmail}
              </p>
            </div>
          </div>
        </Accordion>

        {hqpPrinciples.map((p) => (
          <Accordion
            key={`${p.id}-${activeId}`}
            id={p.id}
            defaultOpen={p.id === activeId}
            title={`Principle ${p.number}: ${p.title}`}
            subtitle={p.statement}
          >
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Intent</h4>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                  {p.intent.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Business Objectives</h4>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                  {p.businessObjectives.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Supporting Objectives &amp; Leading Practices</h4>
                <div className="mt-2 space-y-3">
                  {p.supportingObjectives.map((so, i) => (
                    <div key={i} className="rounded-md bg-slate-50 p-3 dark:bg-slate-800/60">
                      <p className="font-medium text-slate-800 dark:text-slate-100">{so.objective}</p>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-300">
                        {so.leadingPractices.map((lp, j) => (
                          <li key={j}>{lp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {p.deepDive && (
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Deeper Dive</h4>
                  <div className="mt-2 space-y-3">
                    {p.deepDive.map((section, i) => (
                      <div key={i} className="rounded-md border border-slate-200 p-3 dark:border-slate-700">
                        <p className="font-medium text-slate-800 dark:text-slate-100">{section.title}</p>
                        <ul className="mt-1.5 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-300">
                          {section.points.map((pt, j) => (
                            <li key={j}>{pt}</li>
                          ))}
                        </ul>
                        {section.quote && (
                          <p className="mt-2 border-l-2 border-slate-300 pl-3 text-xs italic text-slate-500 dark:border-slate-600 dark:text-slate-400">
                            {section.quote}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {p.examAlerts && (
                <div className="rounded-md border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/40">
                  <h4 className="font-semibold text-amber-900 dark:text-amber-200">Key facts to know</h4>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-amber-900/90 dark:text-amber-100/90">
                    {p.examAlerts.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Accordion>
        ))}

        <Accordion
          key={`timeline-${activeId}`}
          id="timeline"
          defaultOpen={activeId === "timeline"}
          title="Historical Timeline & Legislative Foundations"
          subtitle="FCPA (1977) through the globalization of E&C"
        >
          <ol className="space-y-3 text-sm">
            {timeline.map((t) => (
              <li key={t.id} className="rounded-md bg-slate-50 p-3 dark:bg-slate-800/60">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    {t.year}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{t.era}</span>
                </div>
                <p className="mt-1 font-medium text-slate-800 dark:text-slate-100">{t.title}</p>
                <p className="mt-1 text-slate-600 dark:text-slate-300">{t.detail}</p>
              </li>
            ))}
          </ol>
        </Accordion>

        <Accordion
          key={`doj-guidance-${activeId}`}
          id="doj-guidance"
          defaultOpen={activeId === "doj-guidance"}
          title="DOJ Corporate Compliance Guidance Evolution"
          subtitle="2017–2025: how prosecutors evaluate compliance programs"
        >
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">The DOJ's three evaluation questions</h4>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                {dojThreeQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">Guidance timeline</h4>
              <ol className="mt-2 space-y-2">
                {dojGuidanceTimeline.map((d, i) => (
                  <li key={i} className="rounded-md bg-slate-50 p-3 dark:bg-slate-800/60">
                    <p className="font-medium text-slate-800 dark:text-slate-100">
                      {d.date} — {d.title}
                    </p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-300">
                      {d.points.map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-md border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/40">
              <h4 className="font-semibold text-amber-900 dark:text-amber-200">
                CEP — Five Factors for Declination to Prosecute
              </h4>
              <ol className="mt-1 list-decimal space-y-1 pl-5 text-amber-900/90 dark:text-amber-100/90">
                {cepFactors.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ol>
            </div>
          </div>
        </Accordion>

        <Accordion
          key={`udamo-${activeId}`}
          id="udamo"
          defaultOpen={activeId === "udamo"}
          title="UDAMO Maturity Model"
          subtitle="Five maturity levels for measuring E&C program quality"
        >
          <div className="space-y-4 text-sm">
            <div className="grid gap-2">
              {maturityLevels.map((level) => (
                <div key={level.id} className="rounded-md bg-slate-50 p-3 dark:bg-slate-800/60">
                  <p className="font-medium text-slate-800 dark:text-slate-100">
                    <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded bg-blue-600 text-xs font-bold text-white">
                      {level.letter}
                    </span>
                    {level.name}
                  </p>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">{level.description}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-700 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white">Key research finding:</strong> the higher the
              program quality, the stronger the culture, and the lower the risk of ethical violations. Most assessed
              organizations currently sit at the <strong className="text-slate-900 dark:text-white">Managing</strong>{" "}
              level.
            </p>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">Why programs regress</h4>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                {regressionCauses.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </Accordion>

        <Accordion
          key={`ceco-${activeId}`}
          id="ceco"
          defaultOpen={activeId === "ceco"}
          title="The CECO Role"
          subtitle="Chief Ethics and Compliance Officer: value, qualities, and influence"
        >
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">Five ways the CECO adds value</h4>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                {cecoValueAdds.map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">Seven qualities and skills of an effective CECO</h4>
              <ul className="mt-2 space-y-1.5 pl-0 text-slate-700 dark:text-slate-300">
                {cecoQualities.map((q, i) => (
                  <li key={i}>
                    <span className="font-medium text-slate-800 dark:text-slate-100">{q.quality}:</span> {q.detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {powerTypes.map((pw) => (
                <div key={pw.type} className="rounded-md bg-slate-50 p-3 dark:bg-slate-800/60">
                  <p className="font-medium text-slate-800 dark:text-slate-100">{pw.type}</p>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">{pw.definition}</p>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">{pw.builtVia}</p>
                </div>
              ))}
            </div>

            <p className="text-slate-700 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white">{vuca.acronym}</strong> ({vuca.full}): {vuca.note}
            </p>

            <p className="italic text-slate-600 dark:text-slate-400">
              "It's this reputation, more than your title, that will earn you a seat at the table and is one of the
              strongest levers you have to lead an effective, high-quality ethics and compliance program."
            </p>
          </div>
        </Accordion>

        <Accordion
          key={`risk-management-${activeId}`}
          id="risk-management"
          defaultOpen={activeId === "risk-management"}
          title="Risk Management Approach (ERM / GRC / IRM)"
          subtitle="How E&C risk fits into enterprise risk management"
        >
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">ERM risk factors</h4>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                {ermRiskFactors.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">From GRC to Integrated Risk Management</h4>
              <div className="mt-2 space-y-2">
                {grcEvolution.map((g, i) => (
                  <div key={i} className="rounded-md bg-slate-50 p-3 dark:bg-slate-800/60">
                    <p className="font-medium text-slate-800 dark:text-slate-100">
                      {g.stage} <span className="font-normal text-slate-500 dark:text-slate-400">— {g.period}</span>
                    </p>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">{g.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">Risk indicator types</h4>
              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                {riskIndicators.map((ri) => (
                  <div key={ri.type} className="rounded-md bg-slate-50 p-3 dark:bg-slate-800/60">
                    <p className="font-medium text-slate-800 dark:text-slate-100">
                      {ri.type} — {ri.name}
                    </p>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">{ri.definition}</p>
                    <p className="mt-1 text-xs italic text-slate-500 dark:text-slate-400">e.g., {ri.example}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-slate-200 p-3 dark:border-slate-700">
              <h4 className="font-semibold text-slate-900 dark:text-white">Risk value formula</h4>
              <p className="mt-1 font-mono text-slate-800 dark:text-slate-100">{riskValueFormula.formula}</p>
              <p className="mt-1 text-slate-600 dark:text-slate-300">Example: {riskValueFormula.example}</p>
              <p className="mt-1 text-slate-600 dark:text-slate-300">{riskValueFormula.note}</p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">Visualizing risk assessment results</h4>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                {riskVisualizationMethods.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </Accordion>

        <Accordion
          key={`global-standards-${activeId}`}
          id="global-standards"
          defaultOpen={activeId === "global-standards"}
          title="Global Standards & ESG"
          subtitle="ISO compliance standards and the ESG / E&C connection"
        >
          <div className="space-y-4 text-sm">
            <div className="space-y-2">
              {globalStandards.map((s) => (
                <div key={s.id} className="rounded-md bg-slate-50 p-3 dark:bg-slate-800/60">
                  <p className="font-medium text-slate-800 dark:text-slate-100">
                    {s.name} <span className="font-normal text-slate-500 dark:text-slate-400">— {s.year}</span>
                  </p>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">{s.summary}</p>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white">Where ESG and E&amp;C risk overlap</h4>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="py-2 pr-4 font-semibold text-slate-900 dark:text-white">Category</th>
                      <th className="py-2 pr-4 font-semibold text-slate-900 dark:text-white">ESG Examples</th>
                      <th className="py-2 font-semibold text-slate-900 dark:text-white">E&amp;C Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    {esgEcMapping.map((row) => (
                      <tr key={row.category} className="border-b border-slate-100 align-top dark:border-slate-800">
                        <td className="py-2 pr-4 font-medium text-slate-800 dark:text-slate-100">{row.category}</td>
                        <td className="py-2 pr-4 text-slate-600 dark:text-slate-300">{row.esgExamples.join(", ")}</td>
                        <td className="py-2 text-slate-600 dark:text-slate-300">{row.ecExamples.join(", ")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Accordion>

        <Accordion
          key={`glossary-${activeId}`}
          id="glossary"
          defaultOpen={activeId === "glossary"}
          title="Glossary of Acronyms"
          subtitle="E&C and LPEC course terminology"
        >
          <div className="grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
            {acronyms.map((a) => (
              <p key={a.acronym} className="text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white">{a.acronym}</span> — {a.full}
              </p>
            ))}
          </div>
        </Accordion>
      </div>
    </div>
  );
}
