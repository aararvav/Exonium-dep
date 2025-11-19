import { z } from "zod";

export const createCommentSchema = z.object({
  content: z.string().trim().min(1, "Comment cannot be empty").max(1000, "Comment is too long"),
});

export const getCommentsSchema = z.object({
  taskId: z.string().min(1, "Task ID is required"),
});
