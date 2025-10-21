import { subDays } from 'date-fns';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { type ServiceAccount } from 'firebase-admin';
import serviceAccount from '../student.json';

initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
  // The database URL depends on the location of the database
  databaseURL: "https://student.asia-northeast1.firebaseio.com",
});

const firestore = getFirestore();

const userId = 'hMflk5xbRCfZBJYdXM8H1stromo2';

async function getUserActivities(userId: string) {
  const activities = await firestore.collection('USERS')
    .doc(userId)
    .collection('ACTIVITIES')
    .where('startDate', '>=', subDays(new Date(), 30))
    .orderBy('startDate', 'desc')
    .get()
    .then(docs => docs.docs.map(doc => doc.data()));

  return activities;
}

async function main() {
  const activities = await getUserActivities(userId);
  console.log(activities);
}

main();
