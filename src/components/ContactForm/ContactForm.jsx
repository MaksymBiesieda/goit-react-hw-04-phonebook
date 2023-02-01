import PropTypes from 'prop-types';
import React, { useState } from "react";
import css from './ContactForm.module.css';

export default function ContactForm({onFormSubmit, contacts}) {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (event) => {
    const { value } = event.currentTarget;
    setName(value);
  }

  const handleNumberChange = (event) => {
    const { value } = event.currentTarget;
    setNumber(value);
  }

  const handleSubmit = (event) => {
     event.preventDefault();
     const isSameName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isSameName) { alert(`${name} is already in contacts`) } else {
      onFormSubmit({ name: name, number: number });
      reset();
    }
     
  }

 const reset = () => {
   setName('');
   setNumber('');
  }

 return (
<div>
 <form onSubmit={handleSubmit} className={css.form}>
  <label className={css.label}>
    Name
   <input
    type="text"
    name="name"
    value={name}               
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    onChange={handleNameChange}
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    className={css.input}
  />
  </label> 
  <label className={css.label}>
    Number
   <input
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    value={number}
    onChange={handleNumberChange}
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
    className={css.input}
   />
  </label>
   <button type='submit'>Add contact</button>             
 </form>
</div>
)
   
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, number: PropTypes.string.isRequired, }),),
}