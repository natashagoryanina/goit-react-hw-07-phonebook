import React, {useEffect} from 'react';
import ContactsForm from './contactsForm/ContactsForm';
import ContactsList from './contactsList/ContactsList';
import Filter from './filter/Filter';
import GlobalStyles from '../styles/globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import { loadingSelector } from '../redux/contacts-selectors';

const App = () => {
    const loading = useSelector(loadingSelector);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <main>
            <GlobalStyles></GlobalStyles>
            <h1>Phonebook</h1>
            <ContactsForm/>
            <Filter />
            <h2>Contacts</h2>
            {loading && <h3>Loading...</h3>}
            <ContactsList/>
        </main>
    );
};

export default App;
