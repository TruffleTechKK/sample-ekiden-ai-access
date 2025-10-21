import type { Model } from './models';

export enum UserAffiliateCouponRedeemStatus {
  REDEEMED = 'redeemed',
  PENDING = 'pending',
  EXPIRED = 'expired',
}

export interface UserAffiliateCouponRedeemCommon {
  userId: string;
  code: string;
  status: UserAffiliateCouponRedeemStatus;
  stripeCouponId: string;
  redeemedAt: Date | null;
  expiresAt: Date | null;
  couponId: string;
}

export interface UserAffiliateCouponRedeem extends UserAffiliateCouponRedeemCommon, Model {}
