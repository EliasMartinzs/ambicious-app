"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import ThemeSwitch from "@/components/config/ThemeSwitcher";

export default function CentralImage() {
  const { resolvedTheme } = useTheme();
  let src;

  const themeStorage = localStorage.getItem("theme");

  switch (themeStorage) {
    case "arcade":
      src = "/themes/arcade.webp";
      break;
    case "billboard":
      src = "/themes/billboard.webp";
      break;
    case "campfire":
      src = "/themes/campfire.webp";
      break;
    case "mystical":
      src = "/themes/mystical.webp";
      break;
    case "summer":
      src = "/themes/summer.webp";
      break;
    default:
      src = "/themes/arcade.webp";
      break;
  }

  return (
    <section className="w-full h-[500px] relative overflow-hidden">
      <Image
        src={src}
        alt="mystical"
        className="object-cover object-center saturate-200"
        fill
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        priority
      />

      <div className="absolute inset-0 z-[999]">
        <ThemeSwitch />
      </div>
    </section>
  );
}