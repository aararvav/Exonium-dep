import CommentModel from "../models/comment.model";
import TaskModel from "../models/task.model";
import { NotFoundException, UnauthorizedException } from "../utils/appError";

export const createCommentService = async (
  taskId: string,
  userId: string,
  workspaceId: string,
  content: string
) => {
  // Verify task exists and belongs to workspace
  const task = await TaskModel.findOne({
    _id: taskId,
    workspace: workspaceId,
  });

  if (!task) {
    throw new NotFoundException("Task not found");
  }

  const comment = await CommentModel.create({
    task: taskId,
    user: userId,
    workspace: workspaceId,
    content,
  });

  // Populate user details
  await comment.populate({
    path: "user",
    select: "name email profilePicture",
  });

  return comment;
};

export const getCommentsService = async (
  taskId: string,
  workspaceId: string
) => {
  // Verify task exists and belongs to workspace
  const task = await TaskModel.findOne({
    _id: taskId,
    workspace: workspaceId,
  });

  if (!task) {
    throw new NotFoundException("Task not found");
  }

  const comments = await CommentModel.find({
    task: taskId,
    workspace: workspaceId,
  })
    .populate({
      path: "user",
      select: "name email profilePicture",
    })
    .sort({ createdAt: 1 }); // Oldest first

  return comments;
};

export const deleteCommentService = async (
  commentId: string,
  userId: string,
  workspaceId: string
) => {
  const comment = await CommentModel.findOne({
    _id: commentId,
    workspace: workspaceId,
  });

  if (!comment) {
    throw new NotFoundException("Comment not found");
  }

  // Only the comment author can delete it
  if (comment.user.toString() !== userId) {
    throw new UnauthorizedException("You can only delete your own comments");
  }

  await CommentModel.deleteOne({ _id: commentId });

  return { message: "Comment deleted successfully" };
};
