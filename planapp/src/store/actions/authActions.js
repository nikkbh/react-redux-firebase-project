import { getFirebase } from "react-redux-firebase";

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password,
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESSFUL'})
        }).catch((err) =>{
            dispatch({type: 'LOGIN_ERROR', err})
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, {fetFirebse}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'})
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirebase().firestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.fname,
                lastName: newUser.lname,
                initials: newUser.fname[0] + newUser.lname[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'});
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err});
        })
    }
}