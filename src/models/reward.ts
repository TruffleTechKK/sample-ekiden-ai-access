import type { WrappedTimestamp } from "../providers/client-provider";
import type { ID, Model } from "./models";

export enum RewardType {
  SUBSCRIPTION_EXTENSION = "subscription-extension"
}

export enum RewardStatus {
  PENDING = "pending",
  REDEEMED = "redeemed",
  EXPIRED = "expired"
}

export interface RewardCommon {
  userId: ID;
  type: RewardType;
  status: RewardStatus;

  autoRedeem: boolean;

  expirationDate?: WrappedTimestamp;
  redeemedAt?: WrappedTimestamp;
}

export interface ExtensionReward extends RewardCommon, Model {
  type: RewardType.SUBSCRIPTION_EXTENSION;
  extensionDurationInDays: number;
  rewardSubscriptionId: ID;
}

export type Reward = ExtensionReward;
