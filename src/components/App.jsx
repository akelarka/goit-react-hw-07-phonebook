import { getItems } from 'redux/selectors';
import { useSelector } from 'react-redux';
import ContactForm from './modules/ContactForm/ContactForm';
import ContactList from './modules/ContactList/ContactList';

export const App = () => {
  const contacts = useSelector(getItems);

  return (
    <>
      <ContactForm contacts={contacts} />
      <ContactList contacts={contacts} />
    </>
  );
};
