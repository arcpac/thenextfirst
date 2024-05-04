"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
  onCreatePost: () => void;
}

const MainNav = ({ onCreatePost }: Props) => {
  return (
    <nav className="flex flex-col items-center border-b px-5 mb-10 py-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button onClick={onCreatePost}>Create post</Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/heroes">Marvel Heroes</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/heroes/share">Share marvel heroes</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/community">Community</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default MainNav;
