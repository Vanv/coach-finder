export const createCoach = (coach) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make an async call to database
    const firestore = getFirestore();

    firestore.collection('coaches').add({
      ...coach,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_COACH', coach: coach });
    }).catch((err) => {
      dispatch({ type: 'CREATE_COACH_ERROR', err});
    })

  }
}
