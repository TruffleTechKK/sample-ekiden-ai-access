import './firebase';
import { findUserByEmail, getUserLast30DaysActivities } from "./firestore";
import type { Activity } from './models/activity';
import { downloadActivityFitFile } from './storage';

async function main() {
  const user = await findUserByEmail('tn@truffletechnologies.co.jp');
  if (!user) {
    console.log('User not found');
    return;
  }

  console.log('User:', user.firstName, user.lastName);
  const activities = await getUserLast30DaysActivities(user.id);
  console.log('Found', activities.length, 'activities');

  if (activities.length === 0) {
    return;
  }

  const activity = activities[0] as Activity;
  const file = await downloadActivityFitFile(activity);
  console.log('Fit file downloaded to', file);
}

main();
