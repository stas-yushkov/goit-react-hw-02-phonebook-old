// import data from './data/data.json'

import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactsList from './components/ContactsList'
import ContactInputForm from './components/ContactInputForm'
import ContactFilter from './components/ContactFilter'
import FilteredContact from './components/FilteredContact';
import Section from './components/Section'
import { Container } from './components';

const initialContacts = [
  {name: 'Adrian', phone: 11, id: '1'}, {name: 'Jacob Mercer', phone: 22, id: '2'}, {name: "Charles de Batz de Castelmore d'Artagnan", phone: 33, id: '3'}
]

class App extends Component {
  state = {
    contacts: initialContacts,
    name: ''
  };

  onFormSubmit = newContact => {
    this.setState(prevState => {

      const contactNameAlreadyExist = this.state.contacts.find(contact => contact.name === newContact.name)

      if (contactNameAlreadyExist) {
        alert(`${newContact.name} is already in contacts!`);
        return ;
      }

      newContact.id = uuidv4();
      const newContactList = {contacts: [ ...prevState.contacts, newContact]}

      return { ...prevState , ...newContactList }
    });
  };

  onFilter = filterByName => {
    this.setState(prevState => {
      return { ...prevState, name: filterByName}
    })
  }

  render() {
    return (
      <>
        <Section title='Phonebook'>
          <Container>
            <ContactInputForm onSubmit={this.onFormSubmit}/>
          </Container>
        </Section>

        <Section title='Contacts'>
          <Container>
            <ContactFilter
              contacts={this.state.contacts}
              onFilter={this.onFilter}
            />
            {this.state.name && (
              <FilteredContact
                contacts={this.state.contacts}
                name={this.state.name}
              />
            )}
            {!this.state.name && <ContactsList contacts={this.state.contacts}/>}
          </Container>
        </Section>
      </>
    )
  }
}

export default App;
