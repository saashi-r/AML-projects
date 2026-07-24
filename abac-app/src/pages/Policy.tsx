import { policySections } from "../data/policy";

export default function Policy() {
  return (
    <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
      <aside className="hidden lg:block">
        <nav className="sticky top-24 space-y-1 text-sm">
          <p className="mb-2 font-semibold text-slate-900 dark:text-white">On this page</p>
          {policySections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="block rounded px-2 py-1 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </aside>

      <div className="space-y-8">
        <header>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Model Anti-Bribery &amp; Anti-Corruption Policy
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-300">
            A complete, adaptable policy template. Treat this as a starting point — tailor thresholds, approval
            routes, and legal references to your organization's size, risk profile, and applicable law.
          </p>
        </header>

        {policySections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{section.title}</h2>
            <div className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {section.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {section.bullets && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-700 dark:text-slate-300">
                {section.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
