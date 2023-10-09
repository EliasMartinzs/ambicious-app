import { weekly } from '@/constants';
import Check from './forms/Check';
import AddList from './Shared/AddList';

export default function Weeks() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mt-[25px]">
      {weekly.map((week, idx) => (
        <div className="w-full border border-primary-500 rounded-lg" key={idx}>
          <div className="w-full flex-between flex-row font-semibold bg-primary-500 text-foreground-50 hover:bg-primary-400 transition-colors">
            <h5 className="px-2 py-1 font-semibold">{week}</h5>
            <AddList />
          </div>
          <div className="border p-2">{/* <Check /> */}</div>
        </div>
      ))}
    </section>
  );
}
