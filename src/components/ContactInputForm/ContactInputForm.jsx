import React, { Component } from 'react';

import { StyledContactInputForm } from './StyledComponents';

class ContactInputForm extends Component {
  state = {
    name: '',
    phone: ''
  }

  handleChange = (e) => {
    const { name,value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e)=> {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({
      name: '',
      phone: ''
    })
  }


  render() {
    return (
      <StyledContactInputForm
        onSubmit={this.handleSubmit}
      >
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
            required
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </label>

        <button
          type="submit"
        >
          Add
        </button>
      </StyledContactInputForm>
    )
  }
}

export  default ContactInputForm;