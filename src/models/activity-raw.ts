import type { GarminActivityDetail } from './manufacturers/garmin';
import type { PolarExcerciseSummary } from './manufacturers/polar';
import type { Model } from './models';
import type { StravaActivity } from './strava';
import type { SuuntoWorkout } from './suunto';
import type { WhoopWorkout } from './whoop';

export interface ActivityRawCommon {
  raw: StravaActivity | GarminActivityDetail | WhoopWorkout | PolarExcerciseSummary | SuuntoWorkout;
}

export interface ActivityRaw extends ActivityRawCommon, Model { }
