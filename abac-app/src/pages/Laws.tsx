import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { laws } from "../data/laws";
import Accordion from "../components/Accordion";

export default function Laws() {
  const [filter, setFilter] = useState<"all" | "extraterritorial">("all");
  const { anchor } = useParams();
  const activeId = anchor ?? "";

  const filtered = useMemo(
    () => (filter === "extraterritorial" ? laws.filter((l) => l.extraterritorial) : laws),
    [filter]
  );

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Anti-Bribery &amp; Anti-Corruption Laws</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-300">
          Summaries of major national laws and international instruments. This is general reference information,
          not legal advice — laws change and enforcement guidance evolves, so confirm current requirements with
          qualified counsel.
        </p>
      </header>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            filter === "all"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          All ({laws.length})
        </button>
        <button
          type="button"
          onClick={() => setFilter("extraterritorial")}
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            filter === "extraterritorial"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          Extraterritorial reach ({laws.filter((l) => l.extraterritorial).length})
        </button>
      </div>

      <div className="space-y-3">
        {filtered.map((law) => (
          <Accordion
            key={`${law.id}-${activeId}`}
            id={law.id}
            defaultOpen={law.id === activeId}
            title={law.shortName}
            subtitle={`${law.jurisdiction} · Enacted ${law.yearEnacted}${law.extraterritorial ? " · Extraterritorial reach" : ""}`}
          >
            <div className="space-y-4 text-sm">
              <p className="text-slate-700 dark:text-slate-200">{law.summary}</p>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Key Provisions</h4>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                  {law.keyProvisions.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Corporate Penalties</h4>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">{law.penalties.corporate}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Individual Penalties</h4>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">{law.penalties.individual}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Notable Features</h4>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
                  {law.notableFeatures.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">Enforcement Bodies</h4>
                <p className="mt-1 text-slate-700 dark:text-slate-300">{law.enforcementBodies.join(", ")}</p>
              </div>
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
