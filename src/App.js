import initialContacts from './data/initialContacts.json'

import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactsList from './components/ContactsList'
import ContactInputForm from './components/ContactInputForm'
import ContactFilter from './components/ContactFilter'
// import FilteredContact from './components/FilteredContact';
import Section from './components/Section'
import { Container } from './components';

// const initialContacts = initialContacts;

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: ''
  };

  addNewContact = newContact => {
    this.setState(prevState => {

      const isNameAlreadyExist = contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      const contactNameAlreadyExist = this.state.contacts.find(isNameAlreadyExist)

      if (contactNameAlreadyExist) {
        alert(`${newContact.name} is already in contacts!`);
        return
      }

      newContact.id = uuidv4();
      const newContactList = {contacts: [ ...prevState.contacts, newContact]}

      return { ...prevState , ...newContactList }
    });
  };

  setFilter = nameToFilter => {
    this.setState(prevState => {
      return { ...prevState, filter: nameToFilter}
    })
  }

  handleDel = contactName => {
    console.log(contactName);
  }

  render() {
    return (
      <>
        <Section title='Phonebook'>
          <Container>
            <ContactInputForm onSubmit={this.addNewContact}/>
          </Container>
        </Section>

        <Section title='Contacts'>
          <Container>
            <ContactFilter
              contacts={this.state.contacts}
              onFilter={this.setFilter}
            />

              {/*<FilteredContact*/}
              {/*  contacts={this.state.contacts}*/}
              {/*  name={this.state.name}*/}
              {/*/>*/}


              <ContactsList
                contacts={this.state.contacts}
                handleDel={this.handleDel}
                filter={this.state.filter}
              />

          </Container>
        </Section>
      </>
    )
  }
}

export default App;
