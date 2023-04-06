import React from 'react';
import { Contact } from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import css from './ContactList.module.css';
import { selectFilteredContactList } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const onDelete = (contactId, contactName) => {
    // eslint-disable-next-line no-restricted-globals
    const shouldDelete = confirm(
      `"Do you really want to remove ${contactName}?"`
    );

    if (shouldDelete) {
      dispatch(deleteContact(contactId));
    }
  };

  const filteredContactList = useSelector(selectFilteredContactList);

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
