import * as ActionTypes from '../constants/ActionTypes';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

const isLogged = (bool) => {
    return {
        type: ActionTypes.IS_LOGGED,
        isLogged: bool
    }
};

const loginHasError = (bool) => {
    return {
        type: ActionTypes.LOGIN_HAS_ERROR,
        hasError: bool
    }
};

const loginIsLoading = (bool) => {
    return {
        type: ActionTypes.LOGIN_IS_LOADING,
        isLoading: bool
    }
};

const setAsyncStorage = () => {

};

const login = (username, password) => {
   
    return (dispatch) => {
        dispatch(loginIsLoading(true));
        if(!username || !password){
            dispatch(loginHasError(true));
            dispatch(loginIsLoading(false));
            return;
        }

        fetch('http://ec2-52-207-124-182.compute-1.amazonaws.com:3333/api/v1/organizerLogin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"email" 		: "admin1@gmail.com",
            "password"  	: "12345678",
            "device_type"	: "android",
            "device_token"  : "a783y4yghiysvy9734udchks984"})
        })
            .then((res) => res.json())
            .then(res => {
                console.log(res)
                // cancela execução de call
                dispatch(loginIsLoading(false));
                dispatch(loginHasError(false));
                dispatch(isLogged(true));
                AsyncStorage.setItem('token', 'asdasdasd123'); // example
                Actions.Main();

                // console.log(res);
                // if(res.connected){
                //     dispatch(loginHasError(false));
                //     dispatch(isLogged(true));
                //     AsyncStorage.setItem('token', 'asdasdasd123'); // example
                //     Actions.Main();
                // }
            })
            .catch((e) => {
                // console.warn(e);
                dispatch(loginHasError(true));
            });
    }
};

const logout = () => {
    AsyncStorage.removeItem('token');
    Actions.Login();
    return {
        type: ActionTypes.LOGOUT
    }
};

export default {
    isLogged,
    loginHasError,
    loginIsLoading,
    login,
    logout
}
