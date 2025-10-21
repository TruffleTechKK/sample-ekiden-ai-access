import { getStorage } from 'firebase-admin/storage';
import type { Activity } from "./models/activity";

const storage = getStorage();

export async function downloadActivityFitFile(activity: Activity) {
  if (!activity.file) {
    throw Error('Activity missing FIT file');
  }

  console.log(activity.file)
  const ref = storage
    .bucket(activity.file.storageObject.bucket)
    .file(activity.file.storageObject.name);

  const fileName = `/tmp/${activity.id}.FIT`
  await ref.download({
    destination: fileName
  })

  return fileName;
}
