import type { ID, Model } from './models';

export enum TemplateQuickAccessStatus {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
}

export interface TemplateQuickAccessCommon {
  templateId: ID;
  userId: ID;
  status: TemplateQuickAccessStatus;
}

export interface TemplateQuickAccess extends TemplateQuickAccessCommon, Model {}
