"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import ThemeSwitch from "@/components/config/ThemeSwitcher";
import MenuOptions from "./config/MenuOptions";

export default function CentralImage() {
  const { resolvedTheme } = useTheme();
  let src;

  const themeStorage = localStorage.getItem("theme") || null;

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
    <section className="w-full h-60 md:h-72 lg:h-80 2xl:h-96 relative overflow-hidden">
      <Image
        src={src}
        alt="mystical"
        className="object-cover object-center saturate-200"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        priority
      />
      <div className="absolute inset-y-0 right-0 m-5">
        <MenuOptions />
      </div>
    </section>
  );
}
