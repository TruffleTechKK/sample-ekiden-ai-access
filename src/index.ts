import { findUserByEmail, getUserLast30DaysActivities } from "./firestore";

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
