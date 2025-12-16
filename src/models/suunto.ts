export interface SuuntoUser {
  id: number;
}

export interface SuuntoWorkout {
  workoutKey: string;
  workoutName: string;
  activityId: number;
  startTime: number;
  totalTime: number;
  energyConsumption: number;
  startPosition: {
    x: number; // longitude
    y: number; // latitude
  };
  stepCount: number;
  totalAscent: number;
  totalDescent: number;
  totalDistance: number;
  hrdata: {
    workoutAvgHR: number;
    workoutMaxHR: number;
  };
  avgSpeed: number;
  maxSpeed: number;
  timeOffsetInMinutes: number;
}

export interface SuuntoGear {
  manufacturer: string;
  name: string;
  productType: string;
}

export interface SuuntoRoute {
  id: string;
  description: string;
  visibility: 'public' | 'private' | 'unlisted';
  activityIds: number[];
  startPoint: { altitude: number; latitude: number; longitude: number };
  centerPoint: { altitude: number; latitude: number; longitude: number };
  endPoint: { altitude: number; latitude: number; longitude: number };
  created: number; // timestamp
  averageSpeed: number;
  totalDistance: number;
  modified: number; // timestamp
  watchEnabled: boolean;
  turnWaypointsEnabled: boolean;
}

export interface Suunto247ActivitySample {
  // "timestamp": "2024-12-10T14:50:00.000+02:00",
  // "entryData": { "HR": 71, "StepCount": 169, "EnergyConsumption": 29308 }
  timestamp: string; // ISO 8601 date string
  entryData: {
    HR?: number; // heart rate
    StepCount?: number; // steps taken in this sample period
    EnergyConsumption?: number; // in joules
    SpO2?: number; // blood oxygen level
    Altitude?: number; // in meters
    HRExt?: {
      Min?: number; // minimum heart rate in this sample period
      Max?: number; // maximum heart rate in this sample period
    };
    HRV?: number; // heart rate variability
  };
}

export interface Suunto247SleepSample {
  timestamp: string; // ISO 8601 date string
  entryData: {
    DeepSleepDuration?: number; // in seconds
    LightSleepDuration?: number; // in seconds
    REMSleepDuration?: number; // in seconds
    Duration?: number; // total sleep duration in seconds
    HRAvg?: number; // average heart rate during sleep
    HRMin?: number; // minimum heart rate during sleep
    SleepQualityScore?: number; // 0-100 scale
    SleepId?: number;
    BedtimeStart?: string; // ISO 8601 date string
    BedtimeEnd?: string; // ISO 8601 date string
    MaxSpo2?: number; // blood oxygen level
    Altitude?: number; // in meters
    AvgHRV?: number; // average heart rate variability
    AvgHRVSampleCount?: number;
    IsNap?: boolean;
    SleepOnsetLatencyDuration?: number; // in seconds
    WakeAfterSleepOnsetDuration?: number; // in seconds
    WakeBeforeOffBedDuration?: number; // in seconds
    DateTime?: string; // ISO 8601 date string
  };
}

export interface Suunto247RecoverySample {
  timestamp: string; // ISO 8601 date string
  entryData: {
    Balance?: number; // 0-1 scale
    StressState?: number; // 1-5 scale
  };
}
