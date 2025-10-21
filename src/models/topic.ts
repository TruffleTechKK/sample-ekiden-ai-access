import type { ModelType } from './ai';
import type { PromptState } from './coach-plan';
import type { ID, Model, Response } from './models';

export interface TopicCommon {
  title: string | null;
  activityId: ID | null;

  runnerIds: ID[];
  coachIds: ID[];

  userIds: ID[];

  lastMessageId?: ID | null;
  lastMessageAt?: Date | null;
  lastMessageBy?: ID | null;
  lastMessageUnreadBy?: ID[] | null;

  planId?: ID | null;

  model: ModelType;
  summary?: string;

  test?: boolean;
  prompt?: PromptState;
}

export interface Topic extends TopicCommon, Model { }
export interface TopicResponse extends TopicCommon, Response { }

export interface CreateTopicWithUsersRequest {
  runnerIds: ID[];
  coachIds: ID[];
  activityId: ID | null;
  forceCreate?: boolean;
}
