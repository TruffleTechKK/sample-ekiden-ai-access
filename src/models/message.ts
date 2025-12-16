import type { User } from 'firebase/auth';
import type { Activity, ActivityFeedback } from './activity';
import type { Command } from './command';
import type { ID, Model, Optional, Response } from './models';
import type { Photo } from './photo';

export enum MessageType {
  Text = 'text',
  Update = 'update',
  PostActivitySurvey = 'post-activity-survey',
}

export enum AttachmentType {
  Image = 'image',
  File = 'file',
  Video = 'video',
  Activity = 'activity',
  ActivityFeedback = 'activity-feedback',
}

export interface ImageAttachment {
  type: AttachmentType.Image;
  url: string;
  photo: Photo;
}

export interface FileAttachment {
  type: AttachmentType.File;
  url: string;
  photo: Photo;
}

export interface VideoAttachment {
  type: AttachmentType.Video;
  url: string;
}

export interface ActivityAttachment {
  type: AttachmentType.Activity;
  activityId: string;
  activity: Activity;
}

export interface ActivityFeedbackAttachment {
  type: AttachmentType.ActivityFeedback;
  feedback: ActivityFeedback;
}

export type Attachment = ImageAttachment | VideoAttachment | ActivityAttachment | FileAttachment | ActivityFeedbackAttachment;
export enum Feedback {
  Positive = 'positive',
  Negative = 'negative',
}
export interface MessageFeedback {
  type: Feedback;
  reasons: string[];
  comment: string;
  userId: ID;
  allowRepliesFromEkiden?: boolean;
}

export enum MessageResponseStatus {
  Initializing = 'initializing',
  Reasoning = 'reasoning',
  Generating = 'generating',
  Completed = 'completed',
  Suggesting = 'suggesting',
  Retrying = 'retrying',
  Error = 'error',
}

export interface MessageCommon {
  type: MessageType;
  content: string;
  userId: string;
  user: Optional<User>;

  respondToMessageId?: ID;

  receiving: boolean;

  topicId: string;

  prompts?: string[];

  fromApp: 'runner' | 'coach';

  commands?: Command[];

  attachments?: Attachment[];

  unsafe?: boolean;

  isInitialFeedback?: boolean;

  suggestions?: string[];

  prompt?: string;
  suggestionPrompt?: string;

  hasFeedback?: boolean;
  feedback?: MessageFeedback;

  savedBys?: ID[];

  error?: string;
  retried?: boolean;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  suggestionUsage?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responseUsage?: any;

  responseStatus?: MessageResponseStatus | null;
}

export interface Message extends MessageCommon, Model { }
export interface MessageResponse extends MessageCommon, Response { }
