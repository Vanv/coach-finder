export const createCoach = (coach) => {
  return (dispatch, getState) => {
    //make an async call to database
    dispatch({type: 'CREATE_COACH', coach: coach})
  }
}
