import { useLocation } from "react-router-dom";
import { faqItems } from "../data/faq";
import Accordion from "../components/Accordion";

export default function Faq() {
  const { hash } = useLocation();
  const activeId = hash.slice(1);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-300">
          Quick answers to the questions employees ask most often about gifts, facilitation payments, and third
          parties.
        </p>
      </header>

      <div className="space-y-3">
        {faqItems.map((f) => (
          <Accordion key={`${f.id}-${activeId}`} id={f.id} defaultOpen={f.id === activeId} title={f.question}>
            <p className="text-sm text-slate-700 dark:text-slate-300">{f.answer}</p>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
