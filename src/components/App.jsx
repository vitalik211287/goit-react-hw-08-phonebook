import { Sections, Title } from './App.styled';

import Filter from './Filter/Filter';
import Contact from './Contact/Contact';
import { useState } from 'react';
import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import Form from './Form/Form';


export function App() {
  //   const [filter, setFilter] = useState('');
  return (
    <>
      {/* <Title>Phonebook</Title> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="register" element={<Contacts />} /> */}
          <Route path="contact" element={<Form />} />
          {/* <Sections>
      
        <Form />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={e => setFilter(e.target.value)} />
        <Contact filter={filter} />
      </Sections> */}

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}
