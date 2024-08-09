import { z } from "zod";

const createTodo = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

const updateToDo = z.object({
  id: z.string(),
});

export { createTodo, updateToDo };
//export { createTodo as createTodo, updateToDo as updateToDo };
