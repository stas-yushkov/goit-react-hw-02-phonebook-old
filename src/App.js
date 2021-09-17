// import data from './data/data.json'

import React, { Component } from 'react';

import SomeComponent from './components/SomeComponent'
import ContactInputForm from './components/ContactInputForm'
import Section from './components/Section'
import { Container } from './components';


class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Section title='Phonebook'>
          <Container>
            <ContactInputForm/>
          </Container>
        </Section>
        <Section title='Contacts'>
          <Container>
            <SomeComponent/>
          </Container>
        </Section>
      </>
    )
  }
}

export default App;
