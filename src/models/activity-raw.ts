import type { GarminActivityDetail } from './garmin';
import type { Model } from './models';
import type { PolarExcerciseSummary } from './polar';
import type { StravaActivity } from './strava';
import type { WhoopWorkout } from './whoop';

export interface ActivityRawCommon {
  raw: StravaActivity | GarminActivityDetail | WhoopWorkout | PolarExcerciseSummary;
}

export interface ActivityRaw extends ActivityRawCommon, Model { }
