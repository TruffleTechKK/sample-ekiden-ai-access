import type { Coach } from './coach';
import type { Photo } from './photo';
import type { User } from './user';

export type CommandAction = '@' | '+';

export interface MentionCommand {
  command: '@';
  user: User;
  coach: Coach;
  searchables: string[];
  isCoach: boolean;
}

export interface AttachCommand {
  command: '+';
  url: string;
  localPath: string;
  photo: Photo;
  searchables: string[];
}
export type Command = MentionCommand | AttachCommand;

export type CommandSet = Record<CommandAction, Command[]>;
