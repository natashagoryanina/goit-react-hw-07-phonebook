import { createAction } from "@reduxjs/toolkit";

const getContactRequest = createAction('contacts/getContactRequest');
const getContactSuccess = createAction('contacts/getContactSuccess');
const getContactError = createAction('contacts/getContactError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

export {
    getContactRequest,
    getContactSuccess,
    getContactError,
    addContactRequest, 
    addContactSuccess, 
    addContactError, 
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
};
