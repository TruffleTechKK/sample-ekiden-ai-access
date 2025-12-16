export interface SuuntoFitMessage {
  fileIdMesgs: FileIdMessage[];
  deviceInfoMesgs?: DeviceInfoMessage[];
  recordMesgs?: RecordMessage[];
  lapMesgs?: LapMessage[];
  sessionMesgs: SessionMessage[];
  eventMesgs?: EventMessage[];
  activityMesgs?: ActivityMessage[];
  developerDataIdMesgs?: DeveloperDataIdMessage[];
  fieldDescriptionMesgs: FieldDescriptionMessage[];

}

export interface FieldDescriptionMessage {
  developerDataIndex: number;
  fieldDefinitionNumber: number;
  fitBaseTypeId: number;
  fieldName: string;
  units: string;
  key: number;
}

export interface DeveloperDataIdMessage {
  manufacturerId: number;
  developerDataIndex: number;
  applicationId: number[];
}

export interface DeviceInfoMessage {
  timestamp: string;
  batteryVoltage: number;
  batteryLevel: number;
  manufacturer: string;
  product: number;
  productName: string;
}

export interface LapMessage {
  timestamp: string;
  startTime: string;
  totalElapsedTime: number;
  event: string;
  eventType: string;
  lapTrigger: string;
  totalTimerTime: number;
  minAltitude?: number;
  avgAltitude?: number;
  maxAltitude?: number;
  totalDescent?: number;
  avgCadence?: number;
  maxCadence?: number;
  totalDistance: number;
  minHeartRate?: number;
  avgHeartRate?: number;
  maxHeartRate?: number;
  avgPower?: number;
  maxPower?: number;
  avgSpeed: number;
  maxSpeed: number;
  avgTemperature?: number;
  maxTemperature?: number;
  totalCalories: number;
  enhancedMinAltitude?: number;
  enhancedAvgAltitude?: number;
  enhancedMaxAltitude?: number;
  enhancedAvgSpeed: number;
  enhancedMaxSpeed: number;
}

export interface SessionMessage {
  timestamp: string;
  startTime: string;
  event: string;
  eventType: string;
  sport: string;
  firstLapIndex: number;
  numLaps: number;
  minHeartRate?: number;
  avgHeartRate?: number;
  maxHeartRate?: number;
  avgSpeed: number;
  maxSpeed: number;
  totalCalories: number;
  totalTimerTime: number;
  totalElapsedTime: number;
  totalDistance: number;
  totalAscent?: number;
  totalDescent?: number;
  maxAltitude?: number;
  minAltitude?: number;
  trainingStressScore?: number;
  intensityFactor?: number;
  normalizedPower?: number;
  totalCycles?: number;
  avgTemperature?: number;
  maxTemperature?: number;
  avgCadence?: number;
  maxCadence?: number;
  avgPower?: number;
  maxPower?: number;
  totalTrainingEffect?: number;
  timeInHrZone?: number[];
  timeInSpeedZone?: number[];
  timeInPowerZone?: number[];
  totalStrides?: number;
  avgRunningCadence?: number;
  maxRunningCadence?: number;
  enhancedAvgSpeed: number;
  enhancedMaxSpeed: number;
  enhancedMaxAltitude?: number;
  enhancedMinAltitude?: number;
  developerFields?: { [key: number]: number };
}

export interface EventMessage {
  event: string;
  eventType: string;
  timestamp: string;
  data: number;
  timerTrigger: string;
}

export interface ActivityMessage {
  timestamp: string;
  numSessions: number;
  type: string;
  event: string;
  eventType: string;
  localTimestamp: number;
}

export interface RecordMessage {
  timestamp: string;
  distance?: number;
  heartRate?: number;
  positionLat?: number;
  positionLong?: number;
  enhancedSpeed?: number;
}

export interface FileIdMessage {
  type: string;
  manufacturer: 'suunto';
  timeCreated: string;
  product: number;
  productName: string;
}
