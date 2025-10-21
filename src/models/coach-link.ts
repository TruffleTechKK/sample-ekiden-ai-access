import type { ID, Model, Response } from './models';
import type { User } from './user';

export enum CoachLinkStatus {
  Active = 'active',
  Pending = 'pending',
  Inactive = 'inactive',
}

export interface CoachLinkCommon {
  runnerId: ID;
  runner: Partial<User>;
  coachId: ID;
  coach: Partial<User>;
  status: CoachLinkStatus;
  subscriptionId: ID;
  planId: ID;

  freemium?: boolean;
}

export interface CoachLink extends CoachLinkCommon, Model { }
export interface CoachLinkResponse extends CoachLinkCommon, Response { }
