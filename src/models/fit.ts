import type { CorosFitMessage } from "./manufacturers/coros";
import type { GarminFitMessages } from "./manufacturers/garmin";
import type { PolarFitMessages } from "./manufacturers/polar";
import type { SuuntoFitMessage } from "./manufacturers/suunto";

export type FitMessage = GarminFitMessages | CorosFitMessage | PolarFitMessages | SuuntoFitMessage;
