import { weekly } from '@/constants';
import WeekCard from './cards/WeekCard';

export default function Weeks() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mt-[25px]">
      {weekly.map((dayOfWeek, idx) => (
        <WeekCard dayOfWeek={dayOfWeek.title} key={idx} />
      ))}
    </section>
  );
}
