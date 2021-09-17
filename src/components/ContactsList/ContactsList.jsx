import React, { Component } from 'react';

import { StyledList } from './StyledComponents';
import ListItem from "./ListItem";

class ContactsList extends Component {
  render() {
    return (
      <StyledList>
        { this.props.contacts.map(contact => <ListItem key={contact.id} contact={contact.name}/>) }
      </StyledList>
    )
  }
}

export  default ContactsList;