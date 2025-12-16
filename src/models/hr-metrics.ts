import type { Model } from "./models";

export enum HRMetricsSource {
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
  SYSTEM_GENERATED = 'system-generated',
};

export enum HRZoneCalculationMethod {
  PERCENTAGE_OF_MAX_HR = 'percentage-of-max-hr',
  PERCENTAGE_OF_THR = 'percentage-of-thr',
};

export interface Zone {
  min: number;
  max: number;
}

export interface HeartRateZones {
  zone1: Zone;
  zone2: Zone;
  zone3: Zone;
  zone4: Zone;
  zone5: Zone;
  method: HRZoneCalculationMethod;
}


export interface HRMetricsCommon {
  source: HRMetricsSource;

  restingHR?: number;
  maxHR?: number;
  hrVariability?: number;
  heartRateReserve?: number;
  thresholdHR?: number;
  thresholdHRZones?: HeartRateZones;
  maxHRZones?: HeartRateZones;

  hrZones?: HeartRateZones;
}

export interface HRMetrics extends HRMetricsCommon, Model {
}
