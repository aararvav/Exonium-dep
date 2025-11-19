import { Request, Response } from "express";
import {
  createCommentService,
  getCommentsService,
  deleteCommentService,
} from "../services/comment.service";
import { createCommentSchema } from "../validation/comment.validation";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";

export const createComment = asyncHandler(
  async (req: Request, res: Response) => {
    const { workspaceId, taskId } = req.params;
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { content } = createCommentSchema.parse(req.body);

    const comment = await createCommentService(
      taskId,
      userId,
      workspaceId,
      content
    );

    res.status(201).json({
      message: "Comment created successfully",
      comment,
    });
  }
);

export const getComments = asyncHandler(
  async (req: Request, res: Response) => {
    const { workspaceId, taskId } = req.params;

    const comments = await getCommentsService(taskId, workspaceId);

    res.status(200).json({
      message: "Comments retrieved successfully",
      comments,
    });
  }
);

export const deleteComment = asyncHandler(
  async (req: Request, res: Response) => {
    const { workspaceId, commentId } = req.params;
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const result = await deleteCommentService(commentId, userId, workspaceId);

    res.status(200).json(result);
  }
);
