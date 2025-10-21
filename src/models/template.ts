import type { ID, Model } from './models';

export enum TemplateStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  INACTIVE = 'inactive',
  ARCHIVED = 'archived',
}

export interface TemplateVariable {
  name: string;
  positions: { start: number; end: number }[];
}

export enum TemplateOwner {
  COACH = 'coach',
  SYSTEM = 'system',
  RUNNER = 'runner',
  PRIVATE = 'private',
}

export enum TemplateFor {
  COACH = 'coach',
  ATHLETE = 'athelete',
}

export interface TemplateCommon {
  name: string;
  content: string;

  status: TemplateStatus;

  owner: TemplateOwner;
  ownerId?: ID;

  variables: TemplateVariable[];

  for: TemplateFor[];

  startConversation: boolean;
}

export interface Template extends TemplateCommon, Model {}
