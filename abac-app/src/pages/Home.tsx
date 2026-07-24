import { Link } from "react-router-dom";
import { laws } from "../data/laws";
import { procedures } from "../data/procedures";
import { redFlagScenarios } from "../data/redFlags";

const cards = [
  {
    to: "/laws",
    title: "Laws",
    icon: "📜",
    description: "Summaries of key anti-bribery and anti-corruption statutes and treaties from around the world.",
    stat: `${laws.length} jurisdictions/instruments`,
  },
  {
    to: "/policy",
    title: "Company Policy",
    icon: "📘",
    description: "A full model Anti-Bribery and Anti-Corruption policy covering gifts, third parties, and reporting.",
    stat: "13 policy sections",
  },
  {
    to: "/procedures",
    title: "Procedures",
    icon: "✅",
    description: "Step-by-step operational procedures compliance teams and employees actually follow.",
    stat: `${procedures.length} procedures`,
  },
  {
    to: "/red-flags",
    title: "Red Flags",
    icon: "🚩",
    description: "Realistic scenarios and warning signs that indicate elevated bribery or corruption risk.",
    stat: `${redFlagScenarios.length} scenarios`,
  },
  {
    to: "/faq",
    title: "FAQ",
    icon: "❓",
    description: "Quick answers to the questions employees ask most often about gifts, payments, and third parties.",
    stat: "Common questions",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <p className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          Anti-Bribery &amp; Anti-Corruption
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Laws, Policy, and Procedures — in One Place
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          A reference hub for understanding global anti-bribery and anti-corruption (ABAC) laws, a model company
          policy, and the day-to-day procedures that turn that policy into practice.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <span className="text-2xl">{card.icon}</span>
            <h2 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h2>
            <p className="mt-1 flex-1 text-sm text-slate-600 dark:text-slate-300">{card.description}</p>
            <p className="mt-3 text-xs font-medium text-blue-600 dark:text-blue-400">{card.stat} →</p>
          </Link>
        ))}
      </section>

      <section className="rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/40">
        <h2 className="font-semibold text-amber-900 dark:text-amber-200">The core principle</h2>
        <p className="mt-1 text-sm text-amber-900/90 dark:text-amber-100/90">
          Bribery and corruption laws vary by country, but the safest operating standard is simple: never offer,
          promise, give, request, or accept anything of value to improperly influence a decision — and apply the
          strictest applicable rule wherever laws differ.
        </p>
      </section>
    </div>
  );
}
