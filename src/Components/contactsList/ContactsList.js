import React from 'react';
import ContactsListItem from '../contactsListItem/ContactsListItem';
import ContactsListContainer from './ContactsListStyled';
import { useSelector } from 'react-redux';
import { filteredContactsSelector } from '../../redux/contacts-selectors';

const ContactsList = () => {
    const contacts = useSelector(filteredContactsSelector);

    return (
        <ContactsListContainer>
            {!!contacts.length ? contacts.map((contact)=> 
                <ContactsListItem contact={contact}/>
            ) : <p>No contacts</p>}
        </ContactsListContainer>
    );
};

export default ContactsList;

