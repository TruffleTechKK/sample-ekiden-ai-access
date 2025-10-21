export interface GarminPingEventData {
  userId: string;
  uploadStartTimeInSeconds: number;
  uploadEndTimeInSeconds: number;
  callbackURL: string;
}

export enum GarminPingEventKey {
  DAILIES = 'dailies',
  EPOCHS = 'epochs',
  SLEEPS = 'sleeps',
  BODY_COMPS = 'bodyComps',
  STRESS_DETAILS = 'stressDetails',
  USER_METRICS = 'userMetrics',
  PULSE_OX = 'pulseox',
  ALL_DAY_RESPIRATION = 'allDayRespiration',
  HEALTH_SNAPSHOT = 'healthSnapshot',
  HRV = 'hrv',
  BLOOD_PRESSURES = 'bloodPressures',
  SKIN_TEMP = 'skinTemp',
}
export type GarminPingEvent = {
  [key in GarminPingEventKey]: GarminPingEventData[];
};

export type GarminActivityType =
  | 'RUNNING'
  | 'CYCLING'
  | 'SWIMMING'
  | 'WALKING'
  | 'HIKING'
  | 'FITNESS_EQUIPMENT'
  | 'OTHER';
export interface GarminActivitySummary {
  startTimeInSeconds: number;
  startTimeOffsetInSeconds: number;
  durationInSeconds: number;

  averageBikeCadenceInRoundsPerMinute?: number;
  averageHeartRateInBeatsPerMinute?: number;
  averageRunCadenceInStepsPerMinute?: number;
  averagePushCadenceInPushesPerMinute?: number;
  averageSpeedInMetersPerSecond?: number;
  averageSwimCadenceInStrokesPerMinute?: number;
  averagePaceInMinutesPerKilometer?: number;

  activeKilocalories: number;
  deviceName: string;

  distanceInMeters?: number;
  maxHeartRateInBeatsPerMinute?: number;

  maxBikeCadenceInRoundsPerMinute?: number;
  maxPaceInMinutesPerKilometer?: number;
  maxRunCadenceInStepsPerMinute?: number;
  maxPushCadenceInPushesPerMinute?: number;
  maxSpeedInMetersPerSecond?: number;

  numberOfActiveLengths?: number;
  startingLatitudeInDegree?: number;
  startingLongitudeInDegree?: number;
  steps?: number;
  pushes?: number;

  totalElevationGainInMeters?: number;
  totalElevationLossInMeters?: number;

  activityType: GarminActivityType;

  activityName?: string;
  activityDescription?: string;
  activityId?: string;
}

export interface GarminActivityDetailSample {
  startTimeInSeconds?: number;
  latitudeInDegree?: number;
  longitudeInDegree?: number;
  elevationInMeters?: number;
  airTemperatureCelcius?: number;
  heartRate?: number;
  speedMetersPerSecond?: number;
  stepsPerMinute?: number;
  totalDistanceInMeters?: number;
  timerDurationInSeconds?: number;
  clockDurationInSeconds?: number;
  movingDurationInSeconds?: number;
  powerInWatts?: number;
  bikeCadenceInRPM?: number;
  directWheelchairCadence?: number;
  swimCadenceInStrokesPerMinute?: number;
}

export interface GarminActivityDetail {
  userId: string;
  summaryId: string;
  activityId: string;

  isParent?: boolean;
  parentSummaryId?: string;
  manual: boolean;

  summary: GarminActivitySummary;

  samples?: GarminActivityDetailSample[];

  laps?: {
    startTimeInSeconds: number;
  }[];
}

export interface GarminHealthDailySummary {
  summaryId: string;
  calendarDate: string;
  startTimeInSeconds: number;
  startTimeOffsetInSeconds: number;
  activityType: GarminActivityType;
  durationInSeconds: number;
  steps: number;
  pushes: number;
  distanceInMeters: number;
  activeTimeInSeconds: number;
  activeKilocalories: number;
  bmrKilocalories: number;
  moderateIntensityDurationInSeconds: number;
  vigorousIntensityDurationInSeconds: number;
  floorsClimbed: number;
  minHeartRateInBeatsPerMinute: number;
  averageHeartRateInBeatsPerMinute: number;
  maxHeartRateInBeatsPerMinute: number;
  restingHeartRateInBeatsPerMinute: number;
  timeOffsetHeartRateSamples: {
    [timeInSeconds: number]: number;
  };
  averageStressLevel: number;
  maxStressLevel: number;
  stressDurationInSeconds: number;
  restStressDurationInSeconds: number;
  activityStressDurationInSeconds: number;
  lowStressDurationInSeconds: number;
  mediumStressDurationInSeconds: number;
  highStressDurationInSeconds: number;
  stressQualifier:
  | 'unknown'
  | 'calm'
  | 'balanced'
  | 'stressful'
  | 'very_stressful'
  | 'calm_awake'
  | 'balanced_awake'
  | 'stressful_awake'
  | 'very_stressful_awake';
  stepsGoal: number;
  pushesGoal: number;
  intensityDurationGoalInSeconds: number;
  floorsClimbedGoal: number;
}

