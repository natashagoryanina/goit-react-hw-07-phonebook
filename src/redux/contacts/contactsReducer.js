import { createReducer } from '@reduxjs/toolkit';
import { 
    getContactRequest,
    getContactSuccess,
    getContactError,
    addContactSuccess, 
    addContactRequest, 
    addContactError, 
    deleteContactSuccess,
    deleteContactRequest,
    deleteContactError } from "./contactsActions";

const contactsReducer = createReducer([], {
    [getContactSuccess]: (_, {payload}) => payload,
    [addContactSuccess]: (state, {payload}) => {
        return [...state, payload];
    },
    [deleteContactSuccess]: (state, {payload}) => {
        return state.filter(contact => contact.id !== payload);
    },
});

const loadingReducer = createReducer(false, {
    [getContactRequest]: () => true,
    [getContactSuccess]: () => false,
    [getContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

export { contactsReducer, loadingReducer};