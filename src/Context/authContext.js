import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        case 'signout':
            return { token: null, errorMessage: ''};
        default:
            return state;
    };
};

const tryLocalSignIn = dispatch => async() => {
  const token = await AsyncStorage.getItem('token');
  if(token) {
      console.log("token is present should go to TrackList");
      dispatch({type: 'signin', payload: token});
      navigate('TrackList');
  }else {
    console.log("token is absent should go to Signup");
      navigate('Signup');
  }
};

const clearErrorMessage = (dispatch) => () => {
    console.log('clearErrorMessage on dispatch');
    dispatch({type: 'clear_error_message'});
};

const signup = (dispatch) => async ({ email, password }) => {
    //make api request  to sign up with that email and password

    try {
        const response = await trackerAPI.post('/signup', {
            email,
            password
        });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });

        navigate('TrackList');
    } catch (error) {
        console.log(error);
        dispatch({ type: 'add_error', payload: 'Something went wrong with signup' });
    }

    //if we signup modify our state and say that we are authenticated

    //If signup fail, we need to reflet an error message to tbe user
};


const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerAPI.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList')
    } catch (error) {
        dispatch({
            type: 'add_error', payload: 'Something went wrong with sign'
        })
    }
};

const signout = (dispatch) => async()=>{
    await AsyncStorage.removeItem('token');
    dispatch({type: signout});
    navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignIn },
    { token: null, errorMessage: '' }
);