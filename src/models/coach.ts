import type { Response, Model } from './models';
import type { Photo } from './photo';
import type { User } from './user';

export enum CoachStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Suspended = 'SUSPENDED',
  Deleted = 'DELETED',
}

export interface CoachCommon {
  userId: string;
  user: Partial<User>;
  description: string;
  coachingStyle: string;
  status: CoachStatus;
  canAcceptNewAthlete: boolean;
  ai: boolean;

  displayName: string;
  email: string;
  phoneNumber: string;

  coverPhotoUrl?: string;
  coverPhoto?: Photo;

  // price: number;
  // currency: 'jpy';
  // interval: 'month' | 'week' | 'day' | 'year';

  // stripeProductId: string;
  // stripePriceId: string;
}

export interface Coach extends CoachCommon, Model {}
export interface CoachResponse extends CoachCommon, Response {}
