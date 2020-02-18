export const createCoach = (coach) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make an async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid
    const email = getState().firebase.auth.email

    firestore.collection('coaches').add({
      ...coach,
      coachFirstName: profile.firstName,
      coachLastName: profile.lastName,
      email: email,
      coachId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_COACH', coach: coach });
    }).catch((err) => {
      dispatch({ type: 'CREATE_COACH_ERROR', err});
    })

  }
}