export type GarminSleepQualifier = 'EXCELLENT' | 'GOOD' | 'FAIR' | 'POOR';

export interface GarminSleepSummary {
  summaryId: string;
  calendarDate: string;
  startTimeInSeconds: number;
  startTimeOffsetInSeconds: number;
  durationInSeconds: number;
  totalNapDurationInSeconds: number;
  unmesurableSleepDurationInSeconds: number;
  deepSleepDurationInSeconds: number;
  lightSleepDurationInSeconds: number;
  remSleepInSeconds: number;
  awakeDurationInSeconds: number;
  sleepLevelsMap: {
    [timeInSeconds: number]: {
      deep: {
        startTimeInSeconds: number;
        endTimeInSeconds: number;
      }[];
      light: {
        startTimeInSeconds: number;
        endTimeInSeconds: number;
      }[];
      rem: {
        startTimeInSeconds: number;
        endTimeInSeconds: number;
      }[];
      awake: {
        startTimeInSeconds: number;
        endTimeInSeconds: number;
      }[];
    };
  };
  validation:
  | 'MANUAL'
  | 'DEVICE'
  | 'OFF_WRIST'
  | 'AUTO_TENTATIVE'
  | 'AUTO_FINAL'
  | 'AUTO_MANUAL'
  | 'ENHANCED_TENTATIVE'
  | 'ENHANCED_FINAL';
  timeOffsetSleepRespiration: {
    [timeInSeconds: number]: number;
  };
  timeOffsetSleepSpo2: {
    [timeInSeconds: number]: number;
  };
  overallSleepScore: number;
  sleepScores: {
    totalDuration: {
      qualifierKey: GarminSleepQualifier;
    };
    stress: {
      qualifierKey: GarminSleepQualifier;
    };
    awakeCount: {
      qualifierKey: GarminSleepQualifier;
    };
    remPercentage: {
      qualifierKey: GarminSleepQualifier;
    };
    restlessness: {
      qualifierKey: GarminSleepQualifier;
    };
    lightPercentage: {
      qualifierKey: GarminSleepQualifier;
    };
    deepPercentage: {
      qualifierKey: GarminSleepQualifier;
    };
  };
  naps: {
    startTimeInSeconds: number;
    startTimeOffsetInSeconds: number;
  }[];
  napDurationInSeconds: number;
  napStartTimeInSeconds: number;
  napValidation: 'MANUAL' | 'DEVICE';
  napOffsetInSeconds: number;
}

export interface GarminUserMetricsSummary {
  summaryId: string;
  calendarDate: string;
  vo2Max: number;
  vo2MaxCycling: number;
  enhanced: boolean;
  fitnessAge: number;
}

