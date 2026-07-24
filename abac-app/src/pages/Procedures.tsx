import { useParams } from "react-router-dom";
import { procedures } from "../data/procedures";
import Accordion from "../components/Accordion";

export default function Procedures() {
  const { anchor } = useParams();
  const activeId = anchor ?? "";

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Operational Procedures</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-300">
          Step-by-step procedures that put the ABAC policy into practice — the workflows employees and compliance
          teams actually follow day to day.
        </p>
      </header>

      <div className="space-y-3">
        {procedures.map((proc) => (
          <Accordion
            key={`${proc.id}-${activeId}`}
            id={proc.id}
            defaultOpen={proc.id === activeId}
            title={proc.title}
            subtitle={`Owner: ${proc.owner}`}
          >
            <div className="space-y-4 text-sm">
              <p className="text-slate-700 dark:text-slate-200">
                <span className="font-semibold text-slate-900 dark:text-white">Purpose: </span>
                {proc.purpose}
              </p>
              <p className="text-slate-700 dark:text-slate-200">
                <span className="font-semibold text-slate-900 dark:text-white">Trigger: </span>
                {proc.trigger}
              </p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Steps</h4>
                <ol className="mt-2 space-y-2">
                  {proc.steps.map((s, i) => (
                    <li key={i} className="rounded-md bg-slate-50 p-3 dark:bg-slate-800/60">
                      <p className="font-medium text-slate-800 dark:text-slate-100">{s.step}</p>
                      <p className="mt-0.5 text-slate-600 dark:text-slate-300">{s.detail}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {proc.redFlagsToEscalate && (
                <div className="rounded-md border border-red-200 bg-red-50 p-3 dark:border-red-900 dark:bg-red-950/40">
                  <h4 className="font-semibold text-red-800 dark:text-red-300">Escalate immediately if you see:</h4>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-red-800/90 dark:text-red-200/90">
                    {proc.redFlagsToEscalate.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
