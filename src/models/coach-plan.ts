import type { ID, Model, Response } from './models';

export enum PlanType {
  ONE_OFF = 'ONE_OFF',
  RECURRING = 'RECURRING',
  FREEMIUM = 'FREEMIUM',
}
export enum PlanStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  ARCHIVED = 'ARCHIVED',
}

export const PromptField: string[] = [
  // Activity fields
  'activity.startDate',
  'activity.distance',
  'activity.elapsedTime',
  'activity.averageSpeed',
  'activity.maxSpeed',
  'activity.averageCadence',
  'activity.elevHigh',
  'activity.elevLow',
  'activity.calories',
  'activity.maxHeartRate',
  'activity.averageHeartRate',
  // 'activity.feedback',
  'activity.feedback.perceivedEffort',
  'activity.feedback.mood',
  'activity.feedback.notes',
  // 'activity.startCoordinateWeather',
  'activity.startCoordinateWeather.temperature',
  'activity.startCoordinateWeather.heatIndex',
  'activity.startCoordinateWeather.windChill',
  'activity.startCoordinateWeather.wetBulbTemperature',
  'activity.startCoordinateWeather.relativeHumidity',
  'activity.startCoordinateWeather.uvIndex',
  'activity.startCoordinateWeather.precipitation',
  'activity.startCoordinateWeather.thunderstormProbability',
  'activity.startCoordinateWeather.airPressure',
  'activity.startCoordinateWeather.visibility',
  'activity.startCoordinateWeather.wind',
  // 'activity.sections',
  'activity.sections.pace',
  'activity.sections.intensity',

  // User health fields
  'healthSummary.activeKilocalories',
  'healthSummary.bmrKilocalories',
  'healthSummary.steps',
  'healthSummary.distanceInMeters',
  'healthSummary.floorsClimbed',
  'healthSummary.minHeartRateInBeatsPerMinute',
  'healthSummary.maxHeartRateInBeatsPerMinute',
  'healthSummary.averageHeartRateInBeatsPerMinute',
  'healthSummary.restingHeartRateInBeatsPerMinute',
  'healthSummary.moderateIntensityDurationInSeconds',
  'healthSummary.vigorousIntensityDurationInSeconds',
  'healthSummary.stressDurationInSeconds',
  'healthSummary.activityStressDurationInSeconds',
  'healthSummary.lowStressDurationInSeconds',
  'healthSummary.mediumStressDurationInSeconds',

  // User upcoming events
  'user.upcomingEvents',

  // User metrics fields
  'metrics.vo2Max',
  'metrics.vo2MaxCycling',

  // User VO2Max paces
  'user.vo2MaxTrainingPaces',
  'user.vo2MaxTrainingIntensity',

  // User body composition fields
  'bodyComps.weightInGrams',
  'bodyComps.boneMassInGrams',
  'bodyComps.bodyWaterInPercent',
  'bodyComps.bodyFatInPercent',
  'bodyComps.bodyMassIndex',

  // User sleep fields
  'sleep.durationInSeconds',
  'sleep.unmesurableSleepDurationInSeconds',
  'sleep.deepSleepDurationInSeconds',
  'sleep.lightSleepDurationInSeconds',
  'sleep.remSleepInSeconds',
];
export type PromptFieldType = (typeof PromptField)[number];

export enum PromptScenario {
  // Apply to every prompt
  DEFAULT_PROMPT = 'default-prompt',

  // Apply to topic with activity
  ACTIVITY_INITIAL_FEEDBACK = 'activity-initial-feedback',
  ACTIVITY_SUBSEQUENT_RESPONSE = 'activity-subsequent-response',

  // Apply to topic without activity
  TOPIC_RESPONSE = 'topic-response',
}

export interface Prompt {
  content: string;
  scenario: PromptScenario;
  disabled?: boolean;
}

export type PromptFieldIncluded = Record<PromptFieldType, boolean>;

export interface PromptState {
  defaultPrompts: string[];
  initialFeedbackPrompts: string[];

  includedFields?: PromptFieldIncluded;
  prompts: Prompt[];
}

export interface CoachPlanCommon extends PromptState {
  name: string;
  planType: PlanType;

  price: number;
  currency: string;
  description: string;
  interval: 'month' | 'week' | 'day' | 'year';

  coachId: ID;

  target: string;
  duration: number;
  durationUnit: string;

  stripeProductId?: string;
  stripePriceId?: string;

  status: PlanStatus;

  freemium?: boolean;
}

export interface CoachPlan extends CoachPlanCommon, Model {}
export interface CoachPlanResponse extends CoachPlanCommon, Response {}
