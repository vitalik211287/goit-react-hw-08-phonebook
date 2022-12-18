import React from 'react';
import { Sections, Title } from './App.styled';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import Contact from './Contact/Contact';
import API from './API';

export function App() {
  return (
    <Sections>
      <Title>Phonebook</Title>
      {/* <Form /> */}
      <Title>Contacts</Title>
      <API />
      {/* <Filter /> */}
      <Contact />
    </Sections>
  );
}
