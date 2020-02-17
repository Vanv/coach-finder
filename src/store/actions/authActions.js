import firebase from 'firebase'

export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({type: 'LOGIN_SUCCESS'});
    }).catch((err) => {
      dispatch({type: 'LOGIN_ERROR', err});
    });

  }
}

export const signOut = () => {
  return (dispatch, getState) => {
    // const firebase = getFirebase();

    firebase.auth().signOut()
    .then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS'})
    });
  }
}

export const register = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

      const firestore = getFirestore();

      firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      ).then((resp) => {
        return firestore.collection('users').doc(resp.user.uid).set({
          firstName: newUser.displayName,
          lastName: newUser.lastName,
          initials: newUser.displayName[0] + newUser.lastName[0]
        })
      }).then(() => {
        dispatch({ type: 'REGISTER_SUCCESS'})
      }).catch(err => {
        dispatch({ type: 'REGISTER_ERROR', err })
      })
    }
}
