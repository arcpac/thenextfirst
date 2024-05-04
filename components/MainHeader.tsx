"use client";
import Link from "next/link";
import React from "react";
import logoImg from "@/assets/marvel-logo.png";
import classes from "./MainHeader.module.css";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
interface Props {
  onCreatePost: () => void;
}

const MainHeader = () => {
  const pathName = usePathname();

  return (
    <header>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="Marvel Studios" priority />
        <p className="text-black dark:text-zinc-200">Marvel Hero Catalouge</p>
      </Link>

      <nav className="flex justify-center my-5">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/heroes" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <p
                    className={`text-lg lg:text-1xl ${
                      pathName === "/heroes" && classes.active
                    }`}
                  >
                    Browse Heroes
                  </p>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/heroes/share" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <p
                    className={`text-lg lg:text-1xl ${
                      pathName.startsWith("/heroes/share") && classes.active
                    }`}
                  >
                    Share marvel heroes
                  </p>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/community" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <p
                    className={`text-lg lg:text-1xl ${
                      pathName.startsWith("/community") && classes.active
                    }`}
                  >
                    Marvel Community
                  </p>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default MainHeader;
