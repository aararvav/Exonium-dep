import { Router } from "express";
import {
  createComment,
  getComments,
  deleteComment,
} from "../controllers/comment.controller";

const router = Router();

// Get comments for a task
router.get("/:workspaceId/tasks/:taskId/comments", getComments);

// Create a comment on a task
router.post("/:workspaceId/tasks/:taskId/comments", createComment);

// Delete a comment
router.delete("/:workspaceId/comments/:commentId", deleteComment);

export default router;
