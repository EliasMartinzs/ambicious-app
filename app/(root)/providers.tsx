"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="arcade"
        themes={["arcade", "billboard", "campfire", "mystical", "summer"]}
      >
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
