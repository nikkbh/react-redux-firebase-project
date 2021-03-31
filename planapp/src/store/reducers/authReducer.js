const initState = {
    authError: null,
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login Failed');
            return {
                ...state,
                authError: 'Login Failed',
            }
        case 'LOGIN_SUCCESSFUL':
            console.log('Login Success');
            return {
                ...state,
                authError: 'Login Success',
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Sign-up Success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Signup error')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}
 
export default authReducer;