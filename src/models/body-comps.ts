import type { WrappedTimestamp } from '../providers/client-provider';
import type { ActivitySource } from './activity';
import type { GarminBodyCompositionSummary } from './manufacturers/garmin';
import type { Model } from './models';

export interface BodyCompsCommon {
  source: ActivitySource;
  raw: GarminBodyCompositionSummary;

  weightInGrams: number;
  muscleMassInGrams: number;
  boneMassInGrams: number;
  bodyWaterInPercent: number;
  bodyFatInPercent: number;
  bodyMassIndex: number;

  measuredAt: WrappedTimestamp;

  userId?: string;
}

export interface BodyComps extends BodyCompsCommon, Model { }
