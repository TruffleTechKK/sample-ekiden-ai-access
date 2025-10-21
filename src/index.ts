import { subDays } from 'date-fns';
import { initializeApp, cert, getApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { type ServiceAccount } from 'firebase-admin';
import serviceAccount from '../student.json';
import { toObj } from './helpers/data';
import type { Activity } from './models/activity';
import type { User } from './models';

initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});
const firestore = getFirestore();
firestore.settings({
  databaseId: 'student'
})
async function findUserByEmail(email: string): Promise<User | null> {
  const snapshot = await firestore
    .collection('USERS')
    .where('email', '==', email)
    .get();

  if (!snapshot.docs[0]) {
    return null;
  }

  return toObj(snapshot.docs[0]) as User;
}

async function getUserLast30DaysActivities(userId: string): Promise<Activity[]> {
  const activities = await firestore
    .collection('USERS')
    .doc(userId)
    .collection('ACTIVITIES')
    .where('startDate', '>=', subDays(new Date(), 30))
    .orderBy('startDate', 'desc')
    .get()
    .then(snapshot => snapshot.docs.map(doc => toObj(doc) as Activity));

  return activities;
}

async function main() {
  const user = await findUserByEmail('tn@truffletechnologies.co.jp');
  if (!user) {
    console.log('User not found');
    return;
  }

  console.log('User:', user.firstName, user.lastName);
  const activities = await getUserLast30DaysActivities(user.id);
  console.log('Found', activities.length, 'activities');
}

main();
