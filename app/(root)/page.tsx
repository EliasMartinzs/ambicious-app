import CentralImage from "@/components/CentralImage";
import Clock from "@/components/Shared/Clock";
import Separator from "@/components/Shared/Separator";
import Weeks from "@/components/Weeks";
import { Name } from "@/components/config/Name";

export default function page() {
  return (
    <main className="w-full">
      <CentralImage />
      <Name size="xxl" className="font-bold py-5" />
      <Separator />
      <section className="flex flex-row">
        <div className="w-1/4 bg-red-500 h-96">
          <Clock />
        </div>
        <div className="w-3/4">
          <Weeks />
        </div>
      </section>
    </main>
  );
}
