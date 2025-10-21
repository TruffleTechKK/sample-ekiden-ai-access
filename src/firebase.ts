import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import { type ServiceAccount } from 'firebase-admin';
import serviceAccount from '../student.json';

initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});

const firestore = getFirestore();
firestore.settings({
  databaseId: 'student'
})
