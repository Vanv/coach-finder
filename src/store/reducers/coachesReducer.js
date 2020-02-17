const initState = {
  coaches : []
}

const coachesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_COACH':
    console.log('Created Coach', action.coach);
    return state;

    case 'CREATE_COACH_ERROR':
    console.log('coach created error', action.err);
    return state;

    default:
    return state;

  }
}

export default coachesReducer
