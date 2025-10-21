import type { ID, Model } from './models';

export enum TemplateHistoryType {
  SEND = 'send',
  CUSTOMIZE = 'customize',
  SAVE_QUICK_ACCESS = 'save-quick-access',
}

export interface TemplateHistoryCommon {
  templateId: ID;
  input: Record<string, string | number>;
  content: string;
  type: TemplateHistoryType;
  userId: ID;
}

export interface TemplateHistory extends TemplateHistoryCommon, Model {}
