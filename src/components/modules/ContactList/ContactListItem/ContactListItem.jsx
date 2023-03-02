import PropTypes from 'prop-types';
import Button from '../../../shared/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactName, ContactNumber } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <Button type={'button'} onClick={handleDelete} text={'Delete'} />
    </li>
  );
};

export default ContactListItem;

ContactListItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
