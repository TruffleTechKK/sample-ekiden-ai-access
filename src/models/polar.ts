import type { Model, Response } from './models';

export interface PolarUserCommon {
  'polar-user-id': string;
  'member-id': string;
  'registration-date': string;
  'first-name': string;
  'last-name': string;
  birthdate: string;
  gender: 'MALE' | 'FEMALE';
  weight: number;
  height: number;
}

export interface PolarFitMessages {
  fileIdMesgs: FileIdMessage[];
  deviceInfoMesgs?: DeviceInfoMessage[];
  recordMesgs?: RecordMessage[];
  lapMesgs?: LapMessage[];
  sessionMesgs: SessionMessage[];
  eventMesgs?: EventMessage[];
  activityMesgs?: ActivityMessage[];
}

export interface DeviceInfoMessage {
  timestamp: string;
}

export interface LapMessage {
  lapTrigger: string;
  startTime: string;
  totalMovingTime: number;
  totalElapsedTime: number;
  totalTimerTime: number;
  timestamp: string;
}

export interface SessionMessage {
  sport: string;
  subSport: string;
  timestamp: string;
  startTime: string;
  totalElapsedTime: number;
  totalTimerTime: number;
  totalCalories: number;
  workoutRpe: number;
  trigger: string;
  totalDistance: number;
  avgHeartRate: number;
  maxHeartRate: number;
  avgSpeed: number;
  maxSpeed: number;
  avgPower: number;
  maxPower: number;
  enhancedAvgSpeed: number;
  enhancedMaxSpeed: number;
}

export interface EventMessage {
  event: string;
  eventType: string;
  timestamp: string;
  startTimestamp: string;
}

