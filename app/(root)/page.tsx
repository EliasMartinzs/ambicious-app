import CentralImage from '@/components/CentralImage';
import AddList from '@/components/Shared/AddList';
import Clock from '@/components/Shared/Clock';
import Separator from '@/components/Shared/Separator';
import Weeks from '@/components/Weeks';
import { Name } from '@/components/config/Name';

export default function page() {
  return (
    <main className="w-full">
      <CentralImage />
      <Name size="xxl" className="font-bold pt-5" />
      <section className="grid grid-cols-1 md:grid-cols-12 paddings">
        <div className="clock-grid">
          <Clock />
        </div>
        <div className="weeks-grid">
          <Weeks />
        </div>
      </section>
    </main>
  );
}
