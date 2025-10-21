export interface Photo {
  source: string;
  mediaUrl: string;
  storageObject: {
    bucket: string;
    name: string;
    cloudStorageURI: string;
  };
  metadata: Record<string, string | number | boolean>;
}

export type File = Photo;