export interface ActivityMessage {
  timestamp: string;
  numSessions: number;
  type: string;
  event: string;
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

export interface FileIdMessage {
  type: string;
  manufacturer: 'polarElectro';
  timeCreated: string;
  product: number;
  productName: string;
}


export interface PolarUser extends Model, PolarUserCommon { }
export interface PolarUserResponse extends Response, PolarUserCommon { }


export interface PolarWebhookData {
  id: string;
  events: string[];
  url: string;
  signature_secret_key?: string;
}

export interface CreatePolarWebhookResult {
  webhook: PolarWebhookData;
}

export type DetailedSportInfo =
  | 'AEROBICS'
  | 'AGILITY'
  | 'AMERICAN_FOOTBALL'
  | 'AQUATICS'
  | 'BACKCOUNTRY_SKIING'
  | 'BADMINTON'
  | 'BALLET_DANCING'
  | 'BALLROOM_DANCING'
  | 'BASEBALL'
  | 'BASKETBALL'
  | 'BEACH_TENNIS'
  | 'BEACH_VOLLEYBALL'
  | 'BIATHLON'
  | 'BODY_AND_MIND'
  | 'BOOTCAMP'
  | 'BOXING'
  | 'CIRCUIT_TRAINING'
  | 'CORE'
  | 'CRICKET'
  | 'CROSS_TRAINER'
  | 'CROSS_COUNTRY_RUNNING'
  | 'CROSS-COUNTRY_SKIING'
  | 'CYCLING'
  | 'CLIMBING'
  | 'CURLING'
  | 'DANCING'
  | 'DOWNHILL_SKIING'
  | 'DUATHLON'
  | 'DUATHLON_CYCLING'
  | 'DUATHLON_RUNNING'
  | 'E_BIKE'
  | 'ESPORTS'
  | 'FIELD_HOCKEY'
  | 'FINNISH_BASEBALL'
  | 'FITNESS_BOXING'
  | 'FITNESS_DANCING'
  | 'FITNESS_MARTIAL_ARTS'
  | 'FITNESS_STEP'
  | 'FLOORBALL'
  | 'FREE_MULTISPORT'
  | 'FRISBEEGOLF'
  | 'FUNCTIONAL_TRAINING'
  | 'FUTSAL'
  | 'GOLF'
  | 'GRAVEL'
  | 'GROUP_EXERCISE'
  | 'GYMNASTICK'
  | 'HANDBALL'
  | 'HIIT'
  | 'HIKING'
  | 'ICE_HOCKEY'
  | 'ICE_SKATING'
  | 'INDOOR_CYCLING'
  | 'INDOOR_ROWING'
  | 'INLINE_SKATING'
  | 'JAZZ_DANCING'
  | 'JOGGING'
  | 'JUDO_MARTIAL_ARTS'
  | 'JUMP_ROPE'
  | 'KETTLEBELL'
  | 'KICKBIKE'
  | 'KICKBOXING_MARTIAL_ARTS'
  | 'LATIN_DANCING'
  | 'LES_MILLS_BARRE'
  | 'LES_MILLS_BODYATTACK'
  | 'LES_MILLS_BODYBALANCE'
  | 'LES_MILLS_BODYCOMBAT'
  | 'LES_MILLS_BODYJAM'
  | 'LES_MILLS_BODYPUMP'
  | 'LES_MILLS_BODYSTEP'
  | 'LES_MILLS_CXWORKS'
  | 'LES_MILLS_GRIT_ATHLETIC'
  | 'LES_MILLS_GRIT_CARDIO'
  | 'LES_MILLS_GRIT_STRENGTH'
  | 'LES_MILLS_RPM'
  | 'LES_MILLS_SHBAM'
  | 'LES_MILLS_SPRINT'
  | 'LES_MILLS_TONE'
  | 'LES_MILLS_TRIP'
  | 'MOBILITY_DYNAMIC'
  | 'MOBILITY_STATIC'
  | 'MODERN_DANCING'
  | 'MOTORSPORTS_CAR_RACING'
  | 'MOTORSPORTS_ENDURO'
  | 'MOTORSPORTS_HARD_ENDURO'
  | 'MOTORSPORTS_MOTOCROSS'
  | 'MOTORSPORTS_ROADRACING'
  | 'MOTORSPORTS_SNOCROSS'
  | 'MOUNTAIN_BIKING'
  | 'NORDIC_WALKING'
  | 'OBSTACLE_COURSE_RACING'
  | 'OFFROADDUATHLON'
  | 'OFFROADDUATHLON_CYCLING'
  | 'OFFROADDUATHLON_RUNNING'
  | 'OFFROADTRIATHLON'
  | 'OFFROADTRIATHLON_CYCLING'
  | 'OFFROADTRIATHLON_RUNNING'
  | 'OFFROADTRIATHLON_SWIMMING'
  | 'OPEN_WATER_SWIMMING'
  | 'ORIENTEERING'
  | 'ORIENTEERING_MTB'
  | 'ORIENTEERING_SKI'
  | 'OTHER_INDOOR'
  | 'OTHER_OUTDOOR'
  | 'PADEL'
  | 'PARASPORTS_HAND_CYCLING'
  | 'PARASPORTS_SLED_HOCKEY'
  | 'PARASPORTS_WATER_SKIING'
  | 'PARASPORTS_WHEELCHAIR'
  | 'PARASPORTS_WHEELCHAIR_BASKETBALL'
  | 'PARASPORTS_WHEELCHAIR_TENNIS'
  | 'PICKLEBALL'
  | 'PILATES'
  | 'POOL_SWIMMING'
  | 'RIDING'
  | 'RINGETTE'
  | 'ROAD_BIKING'
  | 'ROAD_RUNNING'
  | 'ROLLER_BLADING'
  | 'ROLLER_SKIING_CLASSIC'
  | 'ROLLER_SKIING_FREESTYLE'
  | 'ROWING'
  | 'RUGBY'
  | 'RUNNING'
  | 'SHOW_DANCING'
  | 'SHOOTING_SPORT_INDOOR'
  | 'SHOOTING_SPORT_OUTDOOR'
  | 'SKATEBOARDING'
  | 'SKATING'
  | 'SNOWBOARDING'
  | 'SNOWSHOE_TREKKING'
  | 'SOCCER'
  | 'SPINNING'
  | 'SUP'
  | 'SQUASH'
  | 'STAIR_WORKOUT'
  | 'STREET_DANCING'
  | 'STRENGTH_TRAINING'
  | 'STRETCHING'
  | 'SWIMMING'
  | 'TABLE_TENNIS'
  | 'TAEKWONDO_MARTIAL_ARTS'
  | 'TELEMARK_SKIING'
  | 'TENNIS'
  | 'TRACK_AND_FIELD_RUNNING'
  | 'TRAIL_RUNNING'
  | 'TREADMILL_RUNNING'
  | 'TRIATHLON'
  | 'TRIATHLON_CYCLING'
  | 'TRIATHLON_RUNNING'
  | 'TRIATHLON_SWIMMING'
  | 'TROTTING'
  | 'ULTIMATE'
  | 'ULTRARUNNING_RUNNING'
  | 'VERTICALSPORTS_WALLCLIMBING'
  | 'VERTICALSPORTS_OUTCLIMBING'
  | 'VOLLEYBALL'
  | 'WALKING'
  | 'WATER_EXERCISE'
  | 'WATER_RUNNING'
  | 'WATERSPORTS_CANOEING'
  | 'WATERSPORTS_KAYAKING'
  | 'WATERSPORTS_KITESURFING'
  | 'WATERSPORTS_SAILING'
  | 'WATERSPORTS_SURFING'
  | 'WATERSPORTS_WAKEBOARDING'
  | 'WATERSPORTS_WATERSKI'
  | 'WATERSPORTS_WINDSURFING'
  | 'XC_SKIING_CLASSIC'
  | 'XC_SKIING_FREESTYLE'
  | 'YOGA';

export type UserRPE =
  | 'UNKNOWN'
  | 'RPE_NONE'
  | 'RPE_EASY'
  | 'RPE_LIGHT'
  | 'RPE_FAIRLY_BRISK'
  | 'RPE_BRISK'
  | 'RPE_MODERATE'
  | 'RPE_FAIRLY_HARD'
  | 'RPE_HARD'
  | 'RPE_EXHAUSTING'
  | 'RPE_EXTREME';

export type TrainingLoad =
  | 'UNKNOWN'
  | 'VERY_LOW'
  | 'LOW'
  | 'MEDIUM'
  | 'HIGH'
  | 'VERY_HIGH'
  | 'NOT_AVAILABLE'

export interface PolarExcerciseSummary {
  id: string;
  upload_time: string;
  polar_user: string;
  device: string;
  device_id: string;
  start_time: string;
  start_time_utc_offset: number;
  duration: string;
  calories: number;
  distance: number;
  heart_rate: {
    average: number;
    maximum: number;
  };
  training_load: number;
  sport: string;
  has_route: boolean;
  club_id?: number;
  club_name?: string;
  detailed_sport_info: DetailedSportInfo;
  fat_percentage?: number;
  carbohydrate_percentage?: number;
  protein_percentage?: number;
  'running-index'?: number;
  heart_rate_zones?: Array<{
    index: number;
    'lower-limit': number;
    'upper-limit': number;
    'in-zone': string;
  }>;
  samples?: Array<{
    'recording-rate': number;
    'sample-type': string;
    data: string;
  }>;
  route?: Array<{
    latitude: number;
    longitude: number;
    time: string;
    satellites: number;
    fix: number;
  }>;
  training_load_pro?: {
    date: string;
    'cardio-load': number;
    'muscle-load': number;
    'perceived-load': number;
    'cardio-load-interpretation': TrainingLoad;
    'muscle-load-interpretation': TrainingLoad;
    'perceived-load-interpretation': TrainingLoad;
    'user-rpe': UserRPE;
  };
}

export enum SleepStage {
  WAKE = 0,
  REM = 1,
  LIGHTER_NON_REM = 2,
  LIGHT_NON_REM = 3,
  DEEP_NON_REM = 4,
  UNKNOWN = 5,
}
export enum SleepChargeScale {
  MUCH_BELOW_USUAL = 1,
  BELOW_USUAL = 2,
  USUAL = 3,
  ABOVE_USUAL = 4,
  MUCH_ABOVE_USUAL = 5,
}
export enum SleepRating {
  NO_VALUE = 0,
  VERY_POORLY = 1,
  POORLY = 2,
  OK = 3,
  WELL = 4,
  VERY_WELL = 5,
}

export interface PolarSleep {
  polar_user: string;
  date: string;
  sleep_start_time: string;
  sleep_end_time: string;
  device_id: string;
  continuity: number;
  continuity_class: number;
  light_sleep: number;
  deep_sleep: number;
  rem_sleep: number;
  unrecognized_sleep_stage: number;
  sleep_score: number;
  total_interruption_duration: number;
  sleep_charge: SleepChargeScale;
  sleep_goal: number;
  sleep_rating: SleepRating;
  short_interruption_duration: number;
  long_interruption_duration: number;
  sleep_cycles: number;
  group_duration_score: number;
  group_solidity_score: number;
  group_regeneration_score: number;
  hypnogram: { [key: string]: SleepStage };
  heart_rate_samples: { [key: string]: number };
}
