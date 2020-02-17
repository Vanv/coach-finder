const initState = {
  authError: null
}
const authReducer = ( state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
    console.log('Login error');
    return {
      ...state,
      authError: 'Login failed'
    }

    case 'LOGIN_SUCCESS' :
    console.log('Login success');
    return {
      ...state,
      authError: null
    }

    case 'SIGNOUT_SUCCESS':
    console.log("Successufully signed out");
    return state;

    case 'REGISTER_SUCCESS':
    console.log("Register success");
    return {
      ...state,
      authError: null
    }

    case 'REGISTER_ERROR':
    console.log("Error in Register");
    return {
      ...state,
      authError: action.err.message
    }

    default:
    return state;

  }
}

export default authReducer
