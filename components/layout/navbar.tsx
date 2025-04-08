import Link from "next/link";
import { Clock } from "lucide-react";
import HeaderAuth from "@/components/header-auth"; 

interface NavLink {
  href: string;
  label: string;
  active?: boolean;
}

interface NavbarProps {
  currentPath?: string;
}

export function Navbar({ currentPath = "/" }: NavbarProps) {
  const links: NavLink[] = [
    {
      href: "/protected/dashboard",
      label: "Dashboard",
      active: currentPath === "/protected/dashboard",
    },
    {
      href: "/protected/employees",
      label: "Employees",
      active: currentPath === "/protected/employees",
    },
    {
      href: "/protected/shifts",
      label: "Shifts",
      active: currentPath === "/protected/shifts",
    },
    {
      href: "/protected/schedule",
      label: "Schedule",
      active: currentPath === "/protected/schedule",
    },
  ];

  return (
    <header className="sticky top-0 z-10 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2 font-semibold">
          <Clock className="h-5 w-5" />
          <span>DoVen</span>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium ${
                link.active
                  ? "underline underline-offset-4"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <HeaderAuth />
        </nav>
      </div>
    </header>
  );
}