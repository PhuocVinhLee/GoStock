"use client";

import {
  BarChart,
  Compass,
  FileQuestion,
  FileQuestionIcon,
  Layout,
  List,
  Users,
} from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";
import NavBarItem from "./navbar-item";

const guestRoutes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Service",
    href: "/service",
  },
  {
    label: "Product",
    href: "/product",
  },
  {
    label: "About us",
    href: "/about",
  },
 
];

const NavBarRoutes = () => {
  const routes = guestRoutes;
  return (
    <div className="flex w-full border items-center justify-center gap-x-6   text-stone-300">
      {routes.map((route) => (
        <NavBarItem
          key={route.href}
        
          label={route.label}
          href={route.href}
        ></NavBarItem>
      ))}
    </div>
  );
};

export default NavBarRoutes;
