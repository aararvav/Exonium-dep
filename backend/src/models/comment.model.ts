import mongoose, { Document, Schema } from "mongoose";

export interface CommentDocument extends Document {
  task: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  workspace: mongoose.Types.ObjectId;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new Schema<CommentDocument>(
  {
    task: {
      type: Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    workspace: {
      type: Schema.Types.ObjectId,
      ref: "Workspace",
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
commentSchema.index({ task: 1, createdAt: -1 });

const CommentModel = mongoose.model<CommentDocument>("Comment", commentSchema);

export default CommentModel;
