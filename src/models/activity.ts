import type { WrappedTimestamp } from '../providers/client-provider';
import type { HRZoneCalculationMethod } from './hr-metrics';
import type { ID, Model } from './models';
import type { File } from './photo';
import type { StravaUploadResult } from './strava';
import type { WeatherHistoryData } from './weather';

export interface ActivitySplit {
  distance: number;
  elapsedTime: number;
  elevationDifference: number;
  movingTime: number;
  split: number;
  averageSpeed: number;
  paceZone: number;
}

export interface RunSection {
  start: number;
  end: number;
  avgSpeed: number;
  speeds?: number[];
  intensity?: VDOTIntensity;
}

export type ActivityType = 'Run' | 'Ride' | 'Swim' | 'Walk' | 'Hike' | 'Workout' | 'Other';
export type VDOTIntensity = 'easy' | 'moderate' | 'hard' | 'very hard' | 'max' | 'recovery' | 'unknown';

export interface ActivityFeedback {
  perceivedEffort?: number; // 1-10
  mood?: number; // 1-5
  notes?: string;
}


export interface TimeInZones {
  zone1: number; // in seconds
  zone2: number; // in seconds
  zone3: number; // in seconds
  zone4: number; // in seconds
  zone5: number; // in seconds

  method: HRZoneCalculationMethod;
}


export interface ActivityCommonWithoutRaw {
  source: ActivitySource;
  name: string;
  startDate: WrappedTimestamp;
  distance: number;
  maxSpeed?: number;
  averageSpeed?: number;
  averageCadence?: number;
  elapsedTime: number;
  movingTime?: number;
  elevHigh?: number;
  elevLow?: number;
  calories?: number;
  splits: ActivitySplit[];
  type: ActivityType;

  eventId?: ID;

  maxHeartRate?: number;
  averageHeartRate?: number;

  polyline?: string;

  duplicated?: boolean;
  duplicatedWith?: ID;
  duplicatedWithName?: string;
  duplicatedWithSource?: ActivitySource;

  fileUrl?: string;
  fileUrlCreatedAt?: WrappedTimestamp;
  fileType?: 'FIT' | 'TCX' | 'GPX';

  file?: File;

  stravaUploadResult?: StravaUploadResult;

  startCoordinates?: {
    latitude: number;
    longitude: number;
  } | null;
  startCoordinateWeather?: WeatherHistoryData | null;

  vdotIntensity?: VDOTIntensity;

  topicId?: ID;

  manualUploaded?: boolean;

  feedback?: ActivityFeedback;
  skipFeedbackSurvey?: boolean;

  sections?: RunSection[];
  timeInHRZones?: TimeInZones;
  hrTSS?: number;
}

export interface ActivityCommon extends ActivityCommonWithoutRaw {
  raw: { id: ID, originalId: ID };
}

export enum ActivitySource {
  STRAVA = 'strava',
  GARMIN = 'garmin',
  SUUNTO = 'suunto',
  POLAR = 'polar',
  COROS = 'coros',
  FITBIT = 'fitbit',
  WHOOP = 'whoop',
  APPLE = 'apple',
  GOOGLE = 'google',
  MANUAL = 'manual',
}

export interface Activity extends ActivityCommon, Model { }
