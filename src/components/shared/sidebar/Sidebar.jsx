import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CassetteTape,
  Wallet,
  Target,
  BarChart2,
} from "lucide-react";

const links = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/categories", label: "Categories", icon: CassetteTape },
  { path: "/budget", label: "Budgets", icon: Wallet },
  { path: "/goals", label: "Goals", icon: Target },
  { path: "/reports", label: "Reports", icon: BarChart2 },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-60 h-full bg-white border-r pt-16">
      <nav className="flex-1 overflow-y-auto border-t">
        <ul className="space-y-2 p-4">
          {links.map(({ path, label, icon: Icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                    isActive
                      ? "text-blue-500 font-medium"
                      : "text-muted-foreground font-normal",
                  ].join(" ")
                }
              >
                <Icon size={20} strokeWidth={1.8} />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
