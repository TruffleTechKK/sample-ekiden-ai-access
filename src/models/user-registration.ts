import type { ID, Model, Response } from './models';

export enum UserRegistrationStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
}

export interface OboardingStatus {
  invitedCount: number;
  garminConnected: boolean;
  stravaClubConnected: boolean;
  stravaConnected: boolean;
  whoopConnected: boolean;
  polarConnected: boolean;
}

export interface UserRegistrationCommon {
  displayName: string;
  userId: ID;
  status: UserRegistrationStatus;
  onboardingStatus: OboardingStatus;
}

export interface UserRegistration extends UserRegistrationCommon, Model { }
export interface UserRegistrationResponse extends UserRegistrationCommon, Response { }
