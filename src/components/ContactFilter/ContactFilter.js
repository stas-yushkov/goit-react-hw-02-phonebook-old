import React, { Component } from "react";

import { StyledContactFilter } from './StyledComponrnts'

class ContactFilter extends Component{
  state = {
    filter: ''
  }

  onFilterChange = (e) => {
    this.setState({filter: e.target.value});
    this.props.onFilter(e.target.value);
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