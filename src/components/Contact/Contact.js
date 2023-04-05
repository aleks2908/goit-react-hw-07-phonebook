import React from 'react';
import css from './Contact.module.css';
import PropTypes from 'prop-types';

export const Contact = ({ contact, onDelete }) => {
  // const phoneNumber = <a href='tel:{contact.phone}'>{contact.phone}</a>;
  const phoneNumber = `tel:${contact.phone}`;
  return (
    <>
      <td>{contact.name}</td>
      <td>
        <a href={phoneNumber}>{contact.phone}</a>
      </td>
      <td
        onClick={() => onDelete(contact.id)}
        className={css.deleteButton}
        id={contact.id}
      >
        Delete
      </td>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
