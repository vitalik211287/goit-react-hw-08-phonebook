import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts/Contacts';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Regiser';

export function App() {
  return (
    <div className="ggggg">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Outlet />
    </div>
  );
}
