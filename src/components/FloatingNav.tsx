import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, Car, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/booking", label: "Booking", icon: Car },
  { to: "/contact", label: "Contact", icon: Mail },
];

const FloatingNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:top-4 md:bottom-auto">
      <div className="glass rounded-full px-2 py-2 flex items-center gap-1 shadow-lg shadow-foreground/5">
        {navItems.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to;
          return (
            <RouterNavLink
              key={to}
              to={to}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                active
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden md:inline">{label}</span>
            </RouterNavLink>
          );
        })}
        <div className="w-px h-6 bg-border mx-1 hidden md:block" />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default FloatingNav;
