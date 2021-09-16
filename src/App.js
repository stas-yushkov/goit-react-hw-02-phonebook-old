// import data from './data/data.json'

import React, { Component } from 'react';

import SomeComponent from './components/SomeComponent'
import Section from './components/Section'
import { Container } from './components';


class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Section title='Some Text'>
          <Container>
            <SomeComponent/>
          </Container>
        </Section>
      </>
    )
  }
}

export default App;
