"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Temas" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="arcade">Arcade</SelectItem>
        <SelectItem value="billboard">Bill Board</SelectItem>
        <SelectItem value="campfire">Camp Fire</SelectItem>
        <SelectItem value="mystical">Mystical</SelectItem>
        <SelectItem value="summer">Summer</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ThemeSwitch;
