"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
      />
      {/* <Label htmlFor="airplane-mode">Theme</Label> */}
    </div>
  );
}
