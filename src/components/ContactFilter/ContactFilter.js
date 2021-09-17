// import React, { Component } from "react";
import debounce from 'lodash.debounce'

import { StyledContactFilter } from './StyledComponrnts'

const ContactFilter = props => {

  const sendFilterQueryToApp = debounce(props.onFilter, 300);

  const onFilterChange = (e) => {
    sendFilterQueryToApp(e.target.value.toLowerCase().trim());
  }

    return (
      <StyledContactFilter>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={props.filter}
          onChange={onFilterChange}
        />
      </StyledContactFilter>
    )
}

export default ContactFilter;