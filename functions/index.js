const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// exports.helloUniverse = functions.https.onRequest((request, response) => {
//   response.send("Hello from Coach finder app");
// });

const createRecentActivity = ((recentactivity) => {
  return admin.firestore().collection('recentactivities')
  .add(recentactivity)
  .then(doc => console.log('Recent Activity added ', doc));
})

exports.coachCreated = functions.firestore
.document('coaches/{coachId}')
.onCreate(doc => {
    const coach = doc.data();
    const recentactivity = {
      content: 'Added a new Coach',
      user: `${coach.coachFirstName} ${coach.coachLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createRecentActivity(recentactivity);
});

exports.userJoined = functions.auth.user()
  .onCreate(user => {

    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {

        const newUser = doc.data();
        const recentactivity = {
          content: 'New Coach Registered',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createRecentActivity(recentactivity);
      })
  })
