import type { WrappedTimestamp } from '../providers/client-provider';
import type { Model, Response } from './models';

export enum UserProviderStatus {
  Connected = 'connected',
  Disconnected = 'disconnected',
}

export enum UserProviderType {
  STRAVA = 'strava',
  SUUNTO = 'suunto',
  GARMIN = 'garmin',
  WHOOP = 'whoop',
  POLAR = 'polar',
  GOOGLE = 'google',
  EMAIL_PASSWORD = 'email_password',
}

export type UserProviderData = {
  displayName?: string | null;
  email?: string | null;
  photoURL?: string | null;
  phoneNumber?: string | null;
  uid: string;
};

export interface UserProviderCommon {
  data: UserProviderData;
  type: UserProviderType;
  lastLinkedAt: WrappedTimestamp | Date | string;
  status: UserProviderStatus;
  accessToken?: string;
  refreshToken?: string;
  secret?: string;
  accessTokenExpiresAt?: WrappedTimestamp | Date | string;
  disconnectedAt?: WrappedTimestamp | Date | string;
  scope?: string[];
}

export interface UserProvider extends Model, UserProviderCommon {
  lastLinkedAt: WrappedTimestamp | Date;
}

export interface UserProviderResponse extends Response, UserProviderCommon {
  lastLinkedAt: string;
}
