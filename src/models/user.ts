import type { ActivitySource } from './activity';
import type { ModelType } from './ai';
import type { BodyCompsCommon } from './body-comps';
import type { Model, Optional, Response } from './models';
import type { Photo } from './photo';
import type { Language } from './settings';
import type { UserMetricsCommon } from './user-metrics';

export enum UserType {
  ADMIN = 'admin',
  RUNNER = 'runner',
  COACH = 'coach',
}

export interface RunResult {
  hour: number;
  minute: number;
  second: number;
}

export interface UserPushToken {
  deviceUUID: string;
  token: string;
  userAgent?: string;
}

export interface UserSettings {
  model: ModelType;
  language: Language;
  tz: string;
  supressPostingToStrava: boolean;
  source: ActivitySource | null;
}

export interface BodyMetricsSummary {
  bodyComps?: BodyCompsCommon;
  userMetrics?: UserMetricsCommon;
}

export interface Tournament {
  date: Date;
  name: string;
  record: RunResult;

}

export interface UserCommon {
  type: UserType;
  displayName: string | null;

  firstName: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  email: string | null;
  photoURL: string | null;
  admin: boolean;
  coach: boolean;
  stravaId: number | null;
  garminId: string | null;
  whoopId: string | null;
  polarId: string | null;
  stripeCustomerId: string | null;

  pushTokens?: Record<string, UserPushToken>;

  needRegistration?: boolean;

  photo?: Photo;

  distancePr: {
    fm: RunResult;
    hm: RunResult;
    _5k: RunResult;
    _10k: RunResult;
  };

  refCode?: string;
  referrer?: string;

  profile?: string;
  country?: string;
  trainingFrequency?: string;
  trainingPurpose?: string;

  tournaments?: Tournament[];

  goals?: {
    event: string;
    record: RunResult;
  }[];

  sportsWatchManufacturer?: string;

  isGoalsInputed?: boolean;
  isStartPageShown?: boolean;

  settings?: UserSettings;

  bodyMetrics?: BodyMetricsSummary;
  duplicatedWith?: string | null;

  defaultAffiliateCouponId?: string | null;

  hasActivities?: boolean;

  hasHadTrial?: boolean;

  taskCompleteDialogShown?: boolean;
}

export interface User extends Model, UserCommon { }

export interface UserResponse extends Response, UserCommon { }

export type UserInput = Optional<User>;
