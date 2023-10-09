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
import { useDispatch, useSelector } from '@/redux/store';
import { addTask } from '@/redux/slices/task/task.slice';
import { selectorTask } from '@/redux/slices/selector';

const taskSchema = z.object({
  task: z
    .string()
    .min(2, {
      message: 'A tarefa tem que conter no minimo 2 caracteres',
    })
    .max(50),
});

export default function AddList() {
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      task: '',
    },
  });

  const sumbitTask = (values: z.infer<typeof taskSchema>) => {
    dispatch(addTask(values));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="hover:bg-primary-300">
          <Plus /> Novo
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
                    <Input placeholder="shadcn" {...field} />
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

// <div className="grid gap-4 py-4">
// <div className="grid grid-cols-4 items-center gap-4">
//   <Label htmlFor="tarefas" className="text-right">
//     Tarefas
//   </Label>
//   <Input
//     id="tarefas"
//     className="col-span-3"
//     value={task}
//     onChange={e => {
//       setTask(e.target.value);
//     }}
//   />
// </div>
// </div>
