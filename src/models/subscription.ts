import type { WrappedTimestamp } from '../providers/client-provider';
import type { ID, Model, Response } from './models';

export type SubscriptionStatus =
  | 'active'
  | 'canceled'
  | 'incomplete'
  | 'incomplete_expired'
  | 'past_due'
  | 'paused'
  | 'trialing'
  | 'unpaid';

export interface SubscriptionCommon {
  id: ID;
  userId: ID;

  status: SubscriptionStatus;
  currentPeriodStart: WrappedTimestamp;
  currentPeriodEnd: WrappedTimestamp;
  cancelAtPeriodEnd: boolean;
  canceledAt: WrappedTimestamp;
  endedAt: WrappedTimestamp;
  trialStart: WrappedTimestamp;
  trialEnd: WrappedTimestamp;

  stripeSubscriptionId: string;
  stripeProductId: string;
  stripePriceId: string;

  latestInvoiceId: ID;

  coachId: ID | null;
  planId: ID | null;

  isDefault: boolean | null;

  defaultPaymentMethodId: string | null;

  extended?: boolean;

  freemium?: boolean;
  switchToFreemiumAtPeriodEnd?: boolean;
}

export interface Subscription extends SubscriptionCommon, Model { }
export interface SubscriptionResponse extends SubscriptionCommon, Response { }
