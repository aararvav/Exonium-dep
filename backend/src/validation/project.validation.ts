import { z } from "zod";

export const emojiSchema = z.string().trim().optional();
export const nameSchema = z.string().trim().min(1).max(255);
export const descriptionSchema = z.string().trim().optional();
export const profilePictureSchema = z.string().url().optional().or(z.literal(""));

export const projectIdSchema = z.string().trim().min(1);

export const createProjectSchema = z.object({
  emoji: emojiSchema,
  name: nameSchema,
  description: descriptionSchema,
  profilePicture: profilePictureSchema,
});

export const updateProjectSchema = z.object({
  emoji: emojiSchema,
  name: nameSchema,
  description: descriptionSchema,
  profilePicture: profilePictureSchema,
});
