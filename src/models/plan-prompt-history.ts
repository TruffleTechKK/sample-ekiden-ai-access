import type { PromptState } from "./coach-plan";
import type { ID, Model } from "./models";

export interface PlanPromptHistoryCommon extends PromptState {
  oldState: PromptState;
  newState: PromptState;

  coachId: ID;
  planId: ID;
}

export interface PlanPromptHistory extends PlanPromptHistoryCommon, Model {
}
