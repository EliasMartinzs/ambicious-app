'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AddList from '../Shared/AddList';
import { useSelector } from '@/redux/store';
import { selectorDay } from '@/redux/slices/selector';
import { Checkbox } from '../ui/checkbox';

type DayCardProps = {
  dayOfWeek: string;
};

type Weeks = { day: string; values: { task: string }; id: string };

export default function WeekCard({ dayOfWeek }: DayCardProps) {
  const week = useSelector(selectorDay);
  const weeks = week[dayOfWeek];

  return (
    <Card className="border-none bg-primary-900/10">
      <CardHeader className="px-2 py-1 text-foreground">
        <CardTitle className="w-full flex-between text-lg">
          {dayOfWeek} <AddList dayOfWeek={dayOfWeek} />
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-5 px-3 flex flex-col gap-y-2">
        {weeks.length === 0 ? (
          <p className="font-extralight text-sm">Nenhuma tarefa adicionada</p>
        ) : (
          weeks.map((item: any) => {
            const items: Weeks = item;

            return (
              <div className="flex items-center space-x-2" key={items.id}>
                <Checkbox />
                <label
                  htmlFor={items.values.task}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {items.values.task}
                </label>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}
