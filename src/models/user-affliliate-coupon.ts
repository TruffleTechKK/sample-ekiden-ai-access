import type { Model } from './models';

export enum UserAffiliateCouponStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}
export interface UserAffiliateCouponCommon {
  userId: string;
  code: string;
  status: UserAffiliateCouponStatus;
  stripeCouponId: string;

  availableAt: Date | null;
  expiresAt: Date | null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stripeCoupon: any;
}

export interface UserAffiliateCoupon extends UserAffiliateCouponCommon, Model {}
