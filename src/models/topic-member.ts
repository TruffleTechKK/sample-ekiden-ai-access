import type { WrappedTimestamp } from '../providers/client-provider';
import type { ID, Model, Response } from './models';

export enum TopicMemberRole {
  Runner = 'runner',
  Coach = 'coach',
}

export interface TopicMemberCommon {
  topicId: ID;
  userId: ID;
  role: TopicMemberRole;
  ai: boolean;

  lastReadMessageId?: ID | null;
  lastReadMessageAt?: WrappedTimestamp;
  lastMessageSentId?: ID | null;
  lastReadMessageCreatedAt?: WrappedTimestamp | null;
}

export interface TopicMember extends TopicMemberCommon, Model { }
export interface TopicMemberResponse extends TopicMemberCommon, Response { }
