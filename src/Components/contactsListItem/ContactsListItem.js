import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ContactsListItemContainer from './ContactsListItemStyled';
import { removeContactById } from '../../redux/contacts/contacts-operations';

const ContactsListItem = ({contact}) => {
    const dispatch = useDispatch();
    const removeContact = (id) => dispatch(removeContactById(id));
    
    const remove = () => removeContact(contact.id);
    
    return (
        <ContactsListItemContainer>
            <span>{contact.name}: {contact.number}</span>
            <button className="deleteBtn" type="button" onClick={remove}>Delete</button>
        </ContactsListItemContainer>
    );
};

ContactsListItem.propTypes = {
    contact: PropTypes.object,
};

export default ContactsListItem;