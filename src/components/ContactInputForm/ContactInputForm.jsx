import React, { Component } from 'react';

import { StyledContactInputForm } from './StyledComponents';

class ContactInputForm extends Component {
  state = {
    nameInput: '',
    numberInput: ''
  }

  handleChange = (e) => {
    this.setState({ nameInput: e.target.value })
  }

  render() {
    return (
      <StyledContactInputForm>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
        />
      </StyledContactInputForm>
    )
  }
}

export  default ContactInputForm;