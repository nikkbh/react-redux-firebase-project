// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './store/reducers/rootReducer';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { getFirebase } from 'react-redux-firebase';
// import fbConfig from './config/fbConfig';
// import firebase from "firebase/app";

// const store = createStore(rootReducer, 
//   compose(
//       applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//       // reactReduxFirebase(firebase, fbConfig),
//       reduxFirestore(firebase, fbConfig)
//     )
//   );

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}><App /></Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
// import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import {createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app'
import fbConfig from './config/fbConfig'


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig)
    )
);


const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
  }
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
    
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'));
// serviceWorker.unregister();         This causes an _Internalfirebase is null TypeError



