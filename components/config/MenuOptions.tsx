import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import ThemeSwitch from "./ThemeSwitcher";
import Users from "./Users";

export default function MenuOptions() {
  return (
    <Sheet>
      <SheetTrigger className="bg-slate-950 p-2 rounded-full hover:bg-slate-800">
        <SlidersHorizontal className="h-7 w-7" />
      </SheetTrigger>
      <SheetContent className="bg-[#191a19] border-l border-primary-500">
        <SheetHeader>
          <SheetTitle className="text-center text-3xl border-b border-primary-500/40 pb-2">
            Ambicious
          </SheetTitle>
          <SheetDescription className="gap-y-5 flex-start flex-col">
            <Users />
            <ThemeSwitch />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
