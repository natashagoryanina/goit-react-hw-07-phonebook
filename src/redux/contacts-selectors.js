import { createSelector } from 'reselect';

export const filterValueSelector = (state) => state.contacts.filter;
export const contactSelector = (state) => state.contacts.items;
export const loadingSelector = (state) => state.contacts.loading;

export const filteredContactsSelector = createSelector(
    [contactSelector, filterValueSelector],
    (contacts, filter) => contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase())),
);