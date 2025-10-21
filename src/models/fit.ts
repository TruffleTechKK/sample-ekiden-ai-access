import type { CorosFitMessage } from "./coros";
import type { GarminFitMessages } from "./garmin";
import type { PolarFitMessages } from "./polar";

export type FitMessage = GarminFitMessages | CorosFitMessage | PolarFitMessages
