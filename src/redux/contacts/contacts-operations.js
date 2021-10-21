import axios from 'axios';
import { 
    getContactRequest,
    getContactSuccess,
    getContactError,
    addContactError, 
    addContactRequest, 
    addContactSuccess,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError } from './contactsActions';

axios.defaults.baseURL = 'http://localhost:3030';

const fetchContacts = () => async dispatch => {
    dispatch(getContactRequest());

    try {
        const {data} = await axios.get('/contacts');
        dispatch(getContactSuccess(data));
    } catch (error) {
        dispatch(getContactError(error));
    };

    // axios
    // .get('/contacts')
    // .then(({data}) => dispatch(getContactSuccess(data)))
    // .catch(error => dispatch(getContactError(error)))
};

const addContact = contact => dispatch => {
    dispatch(addContactRequest());

    axios
    .post('/contacts', contact)
    .then(({data}) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)))
};

const removeContactById = id => dispatch => {
    dispatch(deleteContactRequest());

    axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)))
};

export { fetchContacts, addContact, removeContactById};