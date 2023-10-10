'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AddList from '../Shared/AddList';
import { useDispatch, useSelector } from '@/redux/store';
import { selectorDay } from '@/redux/slices/selector';
import { Checkbox } from '../ui/checkbox';
import { Trash } from 'lucide-react';
import { removeTask } from '@/redux/slices/weeks/weeks.slice';
import { useState } from 'react';

type DayCardProps = {
  dayOfWeek: string;
};

type Weeks = { day: string; values: { task: string }; id: string };

export default function WeekCard({ dayOfWeek }: DayCardProps) {
  const dispatch = useDispatch();
  const week = useSelector(selectorDay);
  const weeks = week[dayOfWeek];

  return (
    <Card className="border-none bg-primary-900/10 max-h-60 overflow-y-auto scroll">
      <CardHeader className="px-2 py-1 text-foreground bg-primary-500">
        <CardTitle className="w-full flex-between text-lg">
          {dayOfWeek} <AddList dayOfWeek={dayOfWeek} />
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-5 px-3 flex flex-col gap-y-3">
        {weeks.length === 0 ? (
          <p className="font-extralight text-sm">Nenhuma tarefa adicionada</p>
        ) : (
          weeks.map((item: any) => {
            const items: Weeks = item;

            const active = items.values.task;
            return (
              <div className="flex items-center space-x-2" key={items.id}>
                <Checkbox />
                <label
                  htmlFor={items.values.task}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-between w-full"
                >
                  {items.values.task}
                  <Trash
                    onClick={() =>
                      dispatch(removeTask({ day: dayOfWeek, items: items }))
                    }
                    className="w-4 h-4"
                  />
                </label>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}
