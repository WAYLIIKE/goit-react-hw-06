import { ContactForm } from '../ContactForm/ContactForm';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactList } from '../ContactList/ContactList';
import './App.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { EmptyContacts } from '../EmptyContacts/EmptyContacts';

function App() {
  const reduxUsers = useSelector(selectContacts);
  // const reduxInputFilter = useSelector(selectNameFilter);

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {reduxUsers.length === 0 && <EmptyContacts />}
    </div>
  );
}

export default App;
