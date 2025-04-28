import { z } from "zod";

const TodoDto = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
})

export const TodosDto = z.array(TodoDto);
export type TodosDtoType = z.infer<typeof TodosDto>;