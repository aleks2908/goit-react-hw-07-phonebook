import React from 'react';
import { Contact } from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectFilter, selectContacts } from '../../redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onDelete = contactId => dispatch(deleteContact(contactId));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <table className={css.contactListTable}>
      <tbody>
        {filteredContactList.map(contact => (
          <tr key={contact.id} className={css.contactListItem}>
            <Contact contact={contact} onDelete={onDelete} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
