import { Link, NavLink, Outlet } from "react-router-dom";
import SearchBox from "./SearchBox";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/laws", label: "Laws" },
  { to: "/policy", label: "Policy" },
  { to: "/procedures", label: "Procedures" },
  { to: "/red-flags", label: "Red Flags" },
  { to: "/faq", label: "FAQ" },
];

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              ⚖
            </span>
            <span className="text-base sm:text-lg">ABAC Compliance Hub</span>
          </Link>
          <nav className="ml-auto flex flex-wrap items-center gap-1 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-1.5 font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="w-full sm:ml-2 sm:w-64">
            <SearchBox />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p>
          Reference hub for general education only — not legal advice. Always consult qualified counsel and your
          organization's actual compliance policies for binding guidance.
        </p>
      </footer>
    </div>
  );
}
