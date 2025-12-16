import type { WrappedTimestamp } from '../providers/client-provider';
import type { TimeInZones } from './activity';
import type { ID, Model } from './models';

export enum ReportType {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  DAILY = 'daily',
  DAILY_V2 = 'daily-v2',
}

export type RecoveryStatus = 'good' | 'stable' | 'poor' | 'unknown';

export interface ReportEntry {
  numberOfActivities: number;

  totalRunDistance: number;
  totalRunDuration: number;

  totalTimeInZones?: TimeInZones;

  tss?: number;
  ctl?: number;
  atl?: number;
  tsb?: number;

  ctlDbl?: number;
  atlDbl?: number;
  tsbDbl?: number;

  hasSleepData?: boolean;
  avgSleepQuality?: number;
  sleepQualityBaseline?: number;
  totalSleepDurationInSeconds?: number;
  sleepDurationBaseline?: number;

  rhr?: number;
  rhrBaseline?: number;
  mhr?: number;
  mhrBaseline?: number;
  thr?: number;
  thrBaseline?: number;

  hrv?: number;
  hrvBaseline?: number;

  vo2max?: number;
  vo2maxBaseline?: number;

  recoveryStatus?: RecoveryStatus;
}

export interface ReportHistory {
  numberOfActivities: (number | null)[];

  totalRunDistance: (number | null)[];
  totalRunDuration: (number | null)[];

  totalTimeInZones: (TimeInZones | null)[];

  tss: (number | null)[];
  ctl: (number | null)[];
  atl: (number | null)[];
  tsb: (number | null)[];

  ctlDbl: (number | null)[];
  atlDbl: (number | null)[];
  tsbDbl: (number | null)[];

  hasSleepData: boolean[];
  avgSleepQuality: (number | null)[];
  sleepQualityBaseline: (number | null)[];
  totalSleepDurationInSeconds: (number | null)[];
  sleepDurationBaseline: (number | null)[];
  rhr: (number | null)[];
  rhrBaseline: (number | null)[];
  mhr: (number | null)[];
  mhrBaseline: (number | null)[];
  thr: (number | null)[];
  thrBaseline: (number | null)[];

  hrv: (number | null)[];
  hrvBaseline: (number | null)[];

  vo2max: (number | null)[];
  vo2maxBaseline: (number | null)[];

  recoveryStatus: RecoveryStatus[];
}

export interface ReportCommon extends ReportEntry {
  userId: ID;
  type: ReportType;
  from: WrappedTimestamp;
  to: WrappedTimestamp;

  history30Days?: ReportHistory;
  historyMeta?: {
    last7DaysAvailability: Record<keyof ReportHistory, number>;
    last30DaysAvailability: Record<keyof ReportHistory, number>;
  };
}

export interface Report extends ReportCommon, Model {}
