import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    };
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        //make api request  to sign up with that email and password

        try {
            const response = await trackerAPI.post('/signup', {
                email,
                password
            });
            console.log(response.data);
        } catch (error) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with signup' });
        }

        //if we signup modify our state and say that we are authenticated

        //If signup fail, we need to reflet an error message to tbe user
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        //Try to signin
        //handle success by updating
        //handle failure by showing error
    };
};

const signout = (dispatch) => {
    return () => {
        // signout
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { isSignedIn: false, errorMessage: '' }
);