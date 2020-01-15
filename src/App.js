import React from 'react';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

import Navigation from './navigation/Navigation'

import {createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers/index'; 

const store = createStore(reducers, applyMiddleware(thunk));

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24 * 365, // 1 year
  enableCache: true,
  sync: {}
});
global.storage = storage;

// global.BASE_URL = 'http://3.10.223.23/api.digitalrenter.com';

global._validateEmail = email => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

global._gen422Errors = errors => {
    let error = ''; 
    let errorMessage = ''; 

    for (var key in errors) {
        if (errors.hasOwnProperty(key)) {
            errorMessage += errors[key][0] + '\n\n'; 
        }
    }
    return errorMessage; 
}

const App: () => React$Node = () => {
    return (
    	<Provider store={store}>
      		<Navigation />
    	</Provider>
    );
};

export default App;
