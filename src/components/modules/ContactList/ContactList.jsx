import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getSearchValue } from 'redux/selectors';
import Filter from '../Filter/Filter';
import ContactListItem from './ContactListItem/ContactListItem';
import { PhoneBookList, Contact, ListMessage } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact, findContact }) => {
  const filter = useSelector(getSearchValue);
  let filteredContacts = contacts;

  if (filter.searchValue.toLowerCase()) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.searchValue.toLowerCase())
    );
  }
  return (
    <>
      <Filter findContact={findContact}></Filter>
      {!contacts.length && (
        <ListMessage className="inputName">
          Your contactlist is empty
        </ListMessage>
      )}
      {!filteredContacts.length && Boolean(contacts.length) && (
        <ListMessage className="inputName">No contacts found</ListMessage>
      )}
      <PhoneBookList>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <Contact key={id}>
              <ContactListItem
                id={id}
                name={name}
                number={number}
                deleteContact={deleteContact}
              />
            </Contact>
          );
        })}
      </PhoneBookList>
    </>
  );
};

export default ContactList;

ContactList.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func.isRequired,
};
