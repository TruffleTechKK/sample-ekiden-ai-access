import type { DocumentSnapshot, Timestamp } from 'firebase-admin/firestore';
import type { Model, Response } from '../models';

export function dateFromTimestamp(
  value?: null | string | Date | Timestamp,
  defaultValue: Date | null = null
): Date | null {
  if (!value) {
    return defaultValue;
  }

  if (typeof value === 'string') {
    return new Date(value);
  }

  if (typeof value === 'object' && value instanceof Date) {
    return value;
  }

  return value.toDate();
}

/**
 *
 * @param {WrappedDocumentSnapshot} snap
 * @return {Model | null}
 */
export function toObj<T extends Model>(snap?: DocumentSnapshot<T | null> | null): T | null {
  if (!snap) {
    return null;
  }

  const data = snap.data();
  if (!data) {
    return null;
  }
  return {
    ...(data as any), // eslint-disable-line
    createdAt: dateFromTimestamp(data.createdAt),
    updatedAt: dateFromTimestamp(data.updatedAt),
    id: data.originalTranslationId ? data.originalTranslationId : snap.id,
    language: data.originalTranslationId ? snap.id : null,
    path: snap.ref.path,
    parentPath: snap.ref.parent.parent?.path || null,
    parentId: snap.ref.parent.parent?.id || null,
  } as T;
}

/**
 *
 * @param {WrappedDocumentSnapshot[]} snaps
 * @return {Model[]}
 */
export function toList<T extends Model>(snaps: DocumentSnapshot<T>[]): T[] {
  const list: T[] = [];

  snaps.map((snap) => {
    const obj = toObj<T>(snap);
    if (obj) {
      list.push(obj);
    }
  });

  return list;
}

/**
 *
 * @param {Snapshot} snap
 * @return {Response | null}
 */
export function toResponse<T extends Response>(snap: DocumentSnapshot): T | null {
  const data = snap.data();
  if (!data) {
    return null;
  }

  return {
    ...data,
    createdAt: data && data.createdAt ? (data.createdAt.toDate().toISOString() as string) : null,
    updatedAt: data && data.updatedAt ? (data.updatedAt.toDate().toISOString() as string) : null,
    id: data.originalTranslationId ? data.originalTranslationId : snap.id,
    language: data.originalTranslationId ? snap.id : null,
  } as T;
}

// eslint-disable-next-line
export function removeUndefinedKeys(obj: Record<string, any>) {
  if (typeof obj === 'undefined') {
    return null;
  }
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  // eslint-disable-next-line
  const newObj: Record<string, any> = {};

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      newObj[key] = removeUndefinedKeys(obj[key]);
    } else if (obj[key] === undefined) {
      newObj[key] = null;
    } else {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

export function splitArrayIntoChunks<T>(arr: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}
