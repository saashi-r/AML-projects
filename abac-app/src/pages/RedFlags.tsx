import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { redFlagScenarios } from "../data/redFlags";

export default function RedFlags() {
  const { anchor } = useParams();
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(redFlagScenarios.map((r) => r.category)))],
    []
  );
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (anchor) {
      document.getElementById(anchor)?.scrollIntoView({ block: "center" });
    }
  }, [anchor]);

  const filtered =
    category === "All" ? redFlagScenarios : redFlagScenarios.filter((r) => r.category === category);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Red Flag Scenarios</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-300">
          Realistic scenarios that should trigger caution, further diligence, or escalation. Recognizing patterns
          like these is often more useful than memorizing rules.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              category === c
                ? "bg-red-600 text-white"
                : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((rf) => (
          <article
            key={rf.id}
            id={rf.id}
            className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
          >
            <span className="inline-block rounded bg-red-100 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-red-700 dark:bg-red-950 dark:text-red-300">
              🚩 {rf.category}
            </span>
            <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">{rf.scenario}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-800 dark:text-slate-100">Why it matters: </span>
              {rf.whyItMatters}
            </p>
            <div className="mt-3">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Indicators
              </h4>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-300">
                {rf.indicators.map((ind, i) => (
                  <li key={i}>{ind}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
