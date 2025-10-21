import { getFirestore } from "firebase-admin/firestore";
import { subDays } from "date-fns";
import { toObj } from "./helpers/data";

import type { User } from "./models";
import type { Activity } from "./models/activity";


const firestore = getFirestore();

export async function findUserByEmail(email: string): Promise<User | null> {
  const snapshot = await firestore
    .collection('USERS')
    .where('email', '==', email)
    .get();

  if (!snapshot.docs[0]) {
    return null;
  }

  return toObj(snapshot.docs[0]) as User;
}

export async function getUserLast30DaysActivities(userId: string): Promise<Activity[]> {
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
