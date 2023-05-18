import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export class App extends Component {
  state = { contacts: [], filter: '' };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (!contacts || JSON.parse(contacts).length === 0) {
      this.setState({ contacts: INITIAL_STATE });
      return;
    }
    this.setState({ contacts: JSON.parse(contacts) });
    return;
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = value => {
    const { contacts } = this.state;
    if (contacts.map(contact => contact.name === value.name).includes(true)) {
      alert(`${value.name} is alredy in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, value],
    }));
  };
  setFilterName = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  filteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  deleteContact = conatactId => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== conatactId
      ),
    });
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <section>
          <h1>Phonebook</h1>
          <ContactForm
            onSubmit={this.addContact}
            contacts={this.state.contacts}
          />

          <h2>Contacts</h2>
          <Filter
            setFilterName={this.setFilterName}
            value={this.state.filter}
          />
          <ContactList
            contacts={this.filteredContacts()}
            deleteContact={this.deleteContact}
          />
        </section>
      </>
    );
  }
}
