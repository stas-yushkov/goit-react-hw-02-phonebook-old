import { StyledFilteredContact } from "./StyledComponents";
import ContactsList from "../ContactsList";
import React from "react";

const FilteredContact = (props) => {

  const filteredNames = props.contacts.filter( contact => contact.name.includes(props.name));

  return (
    <StyledFilteredContact>
      <ContactsList contacts={filteredNames}/>
    </StyledFilteredContact>
  )
}

export default FilteredContact;