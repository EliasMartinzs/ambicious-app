'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';

const FormSchema = z.object({
  items: z.array(z.string()).refine(value => value.some(item => item), {
    message: 'You have to select at least one item.',
  }),
});

export default function Check({ dailyTask }: { dailyTask: string }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <FormField
                control={form.control}
                name="items"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox />
                      </FormControl>
                      <FormLabel className="font-normal">{dailyTask}</FormLabel>
                    </FormItem>
                  );
                }}
              />
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

// {items.map(item => (
//   <FormField
//     key={item.id}
//     control={form.control}
//     name="items"
//     render={({ field }) => {
//       return (
//         <FormItem
//           key={item.id}
//           className="flex flex-row items-start space-x-3 space-y-0"
//         >
//           <FormControl>
//             <Checkbox
//               checked={field.value?.includes(item.id)}
//               onCheckedChange={checked => {
//                 return checked
//                   ? field.onChange([...field.value, item.id])
//                   : field.onChange(
//                       field.value?.filter(
//                         value => value !== item.id
//                       )
//                     );
//               }}
//             />
//           </FormControl>
//           <FormLabel className="font-normal">
//             {item.label}
//           </FormLabel>
//         </FormItem>
//       );
//     }}
//   />
// ))}
