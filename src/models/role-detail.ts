import type { ID } from '.';

export interface RoleDetail<T> {
  name: string;
  enabled: boolean;
  targetId?: ID;
  targetType?: T;
}
