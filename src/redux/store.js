import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, loadingReducer } from './contacts/contactsReducer';
import { filterReducer } from './filter/filterReducer';

const rootReducer = combineReducers({
    items: contactsReducer,
    filter: filterReducer,
    loading: loadingReducer,
});

const store = configureStore({
    reducer: {
        contacts: rootReducer
    },
});

export default store;