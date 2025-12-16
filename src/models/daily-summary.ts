import type { WrappedTimestamp } from '../providers/client-provider';
import type { ActivitySource } from './activity';
import type { GarminHealthDailySummary } from './manufacturers/garmin';
import type { Model } from './models';
import type { Suunto247ActivitySample } from './suunto';

export interface DailySummaryCommon {
  source: ActivitySource;
  raw: GarminHealthDailySummary | Suunto247ActivitySample;

  // This should be calculated by startTimeInSeconds + durationInSeconds
  measuredAt: WrappedTimestamp;
  userId?: string;

  forDate: string;

  minHeartRateInBeatsPerMinute?: number;
  maxHeartRateInBeatsPerMinute?: number;
  averageHeartRateInBeatsPerMinute?: number;

  restingHeartRateInBeatsPerMinute?: number;

  activeKilocalories?: number;
  bmrKilocalories?: number;
  totalKilocalories?: number;
  steps?: number;

  distanceInMeters?: number;
  floorsClimbed?: number;

  moderateIntensityDurationInSeconds?: number;
  vigorousIntensityDurationInSeconds?: number;

  averageStressLevel?: number;
  maxStressLevel?: number;

  stressDurationInSeconds?: number;
  activityStressDurationInSeconds?: number;
  lowStressDurationInSeconds?: number;
  mediumStressDurationInSeconds?: number;
}

export interface DailySummary extends DailySummaryCommon, Model {}
