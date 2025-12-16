import type { WrappedTimestamp } from '../providers/client-provider';
import type { ActivitySource } from './activity';
import type { GarminSleepSummary } from './manufacturers/garmin';
import type { PolarSleep } from './manufacturers/polar';
import type { Model } from './models';
import type { Suunto247SleepSample } from './suunto';
import type { WhoopSleep } from './whoop';

export interface SleepCommon {
  source: ActivitySource;
  raw: GarminSleepSummary | WhoopSleep | PolarSleep | Suunto247SleepSample;
  measuredAt: WrappedTimestamp;

  durationInSeconds: number;
  unmesurableSleepDurationInSeconds: number;
  deepSleepDurationInSeconds: number;
  lightSleepDurationInSeconds: number;
  remSleepInSeconds: number;
  awakeDurationInSeconds: number;

  nap?: boolean;

  quality?: number;

  userId?: string;

  duplicatedWithSleepId?: string;
}

export interface Sleep extends SleepCommon, Model {}
