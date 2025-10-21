import type { WrappedTimestamp } from "../providers/client-provider";
import type { Model } from "./models";

export enum ReferralLogStatus {
  LOGGED_IN = 'LOGGED_IN',
  TRIALING = 'TRIALING',
  SUBSCRIPTION_ACTIVE = 'SUBSCRIPTION_ACTIVE',
}

export enum RewardRefusalReason {
  NO_ACTIVE_SUBSCRIPTION = 'NO_ACTIVE_SUBSCRIPTION',
  MAXIMUM_REFERRALS_REACHED = 'MAXIMUM_REFERRALS_REACHED',
  USER_NOT_ELIGIBLE = 'USER_NOT_ELIGIBLE',
  OTHER = 'OTHER',
}
export interface ReferralLogCommon {
  userId: string;
  referralCode: string;
  referredUserId: string;
  loggedInAt: WrappedTimestamp;
  trailedAt?: WrappedTimestamp;
  subscriptionActiveAt?: WrappedTimestamp;
  status: ReferralLogStatus;

  referralAwarded: boolean;
  awardedAt?: WrappedTimestamp;

  awardRefused?: boolean;
  refusedAt?: WrappedTimestamp;
  refusalReason?: RewardRefusalReason;
}

export interface ReferralLog extends ReferralLogCommon, Model {
}
