'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useDispatch } from '@/redux/store';
import uniqid from 'uniqid';
import { addTask } from '@/redux/slices/weeks/weeks.slice';
import { updateUser } from '@/lib/actions/user.actions';
import { useUser } from '@clerk/nextjs';

const taskSchema = z.object({
  task: z
    .string()
    .min(2, {
      message: 'A tarefa tem que conter no minimo 2 caracteres',
    })
    .max(50),
});

type DayCardProps = {
  dayOfWeek: string;
};

export default function AddList({ dayOfWeek }: DayCardProps) {
  const userAuth = useUser();
  const { user } = userAuth;
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      task: '',
    },
  });

  const sumbitTask = async (values: z.infer<typeof taskSchema>) => {
    dispatch(addTask({ day: dayOfWeek, values, id: uniqid() }));

    await updateUser({
      userId: user?.id || '',
      name: user?.fullName || '',
      task: values.task,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="hover:bg-primary-300/50 p-0 w-5 h-5"
        >
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-none shadow-2xl">
        <DialogHeader>
          <DialogTitle>Adicionar Tarefas</DialogTitle>
          <DialogDescription>
            Adicione tarefas que ira realizar no dia dia.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(sumbitTask)} className="space-y-8">
            <FormField
              control={form.control}
              name="task"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tarefas</FormLabel>
                  <FormControl>
                    <Input placeholder="Tarefa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Salvar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
