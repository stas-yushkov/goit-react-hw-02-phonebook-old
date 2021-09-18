import React, { Component } from 'react';

import { StyledContactInputForm } from './ContactInputForm.styled';
import { Button } from 'components';

class ContactInputForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetState();
  };

  resetState = () => {
    this.setState({
      name: '',
      phone: '',
    });
  };

  render() {
    return (
      <StyledContactInputForm onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </label>

        <Button type="submit">Add</Button>
      </StyledContactInputForm>
    );
  }
}

export { ContactInputForm };
