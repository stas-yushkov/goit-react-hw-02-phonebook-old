import { StyledFilteredContact } from "./StyledComponents";
import ContactsList from "../ContactsList";
import React from "react";

const FilteredContact = ({ contacts, name }) => {

  const filteredNames = contacts.filter( contact => contact.name.toLowerCase().includes(name.toLowerCase()));

  return (
    <StyledFilteredContact>
      <ContactsList contacts={filteredNames}/>
    </StyledFilteredContact>
  )
}

export default FilteredContact;