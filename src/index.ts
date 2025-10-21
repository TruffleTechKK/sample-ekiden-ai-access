import { subDays } from 'date-fns';
import { firestore } from 'firebase-admin';

const f = firestore();

const userId = '';

async function main() {
  const activities = await f.collection('USERS')
    .doc(userId)
    .collection('ACTIVITIES')
    .where('startDate', '>=', subDays(new Date(), 30))
    .orderBy('startDate', 'desc')
    .get()
    .then(docs => docs.docs.map(doc => doc.data()));

  console.log(activities);
}

main();
