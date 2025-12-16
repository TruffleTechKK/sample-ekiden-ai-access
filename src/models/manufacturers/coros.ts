export interface CorosFitMessage {
  fileIdMesgs: FileIdMessage[];
  developerDataIdMesgs: DeveloperDataIdMessage[];
  deviceInfoMesgs: DeviceInfoMessage[];
  activityMesgs: ActivityMessage[];
  eventMesgs: EventMessage[];
  recordMesgs: RecordMessage[];
  fieldDescriptionMesgs: FieldDescriptionMessage[];

  lapMesgs: LapMessage[];
  sessionMesgs: SessionMessage[];
}

export interface FileIdMessage {
  type: string;
  manufacturer: 'coros';
  timeCreated: string;
  product: number;
  productName: string;
}

export interface DeveloperDataIdMessage {
  manufacturerId: number;
  developerDataIndex: number;
  applicationId: number[];
}

export interface DeviceInfoMessage {
  timestamp: string;
  manufacturer: string;
  productName: string;
}

export interface ActivityMessage {
  timestamp: string;
  totalTimerTime: number;
  localTimestamp: number;
  numSessions: number;
  type: string;
  event: string;
  eventType: string;
}

export interface EventMessage {
  timestamp: string;
  event: string;
  eventType: string;
  eventGroup: number;
}

export interface RecordMessage {
  activityType: 'running';
  timestamp: string;
  distance?: number;
  heartRate?: number;
  positionLat?: number;
  positionLong?: number;
  altitude?: number;
  speed?: number;
  enhancedSpeed: number;
  enhancedAltitude?: number;
  cadence?: number;
  power?: number;
  accumulatedPower?: number;
  stepLength?: number;
  developerFields?: { [key: string]: number };
}

export interface FieldDescriptionMessage {
  developerDataIndex: number;
  fieldDefinitionNumber: number;
  fitBaseTypeId: number;
  fieldName: string;
  units: string;
  key: number;
}

export interface LapMessage {
  messageIndex: number;
  timestamp: string;
  startTime: string;
  totalTimerTime: number;
  totalElapsedTime: number;
  totalDistance: number;
  totalCalories: number;
  sport: string;
  maxHeartRate: number;
  minHeartRate: number;
  avgHeartRate: number;
  avgTemperature: number;
  maxSpeed: number;
  avgSpeed: number;
  avgCadence: number;
  avgStepLength: number;
  maxCadence: number;
  totalDescent: number;
  totalAscent: number;
  avgPower: number;
  avgStanceTime: number;
  avgStanceTimePercent: number;
  avgVerticalOscillation: number;
  avgVerticalRatio: number;
  avgRunningCadence: number;
  maxRunningCadence: number;
  enhancedMaxSpeed: number;
  enhancedAvgSpeed: number;
  developerFields?: { [key: string]: number };
}

export interface SessionMessage {
  sport: string;
  startTime: string;
  timestamp: string;
  totalElapsedTime: number;
  totalTimerTime: number;
  totalDistance: number;
  totalCalories: number;
  maxHeartRate: number;
  minHeartRate: number;
  avgHeartRate: number;
  avgTemperature: number;
  totalAscent: number;
  totalDescent: number;
  totalCycles: number;
  maxCadence: number;
  avgCadence: number;
  avgStepLength: number;
  maxSpeed: number;
  avgSpeed: number;
  avgPower: number;
  avgStanceTime: number;
  avgStanceTimeBalance: number;
  avgVerticalOscillation: number;
  avgVerticalRatio: number;
  totalStrides: number;
  maxRunningCadence: number;
  avgRunningCadence: number;
  enhancedMaxSpeed: number;
  enhancedAvgSpeed: number;
  developerFields?: { [key: string]: number };
}
