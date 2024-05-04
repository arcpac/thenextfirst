import Link from "next/link";
import React, { ReactNode } from "react";
interface NavLinkProps {
  href: string;
  className: string;
  children: ReactNode;
}
const NavLink = ({ children, href, className }: NavLinkProps) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;
