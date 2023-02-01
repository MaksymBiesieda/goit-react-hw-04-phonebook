import React, { useState, useEffect } from "react";
import shortid from 'shortid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './App.module.css';

export default function App () {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

 const formSubmitHandler = (data) => {
    const itemId = shortid.generate();
    const fullData = { id: itemId, ...data }
    setContacts(prevState => ([fullData, ...prevState]));
  }

  const filterHandler = (event) => {
    setFilter(event.currentTarget.value);
  }

  const getFilteredContacts = () => {
    return contacts.filter(contact => (contact.name.toLowerCase().includes(filter.toLowerCase())))
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id),
    );
  }

    const filterResult = getFilteredContacts();
    return(
    <div className={css.container}>
      <h1 className={css.title}>PhoneBook</h1>
        <ContactForm onFormSubmit={formSubmitHandler} contacts={contacts} />
        <h2 className={css.contacts_title}>Contacts</h2>
        <Filter onFilterChange={filterHandler}/>
        <ContactList  filterResult={filterResult} onDeleteContact={deleteContact} />
    </div> 
    )
};