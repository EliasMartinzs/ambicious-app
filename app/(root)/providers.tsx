"use client";

import { NextUIProvider } from "@nextui-org/react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProvider,
} from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="arcade"
        enableSystem={false}
        themes={["arcade", "billboard", "campfire", "mystical", "summer"]}
      >
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
