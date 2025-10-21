import type { WrappedTimestamp } from '../providers/client-provider';
import type { ActivitySource } from './activity';
import type { GarminSleepSummary } from './garmin';
import type { Model } from './models';
import type { PolarSleep } from './polar';
import type { WhoopSleep } from './whoop';

export interface SleepCommon {
  source: ActivitySource;
  raw: GarminSleepSummary | WhoopSleep | PolarSleep;
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
}

export interface Sleep extends SleepCommon, Model { }
