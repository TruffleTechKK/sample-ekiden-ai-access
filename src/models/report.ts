import type { WrappedTimestamp } from '../providers/client-provider';
import type { ID, Model } from './models';

export enum ReportType {
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  DAILY = 'daily',
}

export interface ReportCommon {
  userId: ID;
  type: ReportType;
  from: WrappedTimestamp;
  to: WrappedTimestamp;

  numberOfActivities: number;
  // numberOfMessages: number;
  // numberOfNewTopics: number;

  totalRunDistance: number;
  totalRunDuration: number;
}

export interface Report extends ReportCommon, Model {}
