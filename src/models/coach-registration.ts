import type { ID, Model, Response } from './models';

export enum CoachRegistrationStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
}

export interface CoachRegistrationCommon {
  email: string;
  displayName: string;
  phoneNumber: string;
  description: string;
  coachingStyle: string;
  userId: ID;
  status: CoachRegistrationStatus;

  price: number;
  currency: 'jpy';
  interval: 'month' | 'week' | 'day';

  coverPhotoUrl: string;
}

export interface CoachRegistration extends CoachRegistrationCommon, Model {}
export interface CoachRegistrationResponse extends CoachRegistrationCommon, Response {}
