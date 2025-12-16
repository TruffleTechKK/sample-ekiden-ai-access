import { events } from "../helpers/static-data";
import type { WrappedTimestamp } from "../providers/client-provider";
import type { ID, Model } from "./models";
import type { RunResult } from "./user";

export enum EventOwner {
  System = "system",
  User = "user",
  Coach = "coach",
}

export type DistanceType = (typeof events[number])["value"];
export enum EventType {
  RACE = 'race',
  TRAINING = 'training'
}
export interface EventCommon {
  userId: ID;
  owner: EventOwner;
  distance: DistanceType;
  distanceInMeters?: number;
  type: EventType;

  startAt: WrappedTimestamp;
  endAt: WrappedTimestamp;

  name: string;
  description: string;

  target?: RunResult | null;

  activityId?: ID;
  activityTopicId?: ID;
}

export interface Event extends EventCommon, Model { }