export interface GarminFitMessages {
  fileIdMesgs: {
    serialNumber: number;
    timeCreated: Date;
    manufacturer: 'garmin';
    product: number;
    type: 'activity';
    garminProduct: string;
  }[];
  fileCreatorMesgs: {
    softwareVersion: number;
  }[];
  activityMesgs: {
    timestamp: string;
    totalTimerTime: number;
    localTimestamp: number;
    numSessions: number;
    type: 'manual';
    event: 'activity';
    eventType: 'stop';
  }[];
  sessionMesgs: {
    timestamp: Date;
    startTime: Date;
    startPositionLat: number;
    startPositionLong: number;
    totalElapsedTime: number;
    totalTimerTime: number;
    totalDistance: number;
    totalCycles: number;
    necLat: number;
    necLong: number;
    swcLat: number;
    swcLong: number;
    endPositionLat: number;
    endPositionLong: number;
    sportProfileName: string;
    enhancedAvgSpeed: number;
    enhancedMaxSpeed: number;
    trainingLoadPeak: number;
    totalGrit: number;
    avgFlow: number;
    messageIndex: number;
    totalCalories: number;
    avgSpeed: number;
    maxSpeed: number;
    totalAscent: number;
    totalDescent: number;
    firstLapIndex: number;
    numLaps: number;
    event: string;
    eventType: string;
    sport: string;
    subSport: string;
    avgHeartRate: number;
    maxHeartRate: number;
    avgCadence: number;
    maxCadence: number;
    totalTrainingEffect: number;
    trigger: string;
    avgFractionalCadence: number;
    maxFractionalCadence: number;
    totalAnaerobicTrainingEffect: number;
    avgRespirationRate: number;
    maxRespirationRate: number;
    minRespirationRate: number;
    totalStrides: number;
  }[];
  timeInZoneMesgs: {
    timestamp: Date;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    timeInHrZone: any;
    referenceMesg: string;
    referenceIndex: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hrZoneHighBoundary: any;
    hrCalcType: string;
    maxHeartRate: number;
    restingHeartRate: number;
    thresholdHeartRate: number;
  }[];
  lapMesgs: {
    timestamp: Date;
    startTime: Date;
    startPositionLat: number;
    startPositionLong: number;
    endPositionLat: number;
    endPositionLong: number;
    totalElapsedTime: number;
    totalTimerTime: number;
    totalDistance: number;
    totalCycles: number;
    enhancedAvgSpeed: number;
    enhancedMaxSpeed: number;
    enhancedMinAltitude: number;
    enhancedMaxAltitude: number;
    totalGrit: number;
    avgFlow: number;
    messageIndex: number;
    totalCalories: number;
    avgSpeed: number;
    maxSpeed: number;
    totalAscent: number;
    totalDescent: number;
    event: string;
    eventType: string;
    avgHeartRate: number;
    maxHeartRate: number;
    avgCadence: number;
    maxCadence: number;
    intensity: string;
    lapTrigger: string;
    sport: string;
    subSport: string;
    avgFractionalCadence: number;
    maxFractionalCadence: number;
    totalStrides: number;
  }[];

  timestampCorrelationMesgs: {
    timestamp: Date;
    systemTimestamp: Date;
    localTimestamp: number;
  }[];
  eventMesgs: {
    timestamp: Date;
    data: number;
    event: string;
    eventType: string;
    eventGroup: number;
    timerTrigger: string;
  }[];
  deviceInfoMesgs: {
    timestamp: Date;
    serialNumber: number;
    manufacturer: string;
    product: number;
    softwareVersion: number;
    deviceIndex: string;
    sourceType: string;
    garminProduct: string;
    deviceType: number;
    localDeviceType: string | number;
  }[];
  deviceSettingsMesgs: {
    utcOffset: number;
    timeOffset: number;
    autoActivityDetect: number;
    autosyncMinSteps: number;
    autosyncMinTime: number;
    activeTimeZone: number;
    timeMode: string;
    timeZoneOffset: number;
    backlightMode: string;
    activityTrackerEnabled: number;
    moveAlertEnabled: number;
    dateMode: string;
    mountingSide: string;
    lactateThresholdAutodetectEnabled: number;
  }[];
  userProfileMesgs: {
    wakeTime: number;
    sleepTime: number;
    weight: number;
    friendlyName: string;
    gender: string;
    height: number;
    language: string;
    elevSetting: string;
    weightSetting: string;
    restingHeartRate: number;
    hrSetting: string;
    speedSetting: string;
    distSetting: string;
    activityClass: number;
    positionSetting: string;
    temperatureSetting: string;
    heightSetting: string;
    depthSetting: string;
  }[];

  sportMesgs?: {
    name: string;
    sport: string;
    subSport: string;
  }[];

  zonesTargetMesgs: {
    maxHeartRate: number;
    thresholdHeartRate: number;
    hrCalcType: string;
    pwrCalcType: string;
  }[];

  recordMesgs?: {
    timestamp: Date;
    positionLat: number;
    positionLong: number;
    distance: number;
    enhancedSpeed: number;
    enhancedAltitude: number;
    cycleLength16: number;
    heartRate: number;
    cadence: number;
    fractionalCadence: number;
  }[];

  gpsMetadataMesgs: {
    enhancedAltitude: number;
    enhancedSpeed: number;
  }[];
}

export interface GarminBodyCompositionSummary {
  summaryId: string;
  measurementTimeInSeconds: number;
  measurementTimeOffsetInSeconds: number;
  muscleMassInGrams: number;
  boneMassInGrams: number;
  bodyWaterInPercent: number;
  bodyFatInPercent: number;
  bodyMassIndex: number;
  weightInGrams: number;
}
