"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";


import { themes } from "@/constants";
import { cn } from "@/lib/utils";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full flex flex-col items-start justify-center">
      <h3 className="text-lg font-black">Temas</h3>
      <div className="flex flex-col gap-y-2 mt-3">
        {themes.map((them) => {
          const isActive =
            theme === them
              ? "border-b border-primary-500 pb-2 text-primary-500"
              : "";
          return (
            <p
              key={them}
              className={cn(
                "font-light capitalize w-full cursor-pointer",
                isActive
              )}
              onClick={() => setTheme(them)}
            >
              {them}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSwitch;
