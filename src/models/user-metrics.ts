import type { WrappedTimestamp } from '../providers/client-provider';
import type { ActivitySource } from './activity';
import type { GarminUserMetricsSummary } from './garmin';
import type { Model } from './models';

export interface UserMetricsCommon {
  source: ActivitySource;
  raw: GarminUserMetricsSummary;

  measuredAt: WrappedTimestamp;
  vo2Max: number;
  vo2MaxCycling: number;

  userId?: string;
}

export interface UserMetrics extends UserMetricsCommon, Model {}
