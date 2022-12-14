import React, { useState } from 'react';
import { Sections, Title } from './App.styled';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import Contact from './Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/slice/Slice';

export function App() {
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const setContact = value => {
    dispatch(setFilter(value));
  };

  return (
    <Sections>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contacts</Title>
      <Filter
        onChange={e => setContact(e.target.value)}
             value={filter}
      ></Filter>
      <Contact />
    </Sections>
  );
}


