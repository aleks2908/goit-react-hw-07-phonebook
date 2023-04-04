import React from 'react';
import css from './Contact.module.css';
import PropTypes from 'prop-types';

export const Contact = ({ contact, onDelete }) => {
  return (
    <>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
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
