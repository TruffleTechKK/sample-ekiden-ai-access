import type { WrappedTimestamp } from '../providers/client-provider';

export type ID = string;
export type Optional<T> = {
  [K in keyof T]?: T[K] | null;
};

interface Common {
  id: ID;
  path: string;
  originalTranslationId?: ID;
  language?: string;
  parentPath: string;
  parentId: string;
}
export interface Model extends Common {
  createdAt: Date;
  createdById: string;
  createdBy: { name: string; email: string; id: string; phoneNumber: string };
  updatedAt: WrappedTimestamp | Date | null;
  updatedById: string;
  updatedBy: { name: string; email: string; id: string; phoneNumber: string };
}

export interface Response extends Common {
  createdAt: string;
  updatedAt: string | null;
}
