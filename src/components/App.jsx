import { Sections, Title } from './App.styled';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import Contact from './Contact/Contact';
import { useState } from 'react';


export function App() {
      const [filter, setFilter] = useState('');
  return (
    <Sections>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={e => setFilter(e.target.value)} />
      <Contact filter={filter} />
    </Sections>
  );
}
