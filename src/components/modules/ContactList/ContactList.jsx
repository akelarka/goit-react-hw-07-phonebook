import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectItems } from 'redux/selectors';
import { selectSearchValue } from 'redux/selectors';
import Filter from '../Filter/Filter';
import ContactListItem from './ContactListItem/ContactListItem';
import {
  PhoneBookList,
  Contact,
  ListMessage,
  Loader,
} from './ContactList.styled';

const ContactList = ({ contacts, deleteContact, findContact }) => {
  const { isLoading } = useSelector(selectItems);
  const filter = useSelector(selectSearchValue);
  let filteredContacts = contacts;

  if (filter.searchValue.toLowerCase()) {
    filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.searchValue.toLowerCase())
    );
  }
  return (
    <>
      <Filter findContact={findContact}></Filter>
      {isLoading && <Loader className="inputName">Loading contacts...</Loader>}
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
