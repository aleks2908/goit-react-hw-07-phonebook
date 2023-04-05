import React from 'react';
import { Contact } from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import css from './ContactList.module.css';
import { selectFilteredContactList } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const onDelete = contactId => dispatch(deleteContact(contactId));

  const filteredContactList = useSelector(selectFilteredContactList).sort(
    (a, b) => a.name.localeCompare(b.name)
  );

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
