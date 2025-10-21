import type { WrappedTimestamp } from '../providers/client-provider';
import type { ID, Model } from './models';

export enum NotificationType {
  NewMessage = 'new-message',
  InitialFeedback = 'initial-feedback',
  FeedbackRequest = 'feedback-request',
  BetaTesterApproved = 'beta-tester-approved',
  UserRegistered = 'user-registered',
  TrialEndsIn3Days = 'trial-ends-in-3-days',
  TrialEndsToday = 'trial-ends-today',
  TrialEndedChargedSuccess = 'trial-ended-charged-success',
  TrialEndedChargedFailed = 'trial-ended-charged-failed',

  SubscriptionExtendedReferrer = 'subscription-extended-referrer',
  SubscriptionExtendedReferred = 'subscription-extended-referred',
}

export enum NotificationStatus {
  PENDING = 'pending',
  SENDING = 'sending',
  SENT = 'sent',
  FAILED = 'failed',
}

export enum NotificationTrigger {
  SCHEDULED = 'scheduled',
  CREATION = 'creation',
  MANUAL = 'manual',
}

export interface Extra {
  [key: string]: string | number | boolean | WrappedTimestamp | Extra | Array<Extra> | Record<string, Extra>;
}

export interface NotificationCommon {
  type: NotificationType;
  topicId: ID;
  messageId: ID;
  targetUserId: ID;
  name: string;
  extra?: Extra;

  trigger?: NotificationTrigger;
  scheduledAt?: WrappedTimestamp;
  status: NotificationStatus;

  fromEmail?: string | null;
  fromName?: string | null;
  replyToEmail?: string | null;
}

export interface Notification extends NotificationCommon, Model { }
