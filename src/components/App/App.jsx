import { ContactForm } from '../ContactForm/ContactForm';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactList } from '../ContactList/ContactList';
import './App.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import { EmptyContacts } from '../EmptyContacts/EmptyContacts';

function App() {
  const reduxUsers = useSelector(selectContacts);
  const reduxInputFilter = useSelector(selectNameFilter);

  const visibleUsers = reduxUsers.filter(user =>
    user.name.toLowerCase().includes(reduxInputFilter.toLowerCase()),
  );

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList items={visibleUsers} />
      {(reduxUsers.length === 0 || visibleUsers.length === 0) && (
        <EmptyContacts />
      )}
    </div>
  );
}

export default App;
