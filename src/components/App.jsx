import { useState, useEffect, useRef } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const firsRender = useRef(true);

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    if (!localContacts || JSON.parse(localContacts).length === 0) {
      return setContacts(INITIAL_STATE);
    }
    return setContacts(JSON.parse(localContacts));
  }, []);

  useEffect(() => {
    if (firsRender.current) {
      firsRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = value => {
    if (contacts.map(contact => contact.name === value.name).includes(true)) {
      return alert(`${value.name} is alredy in contacts`);
    }
    setContacts(prevState => [...prevState, value]);
  };
  const setFilterName = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };
  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const deleteContact = conatactId => {
    setContacts(contacts.filter(contact => contact.id !== conatactId));
  };

  return (
    <>
      <GlobalStyle />
      <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter setFilterName={setFilterName} value={filter} />
        <ContactList
          contacts={filteredContacts()}
          deleteContact={deleteContact}
        />
      </section>
    </>
  );
};
