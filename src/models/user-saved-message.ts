import type { ID, Model } from "./models";

export enum UserSavedMessageStatus {
  Active = "active",
  Archived = "archived",
}

export interface UserSavedMessageCommon {
  userId: ID;
  messageId: ID;
  topicId: ID;
  status: UserSavedMessageStatus;
}

export interface UserSavedMessage extends UserSavedMessageCommon, Model { }
