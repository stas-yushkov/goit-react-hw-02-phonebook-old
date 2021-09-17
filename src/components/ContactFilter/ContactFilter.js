import React, { Component } from "react";
import debounce from 'lodash.debounce'

import { StyledContactFilter } from './StyledComponrnts'

class ContactFilter extends Component{
  state = {
    filter: ''
  }

  debouncedOnFilter = debounce(this.props.onFilter, 300);

  onFilterChange = (e) => {
    this.setState({filter: e.target.value});
    // debounce(() => this.props.onFilter(e.target.value), 300);
    this.debouncedOnFilter(e.target.value);
  }

  render() {
    return (
      <StyledContactFilter>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.onFilterChange}
        />
      </StyledContactFilter>
    )
  }
}

export default ContactFilter;