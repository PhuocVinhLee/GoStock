import { cn } from "@/lib/utils";

import { usePathname, useRouter } from "next/navigation";

interface NavBarItemProps {
  label: string;
  href: string;
}

const NavBarItem = ({ label, href }: NavBarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onclick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onclick}
      type="button"
      className={cn( isActive && "text-white")}
    >
      <div className="flex items-center gap-x-2 py-4">{label}</div>
      
    </button>
  );
};

export default NavBarItem;
