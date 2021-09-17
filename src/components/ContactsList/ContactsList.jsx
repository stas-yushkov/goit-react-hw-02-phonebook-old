import React, { Component } from 'react';

import { StyledList } from './StyledComponents';
import ListItem from "./ListItem";

class ContactsList extends Component {
  state = {
    contacts: this.props.contacts,
  }

  componentDidUpdate() {
    if (this.state.contacts.length !== this.props.contacts.length) {
      this.setState((prevState) => {
        return { ...prevState, ...{contacts: this.props.contacts}};
      })
    }
  //
  //   if (this.state.filter !== this.props.filter) {
  //     this.setState((prevState) => {
  //       return { ...prevState, ...{filter: this.props.filter}};
  //     })
  //
  //     const FilteredContact = () => {
  //       const { contacts, filter } = this.state;
  //
  //       console.log("FilteredContact");
  //       const filteredArray = contacts.filter(contact => {
  //
  //         console.log(contact.name.toLowerCase());
  //         console.log(contact.name.toLowerCase().includes(filter));
  //         return contact.name.toLowerCase().includes(filter);
  //       });
  //
  //       console.log(filteredArray);
  //       return filteredArray;
  //     }
  //
  //     console.log(FilteredContact());
  //     this.setState((prevState) => {
  //       return { ...prevState, ...{contacts: FilteredContact()}};
  //     })
  //   }
  }

  render() {
    return (
      <StyledList>
        { this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.props.filter)).map(contact => (
          <ListItem
            key={contact.id}
            id={contact.id}
            contact={contact.name}
            phone={contact.phone}
            handleDel={this.props.handleDel}
          />
        ))}
      </StyledList>
    )
  }
}

export  default ContactsList;